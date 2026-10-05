import Image from "next/image";
import { Accent, Heading, Label, Paragraph } from "@/components/ui/typography";

const audiences = [
	{
		title: "Early-Stage Companies",
		image: "/images/home/card-early-stage.webp",
		art: {
			src: "/images/svg/bolt.svg",
			left: "36%",
			top: "15.4%",
			width: "24.1%",
		},
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
		art: {
			src: "/images/svg/discs.svg",
			left: "25.6%",
			top: "22.9%",
			width: "47%",
		},
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
		art: {
			src: "/images/svg/compass.svg",
			left: "18%",
			top: "6.8%",
			width: "60.7%",
		},
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
		<section className="rounded-[20px] px-6 py-16 md:fl-rounded-[20px]/desktop md:fl-py-[64px]/desktop md:fl-px-[112px]/desktop">
			<div className="flex flex-col gap-4 md:fl-gap-[16px]/desktop md:fl-pl-[206px]/desktop">
				<Label variant="2" className="text-accent">
					WE Work With
				</Label>
				<Paragraph variant="1" className="max-w-[677px]">
					Early-stage companies and growth-stage non profits often
					face ambitious goals constrained by fragmented systems and
					limited finance capacity.
				</Paragraph>
			</div>
			<div className="mt-28 grid gap-6 md:fl-mt-[112px]/desktop md:grid-cols-3 md:fl-gap-[24px]/desktop">
				{audiences.map((audience) => (
					<article
						key={audience.title}
						className={`flex flex-col gap-6 rounded-[12px] p-4 md:fl-gap-[24px]/desktop md:fl-rounded-[12px]/desktop md:fl-p-[16px]/desktop ${audience.surface}`}
					>
						<div className="relative aspect-[328/280] overflow-hidden rounded-[8px]">
							<Image
								src={audience.image}
								alt=""
								fill
								sizes="(max-width: 768px) 100vw, 328px"
								className="object-cover"
							/>
							<Image
								src={audience.art.src}
								alt=""
								width={200}
								height={200}
								className="absolute h-auto"
								style={{
									left: audience.art.left,
									top: audience.art.top,
									width: audience.art.width,
								}}
							/>
							<ul className="absolute inset-x-[2.1%] bottom-[3.2%] flex flex-wrap gap-[5px]">
								{audience.tags.map((tag) => (
									<li
										key={tag}
										className="rounded-[4px] bg-[#F7F5F1]/37 px-3 py-1 md:fl-rounded-[4px]/desktop md:fl-px-[12px]/desktop"
									>
										<Paragraph
											variant="7"
											as="span"
											className="text-sage-foreground"
										>
											{tag}
										</Paragraph>
									</li>
								))}
							</ul>
						</div>
						<div className="flex flex-col gap-6 p-2 md:fl-gap-[24px]/desktop md:fl-p-[8px]/desktop">
							<Heading
								variant="4"
								as="h3"
								className="text-accent-foreground"
							>
								{audience.title}
							</Heading>
							<ul className="flex list-disc flex-col pl-4 md:fl-pl-[16px]/desktop">
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
