import { Button } from "@/components/ui/button";
import { Paragraph, Title } from "@/components/ui/typography";

export function AboutCta() {
	return (
		<section
			className="relative overflow-hidden rounded-[20px] bg-black md:fl-rounded-[20px]/desktop"
			style={{
				backgroundImage:
					"linear-gradient(rgb(0 0 0 / 0.59), rgb(0 0 0 / 0.59)), url(/images/about/cta-bg.webp)",
				backgroundSize: "auto, 132.5% auto",
				backgroundPosition: "0 0, 70.5% 55.4%",
				backgroundRepeat: "repeat, no-repeat",
			}}
		>
			<div className="flex flex-col gap-10 p-6 py-24 md:fl-gap-[40px]/desktop md:fl-p-[24px]/desktop md:fl-py-[96px]/desktop md:fl-pt-[297px]/desktop md:fl-px-[112px]/desktop md:fl-pb-[193px]/desktop">
				<div className="flex flex-col gap-4 md:fl-gap-[16px]/desktop">
					<Title
						variant="1"
						as="h2"
						className="max-w-[646px] text-white"
					>
						Ready to Turn Complexity Into Clarity?
					</Title>
					<Paragraph variant="4" className="max-w-[676px] text-white">
						Partner with us to take your digital presence to the
						next level.
					</Paragraph>
				</div>
				<Button size="lg" className="self-start">
					Schedule a Call Today
				</Button>
			</div>
		</section>
	);
}
