import Image from "next/image";
import { Heading, Label } from "@/components/ui/typography";

export function Difference() {
	return (
		<section className="surface-sage relative overflow-hidden rounded-[20px]">
			<Image
				src="/images/home/difference-bg.webp"
				alt=""
				fill
				sizes="100vw"
				className="object-cover opacity-[0.28]"
			/>
			<div className="relative grid gap-10 p-6 md:grid-cols-2 md:items-center md:p-20">
				<div className="flex flex-col gap-6">
					<Label variant="2" className="text-light-muted">
						The difference
					</Label>
					<Heading variant="3" as="h2" className="max-w-[419px]">
						Where traditional finance focuses on reporting, we focus
						on integration
					</Heading>
				</div>
				<div className="relative aspect-[675/679] overflow-hidden rounded-[12px]">
					<Image
						src="/images/home/difference-panel.webp"
						alt="Concentric rings mapping operations and finance onto one system"
						fill
						sizes="(max-width: 768px) 100vw, 675px"
						className="object-cover"
					/>
				</div>
			</div>
		</section>
	);
}
