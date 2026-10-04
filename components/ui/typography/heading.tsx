import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("font-display font-normal tracking-[-0.02em]", {
	variants: {
		variant: {
			"1": "",
			"2": "",
			"3": "",
			"4": "",
		},
		fluid: { true: "", false: "" },
	},
	compoundVariants: [
		{
			variant: "1",
			fluid: false,
			className: "text-[30px] md:text-[48px]",
		},
		{
			variant: "1",
			fluid: true,
			className: "fl-text-[30px]/mobile md:fl-text-[48px]/desktop",
		},
		{
			variant: "2",
			fluid: false,
			className: "text-[26px] md:text-[36px]",
		},
		{
			variant: "2",
			fluid: true,
			className: "fl-text-[26px]/mobile md:fl-text-[36px]/desktop",
		},
		{
			variant: "3",
			fluid: false,
			className: "text-[24px] md:text-[32px]",
		},
		{
			variant: "3",
			fluid: true,
			className: "fl-text-[24px]/mobile md:fl-text-[32px]/desktop",
		},
		{
			variant: "4",
			fluid: false,
			className: "text-[20px] md:text-[24px]",
		},
		{
			variant: "4",
			fluid: true,
			className: "fl-text-[20px]/mobile md:fl-text-[24px]/desktop",
		},
	],
	defaultVariants: {
		variant: "1",
		fluid: true,
	},
});

const headingLeadingVariants = cva("", {
	variants: {
		variant: {
			"1": "[line-height:round(calc(1.1667em),1px)]",
			"2": "[line-height:round(calc(1.2222em),1px)]",
			"3": "[line-height:round(calc(1.5625em),1px)]",
			"4": "[line-height:round(calc(1.3333em),1px)]",
		},
	},
	defaultVariants: {
		variant: "1",
	},
});

const elementMap = {
	"1": "h2",
	"2": "h3",
	"3": "h3",
	"4": "h4",
} as const;

type HeadingProps = React.ComponentProps<"h2"> &
	VariantProps<typeof headingVariants> & {
		as?: React.ElementType;
		fluid?: boolean;
	};

export function Heading({
	variant,
	fluid,
	as,
	className,
	...props
}: HeadingProps) {
	const Comp = as ?? elementMap[variant ?? "1"];
	return (
		<Comp
			className={cn(
				headingVariants({ variant, fluid }),
				headingLeadingVariants({ variant }),
				className,
			)}
			{...props}
		/>
	);
}
