import Image from "next/image";
import { Accent, Heading, Label, Paragraph } from "@/components/ui/typography";

const audiences = [
	{
		title: "Early-Stage Companies",
		image: "/images/home/card-early-stage.webp",
		surface: "bg-accent/25",
		tags: ["Clean tech", "Health", "Impact sectors"],
		points: [
			"Preparing for a funding round",
			"Scaling from 5 to 30+ employees",
			"Building investor-ready models",
		],
	},
	{
		title: "Teams Building For Scale",
		image: "/images/home/card-teams.webp",
		surface: "bg-[#6B7B4C]/25",
		tags: ["Leadership without full-time CFO"],
		points: [
			"Too complex for bookkeeping alone",
			"Facing pressure to professionalize",
			"Needing strategy + execution",
		],
	},
	{
		title: "Mission Aligned Orgs",
		image: "/images/home/card-mission.webp",
		surface: "bg-olive/25",
		tags: ["Nonprofits navigating funding and growth"],
		points: [
			"Managing grants, contracts, and revenue",
			"leadership transition or in a growth phase",
			"Building sustainable financial models",
		],
	},
];

export function WorkWith() {
	return (
		<section className="rounded-[20px] px-6 py-16 md:px-28">
			<div className="flex flex-col gap-4 md:pl-[206px]">
				<Label variant="2" className="text-accent">
					WE Work With
				</Label>
				<Paragraph variant="1" className="max-w-[677px]">
					Early-stage companies and growth-stage non profits often
					face ambitious goals constrained by fragmented systems and
					limited finance capacity.
				</Paragraph>
			</div>
			<div className="mt-28 grid gap-6 md:grid-cols-3">
				{audiences.map((audience) => (
					<article
						key={audience.title}
						className={`flex flex-col gap-6 rounded-[12px] p-4 ${audience.surface}`}
					>
						<div className="relative aspect-[328/280] overflow-hidden rounded-[8px]">
							<Image
								src={audience.image}
								alt=""
								fill
								sizes="(max-width: 768px) 100vw, 328px"
								className="object-cover"
							/>
							<ul className="sr-only">
								{audience.tags.map((tag) => (
									<li key={tag}>{tag}</li>
								))}
							</ul>
						</div>
						<div className="flex flex-col gap-4 px-2 pb-2">
							<Heading
								variant="4"
								as="h3"
								className="text-accent-foreground"
							>
								{audience.title}
							</Heading>
							<ul className="flex list-disc flex-col gap-1 pl-4">
								{audience.points.map((point) => (
									<Accent variant="1" as="li" key={point}>
										{point}
									</Accent>
								))}
							</ul>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
