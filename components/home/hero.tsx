import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heading, Paragraph } from "@/components/ui/typography";

const services = [
	"People Operations",
	"Fractional CFO",
	"Budgeting",
	"Finance Operations Infrastructure",
	"Financial Scenario Planning",
	"Funding",
	"Technical Accounting",
	"Finance Team Model",
	"Resource Planning",
	"Grant & Contract Compliance",
	"Entity Formation",
	"AI-Enabled Finance Operations",
];

export function Hero() {
	return (
		<section className="rounded-[20px] bg-background p-6 md:fl-rounded-[20px]/desktop md:fl-p-[52px]/desktop">
			<div className="flex flex-col gap-12 md:fl-gap-[72px]/desktop">
				<div className="flex flex-col justify-between gap-10 md:flex-row md:fl-gap-[40px]/desktop">
					<Heading variant="1" as="h1" className="max-w-[579px]">
						Strategic Finance Operations for Scaling and Growth
					</Heading>
					<div className="flex w-full flex-col items-start gap-8 md:fl-max-w-[408px]/desktop md:fl-gap-[32px]/desktop">
						<Paragraph variant="4" className={""}>
							We build integrated financial and operational
							infrastructure that supports sustainable growth,
							credible storytelling, and confident
							decision-making.
						</Paragraph>
						<Button variant="outline">Get Started</Button>
					</div>
				</div>
				<div className="relative aspect-[1248/635] w-full overflow-hidden rounded-[12px] md:fl-rounded-[12px]/desktop">
					<Image
						src="/images/home/hero-panel.webp"
						alt="Verdant service areas over an aerial view of farmland"
						fill
						priority
						sizes="(max-width: 768px) 100vw, 1248px"
						className="object-cover"
					/>
					<ul className="sr-only">
						{services.map((service) => (
							<li key={service}>{service}</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
