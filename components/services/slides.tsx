import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heading, Label, Paragraph } from "@/components/ui/typography";

export const placeholderBody =
	"Crafting Actionable Strategies to Achieve Your Goals Tailored Plans for Sustainable Growth and Long-Term Success.";

export type Slide = {
	title: string;
	body: string;
	surface: string;
	texture: string;
	media: string | null;
};

export function CardSlide({ slide }: { slide: Slide }) {
	return (
		<article
			className={`relative flex w-[88vw] shrink-0 snap-center gap-12 overflow-hidden rounded-[20px] p-5 md:fl-w-[1128px]/desktop md:fl-gap-[48px]/desktop md:fl-rounded-[20px]/desktop md:fl-p-[20px]/desktop ${slide.surface}`}
		>
			<Image
				src={slide.texture}
				alt=""
				fill
				sizes="1128px"
				className="object-cover opacity-30"
			/>
			<div className="relative hidden fl-w-[520px]/desktop shrink-0 overflow-hidden rounded-[12px] bg-card md:block md:fl-rounded-[12px]/desktop">
				{slide.media ? (
					<Image
						src={slide.media}
						alt=""
						fill
						sizes="520px"
						className="object-cover"
					/>
				) : null}
			</div>
			<div className="relative flex flex-1 flex-col justify-between gap-3 py-4 md:fl-gap-[12px]/desktop md:fl-py-[16px]/desktop">
				<div className="flex flex-col gap-3 md:fl-gap-[12px]/desktop">
					<Heading
						variant="2"
						as="h3"
						className="text-light-foreground"
					>
						{slide.title}
					</Heading>
					<Paragraph variant="4" className="text-light-muted">
						{slide.body}
					</Paragraph>
				</div>
				<Button
					variant="dark"
					className="self-start px-5 md:fl-px-[20px]/desktop"
				>
					Learn more
				</Button>
			</div>
		</article>
	);
}

const outcomes = [
	"Readiness assessments identifying gaps before investors do.",
	"Financial narratives that translate complexity into clarity",
	"Readiness assessments identifying gaps before investors do.",
];

const outcomeItems = [
	{
		text: 0,
		line: { left: "6.63%", top: "25.65%", height: "71.54%" },
		pos: { left: "9.09%", top: "25.25%", width: "32.82%" },
	},
	{
		text: 1,
		line: { left: "35.75%", top: "48.10%", height: "49.30%" },
		pos: { left: "38.21%", top: "47.29%", width: "31.74%" },
	},
	{
		text: 2,
		line: { left: "59.32%", top: "71.94%", height: "25.45%" },
		pos: { left: "61.02%", top: "65.53%", width: "32.82%" },
	},
];

export function FeatureSlide({
	ctaVariant = "outline",
}: {
	ctaVariant?: "outline" | "solid";
}) {
	return (
		<article
			className="surface-moss relative flex w-[88vw] shrink-0 snap-center flex-col gap-8 overflow-hidden rounded-[20px] bg-cover bg-center p-6 md:fl-w-[1243px]/desktop md:flex-row md:justify-between md:fl-gap-[32px]/desktop md:fl-rounded-[20px]/desktop md:fl-p-[52px]/desktop"
			style={{
				backgroundImage:
					"linear-gradient(rgba(42,63,32,0.82), rgba(42,63,32,0.82)), url(/images/home/panel-texture.webp)",
			}}
		>
			<div className="flex flex-col justify-between md:fl-w-[448px]/desktop md:fl-py-[42px]/desktop">
				<div className="flex flex-col gap-[31px]">
					<Heading variant="2" as="h3" className="text-brand-cream">
						Funding &amp;
						<br />
						Capital Readiness
					</Heading>
					<Paragraph variant="4" className="max-w-[309px]">
						Face scrutiny with confidence. You&rsquo;re raising
						capital or
					</Paragraph>
					<Paragraph variant="4">
						preparing for an audit. Investors will dig into your
						financials, and your story needs to be airtight
					</Paragraph>
				</div>
				<Button
					variant={ctaVariant}
					size="lg"
					className="mt-10 self-start md:mt-0"
				>
					Schedule a Call Today
				</Button>
			</div>

			<div
				className="relative aspect-[649/499] w-full shrink-0 overflow-hidden rounded-[5px] bg-cover bg-center md:fl-w-[649px]/desktop"
				style={{ backgroundImage: "url(/images/home/wood-rings.webp)" }}
			>
				<div className="absolute inset-0 bg-white/10" />
				<div className="absolute inset-[13px] rounded-[3px] bg-[#1C1612]/34" />

				<Label
					variant="1"
					className="absolute text-brand-cream"
					style={{ left: "6.63%", top: "8.82%" }}
				>
					WHAT YOU GET
				</Label>

				{outcomeItems.map((item) => (
					<span
						key={`rule-${item.text}`}
						aria-hidden="true"
						className="absolute w-px bg-foreground/20"
						style={item.line}
					/>
				))}

				{outcomeItems.map((item) => (
					<Paragraph
						variant="4"
						key={`copy-${item.text}`}
						className="absolute"
						style={item.pos}
					>
						{outcomes[item.text]}
					</Paragraph>
				))}
			</div>
		</article>
	);
}
