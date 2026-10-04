import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-1 rounded-[12px] px-7 py-2 font-sans text-[16px] leading-6 font-medium tracking-[-0.008em] transition-opacity hover:opacity-90",
	{
		variants: {
			variant: {
				solid: "bg-accent text-button-foreground",
				outline: "border border-accent text-button-foreground",
				dark: "bg-button text-button-foreground",
			},
			size: {
				default: "h-12",
				lg: "h-14",
			},
		},
		defaultVariants: {
			variant: "solid",
			size: "default",
		},
	},
);

type ButtonProps = React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		as?: React.ElementType;
	};

export function Button({
	variant,
	size,
	as: Comp = "button",
	className,
	...props
}: ButtonProps) {
	return (
		<Comp
			className={cn(buttonVariants({ variant, size }), className)}
			{...props}
		/>
	);
}
