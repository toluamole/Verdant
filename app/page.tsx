import { Difference } from "@/components/home/difference";
import { Hero } from "@/components/home/hero";
import { JoinUs } from "@/components/home/join-us";
import { Services } from "@/components/home/services";
import { Footer } from "@/components/home/footer";
import { Navigation } from "@/components/home/navigation";
import { Story } from "@/components/home/story";
import { WhatWeDo } from "@/components/home/what-we-do";
import { WorkWith } from "@/components/home/work-with";

export default function Home() {
	return (
		<div className="mx-auto flex w-full flex-col gap-5 px-6 py-5 md:max-w-[1400px]">
			<Navigation />
			<main className="flex flex-col gap-5">
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
