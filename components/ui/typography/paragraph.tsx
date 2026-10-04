import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const paragraphVariants = cva("font-sans", {
	variants: {
		variant: {
			"1": "font-normal tracking-[-0.02em]",
			"2": "font-normal",
			"3": "font-normal tracking-[-0.02em]",
			"4": "font-normal",
			"5": "font-medium tracking-[-0.008em]",
			"6": "font-light",
			"7": "font-normal",
			"8": "font-light",
		},
		fluid: { true: "", false: "" },
	},
	compoundVariants: [
		{
			variant: "1",
			fluid: false,
			className: "text-[22px] md:text-[32px]",
		},
		{
			variant: "1",
			fluid: true,
			className: "fl-text-[22px]/mobile md:fl-text-[32px]/desktop",
		},
		{
			variant: "2",
			fluid: false,
			className: "text-[18px] md:text-[24px]",
		},
		{
			variant: "2",
			fluid: true,
			className: "fl-text-[18px]/mobile md:fl-text-[24px]/desktop",
		},
		{
			variant: "3",
			fluid: false,
			className: "text-[18px] md:text-[20px]",
		},
		{
			variant: "3",
			fluid: true,
			className: "fl-text-[18px]/mobile md:fl-text-[20px]/desktop",
		},
		{
			variant: "4",
			fluid: false,
			className: "text-[16px]",
		},
		{
			variant: "4",
			fluid: true,
			className: "fl-text-[16px]/mobile md:fl-text-[16px]/desktop",
		},
		{
			variant: "5",
			fluid: false,
			className: "text-[16px]",
		},
		{
			variant: "5",
			fluid: true,
			className: "fl-text-[16px]/mobile md:fl-text-[16px]/desktop",
		},
		{
			variant: "6",
			fluid: false,
			className: "text-[16px]",
		},
		{
			variant: "6",
			fluid: true,
			className: "fl-text-[16px]/mobile md:fl-text-[16px]/desktop",
		},
		{
			variant: "7",
			fluid: false,
			className: "text-[14px]",
		},
		{
			variant: "7",
			fluid: true,
			className: "fl-text-[14px]/mobile md:fl-text-[14px]/desktop",
		},
		{
			variant: "8",
			fluid: false,
			className: "text-[14px]",
		},
		{
			variant: "8",
			fluid: true,
			className: "fl-text-[14px]/mobile md:fl-text-[14px]/desktop",
		},
	],
	defaultVariants: {
		variant: "1",
		fluid: true,
	},
});

const paragraphLeadingVariants = cva("", {
	variants: {
		variant: {
			"1": "[line-height:round(calc(1.4062em),1px)]",
			"2": "[line-height:round(calc(1.27em),1px)]",
			"3": "[line-height:round(calc(1.4em),1px)]",
			"4": "[line-height:round(calc(1.5em),1px)]",
			"5": "[line-height:round(calc(1.5em),1px)]",
			"6": "[line-height:round(calc(1.5em),1px)]",
			"7": "[line-height:round(calc(1.4286em),1px)]",
			"8": "[line-height:round(calc(1.4286em),1px)]",
		},
	},
	defaultVariants: {
		variant: "1",
	},
});

type ParagraphProps = React.ComponentProps<"p"> &
	VariantProps<typeof paragraphVariants> & {
		as?: React.ElementType;
		fluid?: boolean;
	};

export function Paragraph({
	variant,
	fluid,
	as: Comp = "p",
	className,
	...props
}: ParagraphProps) {
	return (
		<Comp
			className={cn(
				paragraphVariants({ variant, fluid }),
				paragraphLeadingVariants({ variant }),
				className,
			)}
			{...props}
		/>
	);
}
