import {
	CardSlide,
	FeatureSlide,
	placeholderBody,
} from "@/components/services/slides";
import { ServicesSlider } from "@/components/services/slider";
import { Paragraph, Title } from "@/components/ui/typography";

const cardSlides = [
	{
		title: "Strategy development",
		body: placeholderBody,
		surface: "bg-olive/80",
		texture: "/images/home/panel-texture.webp",
		media: "/images/home/slide-strategy.webp",
	},
	{
		title: "Strategy development",
		body: placeholderBody,
		surface: "bg-accent",
		texture: "/images/home/panel-texture-alt.webp",
		media: null,
	},
];

export function Services() {
	return (
		<>
			<section className="flex flex-col items-center gap-4 rounded-[20px] bg-background p-6 text-center md:fl-gap-[16px]/desktop md:fl-rounded-[20px]/desktop md:fl-p-[52px]/desktop">
				<Title variant="2">Our Services</Title>
				<Paragraph
					variant="2"
					className="max-w-[596px] md:fl-max-w-[596px]/desktop"
				>
					We offer a range of services targeted to get your business
					ready for whatever may come from a financial and resource
					planning perspective
				</Paragraph>
			</section>

			<section className="surface-forest overflow-hidden py-6 md:fl-py-[52px]/desktop">
				<ServicesSlider>
					<CardSlide slide={cardSlides[0]} />
					<FeatureSlide />
					<CardSlide slide={cardSlides[1]} />
				</ServicesSlider>
			</section>
		</>
	);
}
