import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const numeralVariants = cva("font-display font-normal tracking-[-0.06em]", {
	variants: {
		fluid: {
			true: "fl-text-[40px]/mobile md:fl-text-[68px]/desktop",
			false: "text-[40px] md:text-[68px]",
		},
	},
	defaultVariants: {
		fluid: true,
	},
});

const numeralLeadingVariants = cva("[line-height:round(calc(1.1471em),1px)]");

type NumeralProps = React.ComponentProps<"span"> &
	VariantProps<typeof numeralVariants> & {
		as?: React.ElementType;
		fluid?: boolean;
	};

export function Numeral({
	as: Comp = "span",
	className,
	fluid,
	...props
}: NumeralProps) {
	return (
		<Comp
			className={cn(
				numeralVariants({ fluid }),
				numeralLeadingVariants(),
				className,
			)}
			{...props}
		/>
	);
}
