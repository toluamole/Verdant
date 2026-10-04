import { Button } from "@/components/ui/button";
import { Paragraph, Title } from "@/components/ui/typography";

export function WhatWeDo() {
	return (
		<section className="flex flex-col items-center gap-[61px] rounded-[20px] bg-background p-6 md:p-[52px]">
			<div className="flex flex-col items-center gap-4 text-center">
				<Title variant="2">What We Do</Title>
				<Paragraph variant="2" className="max-w-[596px]">
					Integration is our differentiator. We don&rsquo;t build
					budgets in isolation from staffing plans or create forecasts
					disconnected from operational capacity.
				</Paragraph>
			</div>
			<Button variant="outline">Get Started</Button>
		</section>
	);
}
