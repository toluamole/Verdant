import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { ServicesHero } from "@/components/services/hero";
import { FeatureSlide, services } from "@/components/services/slides";
import { Cta } from "@/components/shared/cta";

export const metadata: Metadata = {
	title: "Services — Verdant",
	description:
		"Funding readiness, budgeting, financial modeling, operations infrastructure and stakeholder reporting.",
};

export default function Services() {
	return (
		<div className="mx-auto flex w-full flex-col gap-5 px-6 py-5">
			<Navigation />
			<main className="flex flex-col gap-5">
				<ServicesHero />
				<div className="flex flex-col items-center gap-6 md:fl-gap-[24px]/desktop">
					{services.map((service, index) => (
						<FeatureSlide
							key={index}
							content={service}
							layout="block"
							ctaVariant="solid"
						/>
					))}
				</div>
				<Cta
					image="/images/services/cta-bg.webp"
					overlay={0.78}
					size="116.3% auto"
					position="41.2% 14.2%"
				/>
			</main>
			<Footer />
		</div>
	);
}
