import { Button } from "@/components/ui/button";
import { Paragraph, Title } from "@/components/ui/typography";

export function WhatWeDo() {
	return (
		<section className="flex flex-col items-center gap-[61px] rounded-[20px] bg-background p-6 md:fl-rounded-[20px]/desktop md:fl-p-[52px]/desktop">
			<div className="flex flex-col items-center gap-4 text-center md:fl-gap-[16px]/desktop">
				<Title variant="2">What We Do</Title>
				<Paragraph
					variant="2"
					className="max-w-[596px] md:fl-max-w-[596px]/desktop"
				>
					Integration is our differentiator. We don&rsquo;t build
					budgets in isolation from staffing plans or create forecasts
					disconnected from operational capacity.
				</Paragraph>
			</div>
			<Button variant="outline">Get Started</Button>
		</section>
	);
}
