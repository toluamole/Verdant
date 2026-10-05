import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Label, Paragraph, Title } from "@/components/ui/typography";

export function JoinUs() {
	return (
		<section className="flex-col justify-between gap-10 p-6 md:flex md:flex-row md:fl-gap-[80px]/desktop md:fl-p-[52px]/desktop">
			<div className="flex flex-1 flex-col gap-[60px] md:fl-gap-[120px]/desktop">
				<div className="flex flex-col gap-4 md:fl-gap-[16px]/desktop">
					<Label variant="2" className="text-light-muted">
						Join us
					</Label>
					<Title variant="3" className="max-w-[673px] text-white">
						Ready to Turn Complexity into Clarity
					</Title>
					<Paragraph variant="4" className="text-[#4E4E4E]">
						Partner with us to take your digital presence to the
						next level.
					</Paragraph>
				</div>
				<Button variant="dark" size="lg" className="self-start">
					Get Started
				</Button>
			</div>
			<div className=" ">
				<Image
					src="/images/home/cta-grass-steps.png"
					alt="Grass-covered steps ascending"
					width={495}
					height={517}
					priority
					className="object-cover"
				/>
			</div>
		</section>
	);
}
