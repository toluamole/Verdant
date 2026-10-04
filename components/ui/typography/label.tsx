import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const labelVariants = cva("font-sans uppercase", {
	variants: {
		variant: {
			"1": "font-bold tracking-[0.24em]",
			"2": "font-medium tracking-[0.12em]",
			"3": "font-medium tracking-[0.12em]",
		},
		fluid: { true: "", false: "" },
	},
	compoundVariants: [
		{
			variant: "1",
			fluid: false,
			className: "text-[14px] md:text-[16px]",
		},
		{
			variant: "1",
			fluid: true,
			className: "fl-text-[14px]/mobile md:fl-text-[16px]/desktop",
		},
		{
			variant: "2",
			fluid: false,
			className: "text-[12px] md:text-[14px]",
		},
		{
			variant: "2",
			fluid: true,
			className: "fl-text-[12px]/mobile md:fl-text-[14px]/desktop",
		},
		{
			variant: "3",
			fluid: false,
			className: "text-[12px]",
		},
		{
			variant: "3",
			fluid: true,
			className: "fl-text-[12px]/mobile md:fl-text-[12px]/desktop",
		},
	],
	defaultVariants: {
		variant: "1",
		fluid: true,
	},
});

const labelLeadingVariants = cva("", {
	variants: {
		variant: {
			"1": "[line-height:round(calc(1.5em),1px)]",
			"2": "[line-height:round(calc(1.4286em),1px)]",
			"3": "[line-height:round(calc(1.6667em),1px)]",
		},
	},
	defaultVariants: {
		variant: "1",
	},
});

type LabelProps = React.ComponentProps<"p"> &
	VariantProps<typeof labelVariants> & {
		as?: React.ElementType;
		fluid?: boolean;
	};

export function Label({
	variant,
	fluid,
	as: Comp = "p",
	className,
	...props
}: LabelProps) {
	return (
		<Comp
			className={cn(
				labelVariants({ variant, fluid }),
				labelLeadingVariants({ variant }),
				className,
			)}
			{...props}
		/>
	);
}
