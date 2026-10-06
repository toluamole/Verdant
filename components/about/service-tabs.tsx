import { FeatureSlide, services } from "@/components/services/slides";
import { ServicesSlider } from "@/components/services/slider";

/** Tabs carry shorter labels than the card titles, and About shows four of the five services. */
const slides = [
	{ tab: "Funding & Capital Readiness", content: services[0] },
	{ tab: "Modeling & planning", content: services[2] },
	{ tab: "Budgeting & Resource planning", content: services[1] },
	{ tab: "Finance and Ops Infrastructure", content: services[3] },
];

export function AboutServices() {
	return (
		<section className="overflow-hidden rounded-[20px] bg-background py-6 md:fl-rounded-[20px]/desktop md:fl-py-[52px]/desktop">
			<ServicesSlider
				tabs={slides.map((slide) => slide.tab)}
				label="Services"
			>
				{slides.map((slide) => (
					<FeatureSlide
						key={slide.tab}
						content={slide.content}
						ctaVariant="solid"
					/>
				))}
			</ServicesSlider>
		</section>
	);
}
