import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heading, Label, Paragraph, Title } from "@/components/ui/typography";

const stats = [
	{ figure: "100%", label: "Dedicated to you" },
	{ figure: "10+", label: "years of experience and valuable insight" },
];

export function AboutHero() {
	return (
		<section className="rounded-[20px] bg-background p-6 md:fl-rounded-[20px]/desktop md:fl-p-[52px]/desktop">
			<div className="flex flex-col gap-10 md:flex-row md:fl-gap-[40px]/desktop">
				<div className="relative aspect-[604/643] w-full shrink-0 overflow-hidden rounded-[12px] bg-card md:fl-w-[604px]/desktop md:fl-rounded-[12px]/desktop">
					<Image
						src="/images/about/hero.webp"
						alt="Angie Fidler, founder of Verdant Lens"
						fill
						priority
						sizes="(max-width: 768px) 100vw, 604px"
						className="object-cover"
					/>
				</div>

				<div className="flex flex-1 flex-col justify-between gap-16 md:fl-gap-[64px]/desktop">
					<div className="flex flex-col gap-10 md:fl-gap-[40px]/desktop">
						<div className="flex flex-col gap-4 md:fl-gap-[16px]/desktop">
							<Title variant="2" as="h1" className="text-white">
								Your strategic partner for business success
							</Title>
							<Paragraph variant="4" className="text-white">
								You don&rsquo;t need another framework. You need
								a clearer view. Verdant Lens works alongside
								leadership teams to untangle complexity and
								surface what actually matters.
							</Paragraph>
							<Paragraph variant="4" className="text-white">
								Angie Fidler founded the practice to help
								ambitious teams grow without losing the plot.
							</Paragraph>
						</div>
						<Button size="lg" className="self-start">
							Get Started
						</Button>
					</div>

					<dl className="flex gap-[30px]">
						{stats.map((stat) => (
							<div
								key={stat.figure}
								className="flex flex-1 flex-col gap-6 md:fl-gap-[24px]/desktop"
							>
								<dd className="order-2">
									<Label variant="2" className="text-white">
										{stat.label}
									</Label>
								</dd>
								<dt className="order-1">
									<Heading
										variant="2"
										as="span"
										className="text-white"
									>
										{stat.figure}
									</Heading>
								</dt>
							</div>
						))}
					</dl>
				</div>
			</div>
		</section>
	);
}
