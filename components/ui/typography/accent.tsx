import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const accentVariants = cva("font-accent font-medium", {
	variants: {
		variant: {
			"1": "",
			"2": "",
		},
		fluid: { true: "", false: "" },
	},
	compoundVariants: [
		{
			variant: "1",
			fluid: false,
			className: "text-[14px]",
		},
		{
			variant: "1",
			fluid: true,
			className: "fl-text-[14px]/mobile md:fl-text-[14px]/desktop",
		},
		{
			variant: "2",
			fluid: false,
			className: "text-[12px]",
		},
		{
			variant: "2",
			fluid: true,
			className: "fl-text-[12px]/mobile md:fl-text-[12px]/desktop",
		},
	],
	defaultVariants: {
		variant: "1",
		fluid: true,
	},
});

const accentLeadingVariants = cva("", {
	variants: {
		variant: {
			"1": "[line-height:round(calc(1.7143em),1px)]",
			"2": "[line-height:round(calc(1.0em),1px)]",
		},
	},
	defaultVariants: {
		variant: "1",
	},
});

type AccentProps = React.ComponentProps<"p"> &
	VariantProps<typeof accentVariants> & {
		as?: React.ElementType;
		fluid?: boolean;
	};

export function Accent({
	variant,
	fluid,
	as: Comp = "p",
	className,
	...props
}: AccentProps) {
	return (
		<Comp
			className={cn(
				accentVariants({ variant, fluid }),
				accentLeadingVariants({ variant }),
				className,
			)}
			{...props}
		/>
	);
}
