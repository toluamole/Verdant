import type { Metadata } from "next";
import { Cta } from "@/components/shared/cta";
import { AboutHero } from "@/components/about/hero";
import { AboutServices } from "@/components/about/service-tabs";
import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";

export const metadata: Metadata = {
	title: "About — Verdant",
	description:
		"Verdant Lens works alongside leadership teams to untangle complexity and surface what actually matters.",
};

export default function About() {
	return (
		<div className="mx-auto flex w-full flex-col gap-5 px-6 py-5 md:fl-gap-[20px]/desktop md:fl-py-[20px]/desktop md:fl-px-[24px]/desktop">
			<Navigation />
			<main className="flex flex-col gap-5 md:fl-gap-[20px]/desktop">
				<AboutHero />
				<AboutServices />
				<Cta image="/images/about/cta-bg.webp" overlay={0.59} />
			</main>
			<Footer />
		</div>
	);
}
