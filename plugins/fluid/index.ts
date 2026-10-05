import plugin from "tailwindcss/plugin";

export const FLUID_PROPERTIES: Record<string, string | string[]> = {
	"fl-text": "font-size",
	"fl-leading": "line-height",
	"fl-tracking": "letter-spacing",
	"fl-indent": "text-indent",

	"fl-p": "padding",
	"fl-px": ["padding-left", "padding-right"],
	"fl-py": ["padding-top", "padding-bottom"],
	"fl-pt": "padding-top",
	"fl-pb": "padding-bottom",
	"fl-pl": "padding-left",
	"fl-pr": "padding-right",
	"fl-ps": "padding-inline-start",
	"fl-pe": "padding-inline-end",

	"fl-m": "margin",
	"fl-mx": ["margin-left", "margin-right"],
	"fl-my": ["margin-top", "margin-bottom"],
	"fl-mt": "margin-top",
	"fl-mb": "margin-bottom",
	"fl-ml": "margin-left",
	"fl-mr": "margin-right",
	"fl-ms": "margin-inline-start",
	"fl-me": "margin-inline-end",

	"fl-w": "width",
	"fl-h": "height",
	"fl-size": ["width", "height"],
	"fl-min-w": "min-width",
	"fl-max-w": "max-width",
	"fl-min-h": "min-height",
	"fl-max-h": "max-height",
	"fl-basis": "flex-basis",

	"fl-gap": "gap",
	"fl-gap-x": "column-gap",
	"fl-gap-y": "row-gap",

	"fl-inset": "inset",
	"fl-inset-x": ["left", "right"],
	"fl-inset-y": ["top", "bottom"],
	"fl-top": "top",
	"fl-right": "right",
	"fl-bottom": "bottom",
	"fl-left": "left",
	"fl-start": "inset-inline-start",
	"fl-end": "inset-inline-end",

	"fl-border": "border-width",
	"fl-border-t": "border-top-width",
	"fl-border-r": "border-right-width",
	"fl-border-b": "border-bottom-width",
	"fl-border-l": "border-left-width",
	"fl-border-x": ["border-left-width", "border-right-width"],
	"fl-border-y": ["border-top-width", "border-bottom-width"],
	"fl-border-s": "border-inline-start-width",
	"fl-border-e": "border-inline-end-width",

	"fl-rounded": "border-radius",
	"fl-rounded-t": ["border-top-left-radius", "border-top-right-radius"],
	"fl-rounded-r": ["border-top-right-radius", "border-bottom-right-radius"],
	"fl-rounded-b": ["border-bottom-right-radius", "border-bottom-left-radius"],
	"fl-rounded-l": ["border-top-left-radius", "border-bottom-left-radius"],
	"fl-rounded-tl": "border-top-left-radius",
	"fl-rounded-tr": "border-top-right-radius",
	"fl-rounded-bl": "border-bottom-left-radius",
	"fl-rounded-br": "border-bottom-right-radius",
	"fl-rounded-ss": "border-start-start-radius",
	"fl-rounded-se": "border-start-end-radius",
	"fl-rounded-es": "border-end-start-radius",
	"fl-rounded-ee": "border-end-end-radius",

	"fl-outline": "outline-width",

	"fl-scroll-p": "scroll-padding",
	"fl-scroll-px": ["scroll-padding-left", "scroll-padding-right"],
	"fl-scroll-py": ["scroll-padding-top", "scroll-padding-bottom"],
	"fl-scroll-pt": "scroll-padding-top",
	"fl-scroll-pb": "scroll-padding-bottom",
	"fl-scroll-pl": "scroll-padding-left",
	"fl-scroll-pr": "scroll-padding-right",
	"fl-scroll-ps": "scroll-padding-inline-start",
	"fl-scroll-pe": "scroll-padding-inline-end",

	"fl-scroll-m": "scroll-margin",
	"fl-scroll-mx": ["scroll-margin-left", "scroll-margin-right"],
	"fl-scroll-my": ["scroll-margin-top", "scroll-margin-bottom"],
	"fl-scroll-mt": "scroll-margin-top",
	"fl-scroll-mb": "scroll-margin-bottom",
	"fl-scroll-ml": "scroll-margin-left",
	"fl-scroll-mr": "scroll-margin-right",
	"fl-scroll-ms": "scroll-margin-inline-start",
	"fl-scroll-me": "scroll-margin-inline-end",
};

export function parseValue(
	value: string | number,
): { n: number; unit: string } | null {
	if (typeof value === "number") return { n: value, unit: "px" };
	const negated = value.match(/^calc\(\s*(.+?)\s*\*\s*-1\s*\)$/);
	if (negated) {
		const inner = parseValue(negated[1]);
		if (!inner) return null;
		return { n: -inner.n, unit: inner.unit };
	}
	const match = value.match(/^([+-]?\d*\.?\d+)\s*([a-z%]*)/i);
	if (!match) return null;
	return { n: parseFloat(match[1]), unit: match[2] || "px" };
}

export function parseViewport(viewport: string): Record<string, number> {
	const result: Record<string, number> = {};
	for (const token of viewport.trim().split(/\s+/)) {
		const parsed = parseValue(token);
		if (parsed) result[parsed.unit] = parsed.n;
	}
	return result;
}

export function toProportionalVw(size: number, viewport: number): string {
	const vw = +((size / viewport) * 100).toFixed(4);
	return `${vw}vw`;
}

export function resolveFluid(
	value: string | number,
	viewport: Record<string, number>,
): string | null {
	const parsed = parseValue(value);
	if (!parsed) return null;
	const viewportWidth = viewport[parsed.unit];
	if (viewportWidth == null) return null;
	return toProportionalVw(parsed.n, viewportWidth);
}

export function createFluid<T extends Record<string, number>>(viewports: T) {
	return (value: string | number, viewport: keyof T): string => {
		const parsed = parseValue(value);
		if (!parsed) throw new Error(`Invalid fluid value: ${value}`);
		const viewportWidth = viewports[viewport];
		if (viewportWidth == null)
			throw new Error(`Unknown viewport: ${String(viewport)}`);
		return toProportionalVw(parsed.n, viewportWidth);
	};
}

export function buildDeclarations(
	cssProps: string | string[],
	fluidValue: string,
): Record<string, string> {
	if (Array.isArray(cssProps)) {
		return Object.fromEntries(cssProps.map((prop) => [prop, fluidValue]));
	}
	return { [cssProps]: fluidValue };
}

function filterStringMap(raw: Record<string, unknown>): Record<string, string> {
	const result: Record<string, string> = {};
	for (const [key, value] of Object.entries(raw)) {
		if (typeof value === "string") result[key] = value;
	}
	return result;
}

export default plugin(function ({ matchUtilities, theme }) {
	const rawViewports = filterStringMap(
		(theme("fluid-viewport") as Record<string, unknown> | undefined) ?? {},
	);

	const viewports = Object.fromEntries(
		Object.entries(rawViewports).map(([name, value]) => [
			name,
			parseViewport(value),
		]),
	);

	for (const [name, cssProps] of Object.entries(FLUID_PROPERTIES)) {
		matchUtilities(
			{
				[name]: (value, { modifier }) => {
					if (!modifier) return {};
					const viewport = viewports[modifier];
					if (!viewport) return {};

					const fluidValue = resolveFluid(String(value), viewport);
					if (!fluidValue) return {};
					return buildDeclarations(cssProps, fluidValue);
				},
			},
			{
				type: ["length", "any"],
				modifiers: "any" as never,
				supportsNegativeValues: true,
			},
		);
	}

	for (const [name, template] of Object.entries({
		"fl-translate-x": (v: string) => `${v} var(--tw-translate-y)`,
		"fl-translate-y": (v: string) => `var(--tw-translate-x) ${v}`,
	})) {
		matchUtilities(
			{
				[name]: (value, { modifier }): Record<string, string> => {
					if (!modifier) return {};
					const viewport = viewports[modifier];
					if (!viewport) return {};
					const fluidValue = resolveFluid(String(value), viewport);
					if (!fluidValue) return {};
					return { translate: template(fluidValue) };
				},
			},
			{
				type: ["length", "any"],
				modifiers: "any" as never,
				supportsNegativeValues: true,
			},
		);
	}
});
