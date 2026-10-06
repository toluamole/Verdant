import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heading, Label, Paragraph } from "@/components/ui/typography";

export const placeholderBody =
	"Crafting Actionable Strategies to Achieve Your Goals Tailored Plans for Sustainable Growth and Long-Term Success.";

export type Slide = {
	title: string;
	body: string;
	surface: string;
	texture: string;
	media: string | null;
};

export function CardSlide({ slide }: { slide: Slide }) {
	return (
		<article
			className={`relative flex w-[88vw] shrink-0 snap-center gap-12 overflow-hidden rounded-[20px] p-5 md:fl-w-[1128px]/desktop md:fl-gap-[48px]/desktop md:fl-rounded-[20px]/desktop md:fl-p-[20px]/desktop ${slide.surface}`}
		>
			<Image
				src={slide.texture}
				alt=""
				fill
				sizes="1128px"
				className="object-cover opacity-30"
			/>
			<div className="relative hidden fl-w-[520px]/desktop shrink-0 overflow-hidden rounded-[12px] bg-card md:block md:fl-rounded-[12px]/desktop">
				{slide.media ? (
					<Image
						src={slide.media}
						alt=""
						fill
						sizes="520px"
						className="object-cover"
					/>
				) : null}
			</div>
			<div className="relative flex flex-1 flex-col justify-between gap-3 py-4 md:fl-gap-[12px]/desktop md:fl-py-[16px]/desktop">
				<div className="flex flex-col gap-3 md:fl-gap-[12px]/desktop">
					<Heading
						variant="2"
						as="h3"
						className="text-light-foreground"
					>
						{slide.title}
					</Heading>
					<Paragraph variant="4" className="text-light-muted">
						{slide.body}
					</Paragraph>
				</div>
				<Button
					variant="dark"
					className="self-start px-5 md:fl-px-[20px]/desktop"
				>
					Learn more
				</Button>
			</div>
		</article>
	);
}

const outcomeItems = [
	{
		text: 0,
		line: { left: "6.63%", top: "25.65%", height: "71.54%" },
		pos: { left: "9.09%", top: "25.25%", width: "32.82%" },
	},
	{
		text: 1,
		line: { left: "35.75%", top: "48.10%", height: "49.30%" },
		pos: { left: "38.21%", top: "47.29%", width: "31.74%" },
	},
	{
		text: 2,
		line: { left: "59.32%", top: "71.94%", height: "25.45%" },
		pos: { left: "61.02%", top: "65.53%", width: "32.82%" },
	},
];

export type ServiceContent = {
	title: React.ReactNode;
	body: string;
	outcomes: [string, string, string];
	panel: string;
	/** Block base colour; the leaf texture sits over it at 20%. */
	surface: string;
};

export const services: ServiceContent[] = [
	{
		title: (
			<>
				Funding &amp;
				<br />
				Capital Readiness
			</>
		),
		body: "Face scrutiny with confidence. You’re raising capital or preparing for an audit. Investors will dig into your financials, and your story needs to be airtight",
		outcomes: [
			"Readiness assessments identifying gaps before investors do.",
			"Financial narratives that translate complexity into clarity",
			"Readiness assessments identifying gaps before investors do.",
		],
		panel: "/images/services/panel-funding.webp",
		surface: "#2A3F20",
	},
	{
		title: (
			<>
				Budgeting &amp;
				<br />
				Resource Planning
			</>
		),
		body: "Align resources with operational reality. Traditional budgets disconnect from operations. You need budgets that show what’s actually possible within your constraints.",
		outcomes: [
			"Resource allocation tied to staffing and programs",
			"Capacity-aware planning linking dollars to outcomes",
			"Board materials communicating tradeoffs clearly",
		],
		panel: "/images/home/wood-rings.webp",
		surface: "#7D3520",
	},
	{
		title: "Financial Modeling & Scenario planning",
		body: "Understand your options before you commit. Strategic decisions have financial ripple effects. You need to see tradeoffs between paths, not just one possible future.",
		outcomes: [
			"Multi-year forecasts tied to staffing and infrastructure",
			"Scenario analysis with clear decision triggers",
			"Runway and capacity visibility",
		],
		panel: "/images/services/panel-modeling.webp",
		surface: "#4C3D19",
	},
	{
		title: "Operations Infrastructure",
		body: "Build systems that scale without breaking things. You’ve outgrown spreadsheets but can’t afford over-engineering. You need the right systems for your stage.",
		outcomes: [
			"Right-sized systems that professionalize without bloat",
			"Process documentation teams actually follow",
			"Technology recommendations that integrate",
		],
		panel: "/images/home/difference-bg.webp",
		surface: "#372C23",
	},
	{
		title: (
			<>
				Stakeholder Reporting &amp;
				<br />
				Communications
			</>
		),
		body: "Transform data into stakeholder confidence. Different stakeholders need different information. Generic reports satisfy no one, and custom reports for each group aren’t sustainable.",
		outcomes: [
			"Narrative-driven materials connecting finance to outcomes",
			"Multi-stakeholder frameworks from one source of truth",
			"Decision-focused packages, not just historical data",
		],
		panel: "/images/about/cta-bg.webp",
		surface: "#1C1612",
	},
];

/** Figma layers the leaf texture at 20% over the block colour. */
const wash = (hex: string) => `color-mix(in srgb, ${hex} 80%, transparent)`;

export function FeatureSlide({
	content = services[0],
	ctaVariant = "outline",
	layout = "slide",
}: {
	content?: ServiceContent;
	ctaVariant?: "outline" | "solid";
	layout?: "slide" | "block";
}) {
	const sizing =
		layout === "slide"
			? "w-[88vw] shrink-0 snap-center md:fl-w-[1243px]/desktop"
			: "w-full md:fl-w-[1248px]/desktop";

	return (
		<article
			className={`surface-moss relative flex ${sizing} flex-col gap-8 overflow-hidden rounded-[20px] bg-cover bg-center p-6 md:flex-row md:justify-between md:fl-gap-[32px]/desktop md:fl-rounded-[20px]/desktop md:fl-p-[52px]/desktop`}
			style={{
				backgroundColor: content.surface,
				backgroundImage: `linear-gradient(${wash(content.surface)}, ${wash(content.surface)}), url(/images/home/panel-texture.webp)`,
			}}
		>
			<div className="flex flex-col justify-between md:fl-w-[448px]/desktop md:fl-py-[42px]/desktop">
				<div className="flex flex-col gap-[31px]">
					<Heading variant="2" as="h3" className="text-brand-cream">
						{content.title}
					</Heading>
					<Paragraph variant="4" className="max-w-[309px]">
						{content.body}
					</Paragraph>
				</div>
				<Button
					variant={ctaVariant}
					size="lg"
					className="mt-10 self-start md:mt-0"
				>
					Schedule a Call Today
				</Button>
			</div>

			<div
				className="relative aspect-[649/499] w-full shrink-0 overflow-hidden rounded-[5px] bg-cover bg-center md:fl-w-[649px]/desktop"
				style={{ backgroundImage: `url(${content.panel})` }}
			>
				<div className="absolute inset-0 bg-white/10" />
				<div className="absolute inset-[13px] rounded-[3px] bg-[#1C1612]/34" />

				<Label
					variant="1"
					className="absolute text-brand-cream"
					style={{ left: "6.63%", top: "8.82%" }}
				>
					WHAT YOU GET
				</Label>

				{outcomeItems.map((item) => (
					<span
						key={`rule-${item.text}`}
						aria-hidden="true"
						className="absolute w-px bg-foreground/20"
						style={item.line}
					/>
				))}

				{outcomeItems.map((item) => (
					<Paragraph
						variant="4"
						key={`copy-${item.text}`}
						className="absolute"
						style={item.pos}
					>
						{content.outcomes[item.text]}
					</Paragraph>
				))}
			</div>
		</article>
	);
}
