import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const titleVariants = cva("font-display font-normal tracking-[-0.02em]", {
	variants: {
		variant: {
			"1": "",
			"2": "",
			"3": "",
		},
		fluid: { true: "", false: "" },
	},
	compoundVariants: [
		{
			variant: "1",
			fluid: false,
			className: "text-[40px] md:text-[68px]",
		},
		{
			variant: "1",
			fluid: true,
			className: "fl-text-[40px]/mobile md:fl-text-[68px]/desktop",
		},
		{
			variant: "2",
			fluid: false,
			className: "text-[34px] md:text-[60px]",
		},
		{
			variant: "2",
			fluid: true,
			className: "fl-text-[34px]/mobile md:fl-text-[60px]/desktop",
		},
		{
			variant: "3",
			fluid: false,
			className: "text-[34px] md:text-[60px]",
		},
		{
			variant: "3",
			fluid: true,
			className: "fl-text-[34px]/mobile md:fl-text-[60px]/desktop",
		},
	],
	defaultVariants: {
		variant: "1",
		fluid: true,
	},
});

const titleLeadingVariants = cva("", {
	variants: {
		variant: {
			"1": "[line-height:round(calc(1.1471em),1px)]",
			"2": "[line-height:round(calc(1.2em),1px)]",
			"3": "[line-height:round(calc(1.0667em),1px)]",
		},
	},
	defaultVariants: {
		variant: "1",
	},
});

const elementMap = {
	"1": "h1",
	"2": "h2",
	"3": "h2",
} as const;

type TitleProps = React.ComponentProps<"h1"> &
	VariantProps<typeof titleVariants> & {
		as?: React.ElementType;
		fluid?: boolean;
	};

export function Title({ variant, fluid, as, className, ...props }: TitleProps) {
	const Comp = as ?? elementMap[variant ?? "1"];
	return (
		<Comp
			className={cn(
				titleVariants({ variant, fluid }),
				titleLeadingVariants({ variant }),
				className,
			)}
			{...props}
		/>
	);
}
