import { Button } from "@/components/ui/button";
import { Paragraph, Title } from "@/components/ui/typography";

type CtaProps = {
	/** Background image. Must already be rotated 180° to match Figma's image rect. */
	image: string;
	/** Black overlay opacity above the image, 0–1. */
	overlay: number;
	/** background-size for the image layer, derived from the Figma image rect. */
	size?: string;
	/** background-position for the image layer. */
	position?: string;
};

export function Cta({
	image,
	overlay,
	size = "132.5% auto",
	position = "70.5% 55.4%",
}: CtaProps) {
	return (
		<section
			className="relative overflow-hidden rounded-[20px] bg-black bg-cover bg-center md:fl-rounded-[20px]/desktop"
			style={{
				backgroundImage: `linear-gradient(rgb(0 0 0 / ${overlay}), rgb(0 0 0 / ${overlay})), url(${image})`,
				backgroundSize: `auto, ${size}`,
				backgroundPosition: `0 0, ${position}`,
				backgroundRepeat: "repeat, no-repeat",
			}}
		>
			<div className="flex flex-col gap-10 p-6 py-24 md:fl-gap-[40px]/desktop md:fl-pt-[297px]/desktop md:fl-px-[112px]/desktop md:fl-pb-[193px]/desktop">
				<div className="flex flex-col gap-4 md:fl-gap-[16px]/desktop">
					<Title
						variant="1"
						as="h2"
						className="max-w-[646px] text-white"
					>
						Ready to Turn Complexity Into Clarity?
					</Title>
					<Paragraph variant="4" className="max-w-[676px] text-white">
						Partner with us to take your digital presence to the
						next level.
					</Paragraph>
				</div>
				<Button size="lg" className="self-start">
					Schedule a Call Today
				</Button>
			</div>
		</section>
	);
}
