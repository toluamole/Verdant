import { Difference } from "@/components/home/difference";
import { Hero } from "@/components/home/hero";
import { JoinUs } from "@/components/home/join-us";
import { Services } from "@/components/home/services";
import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import { Story } from "@/components/home/story";
import { WhatWeDo } from "@/components/home/what-we-do";
import { WorkWith } from "@/components/home/work-with";

export default function Home() {
	return (
		<div className="mx-auto flex w-full flex-col gap-5 px-6 py-5 md:fl-gap-[20px]/desktop md:fl-py-[20px]/desktop md:fl-px-[24px]/desktop">
			<Navigation />
			<main className="flex flex-col gap-5 md:fl-gap-[20px]/desktop">
				<Hero />
				<WorkWith />
				<WhatWeDo />
				<Difference />
				<Services />
				<Story />
				<JoinUs />
			</main>
			<Footer />
		</div>
	);
}
