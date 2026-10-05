import {
	CardSlide,
	FeatureSlide,
	placeholderBody,
} from "@/components/services/slides";
import { ServicesSlider } from "@/components/services/slider";

const tabs = [
	"Funding & Capital Readiness",
	"Modeling & planning",
	"Budgeting & Resource planning",
	"Finance and Ops Infrastructure",
];

const cardSlides = tabs.slice(1).map((title, index) => ({
	title,
	body: placeholderBody,
	surface: index % 2 === 0 ? "bg-olive/80" : "bg-accent",
	texture:
		index % 2 === 0
			? "/images/home/panel-texture.webp"
			: "/images/home/panel-texture-alt.webp",
	media: index % 2 === 0 ? "/images/home/slide-strategy.webp" : null,
}));

export function AboutServices() {
	return (
		<section className="overflow-hidden rounded-[20px] bg-background py-6 md:fl-rounded-[20px]/desktop md:fl-py-[52px]/desktop">
			<ServicesSlider tabs={tabs} label="Services">
				<FeatureSlide ctaVariant="solid" />
				{cardSlides.map((slide) => (
					<CardSlide slide={slide} key={slide.title} />
				))}
			</ServicesSlider>
		</section>
	);
}
