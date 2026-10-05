import { Numeral, Paragraph, Title, Label } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const steps = [1, 2, 3, 4];

export function Story() {
	return (
		<section className="surface-light flex flex-col gap-12 p-6 md:p-[52px]">
			<div className="flex flex-col gap-4">
				<Label variant="2" className="text-light-muted">
					Story
				</Label>
				<Title variant="3">Your journey mapped</Title>
				<Paragraph variant="4" className="text-light-muted">
					Each achievement reflects our commitment to excellence and
					growth.
				</Paragraph>
			</div>

			<ol className="flex">
				{steps.map((step, index) => (
					<li
						key={step}
						className="flex flex-1 flex-col items-center gap-6"
					>
						<Numeral className={cn(index > 0 && "text-[#AEAEAE]")}>
							{step}
						</Numeral>
						<div className="flex w-full items-center">
							<span
								className={cn(
									"h-px flex-1",
									index === 0
										? "bg-light-foreground"
										: "bg-[#D7D7D7]",
								)}
							/>
							<span
								className={cn(
									"size-2 rounded-full",
									index === 0
										? "bg-light-foreground"
										: "bg-[#D7D7D7]",
								)}
							/>
							<span className="h-px flex-1 bg-[#D7D7D7]" />
						</div>
					</li>
				))}
			</ol>

			<Paragraph variant="4" className="text-light-muted">
				30-minute call to understand your needs
			</Paragraph>
		</section>
	);
}
