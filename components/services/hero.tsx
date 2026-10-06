import Image from "next/image";
import { Accent, Paragraph, Title } from "@/components/ui/typography";

const pills = [
	{ label: "Technical Accounting", left: "19.39%", top: "25.42%" },
	{ label: "Budgeting", left: "36.62%", top: "25.3%" },
	{ label: "Funding", left: "52.56%", top: "25.42%" },
	{
		label: "Finance Operations Infrastructure",
		left: "62.82%",
		top: "25.42%",
	},
	{ label: "Financial Scenario Planning", left: "18.11%", top: "46%" },
	{ label: "AI-Enabled Finance Operations", left: "34.05%", top: "46%" },
	{ label: "Grant & Contract Compliance", left: "52%", top: "46%" },
	{ label: "Resource Planning", left: "69.55%", top: "46%" },
	{ label: "Technical Accounting", left: "20.03%", top: "66.83%" },
	{ label: "People Operations", left: "34.7%", top: "66.83%" },
	{ label: "Entity Formation", left: "50.64%", top: "66.83%" },
	{ label: "Finance Team Model", left: "65.71%", top: "66.83%" },
];

export function ServicesHero() {
	return (
		<section className="flex flex-col gap-12 rounded-[20px] bg-background p-6 md:fl-gap-[52px]/desktop md:fl-rounded-[20px]/desktop md:fl-p-[52px]/desktop">
			<div className="flex flex-col gap-8 md:flex-row md:fl-gap-[120px]/desktop">
				<Title
					variant="2"
					as="h1"
					className="text-white md:fl-w-[579px]/desktop"
				>
					What We Do
				</Title>
				<Paragraph
					variant="2"
					className="text-white md:fl-w-[549px]/desktop"
				>
					Integration is our differentiator. We don&rsquo;t build
					budgets in isolation from staffing plans or create forecasts
					disconnected from operational capacity.
				</Paragraph>
			</div>

			<div className="relative aspect-[1248/413] w-full overflow-hidden rounded-[12px] bg-card md:fl-rounded-[12px]/desktop">
				<Image
					src="/images/services/hero-panel.webp"
					alt=""
					fill
					priority
					sizes="(max-width: 768px) 100vw, 1248px"
					className="object-cover"
				/>
				<ul className="absolute inset-0">
					{pills.map((pill) => (
						<li
							key={`${pill.label}-${pill.left}`}
							className="absolute rounded-full bg-[#151212]/20 px-4 py-2 backdrop-blur-sm md:fl-py-[8px]/desktop md:fl-px-[16px]/desktop"
							style={{ left: pill.left, top: pill.top }}
						>
							<Accent
								variant="2"
								as="span"
								className="whitespace-nowrap text-[#1C1612]"
							>
								{pill.label}
							</Accent>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
