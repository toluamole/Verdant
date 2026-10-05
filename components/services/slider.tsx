"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Label } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type ServicesSliderProps = {
	children: React.ReactNode;
	tabs?: string[];
	initialIndex?: number;
	label?: string;
};

export function ServicesSlider({
	children,
	tabs,
	initialIndex,
	label = "Our services",
}: ServicesSliderProps) {
	const track = useRef<HTMLDivElement>(null);
	const start = initialIndex ?? (tabs ? 0 : 1);
	const [active, setActive] = useState(start);

	const offsetFor = useCallback((index: number) => {
		const el = track.current;
		const slide = el?.children[index] as HTMLElement | undefined;
		if (!el || !slide) return null;
		return slide.offsetLeft - (el.clientWidth - slide.clientWidth) / 2;
	}, []);

	useEffect(() => {
		const el = track.current;
		const left = offsetFor(start);
		if (el && left !== null) el.scrollLeft = left;
	}, [offsetFor, start]);

	const select = (index: number) => {
		setActive(index);
		const el = track.current;
		const left = offsetFor(index);
		if (el && left !== null) el.scrollTo({ left, behavior: "smooth" });
	};

	return (
		<div
			className="flex flex-col gap-10 md:fl-gap-[40px]/desktop"
			aria-roledescription="carousel"
			aria-label={label}
		>
			{tabs ? (
				<div
					role="tablist"
					aria-label={label}
					className="flex [scrollbar-width:none] gap-6 overflow-x-auto px-6 [-ms-overflow-style:none] md:fl-gap-[24px]/desktop md:fl-px-[52px]/desktop [&::-webkit-scrollbar]:hidden"
				>
					{tabs.map((tab, index) => (
						<button
							key={tab}
							type="button"
							role="tab"
							aria-selected={index === active}
							onClick={() => select(index)}
							className={cn(
								"glass h-14 shrink-0 rounded-[12px] px-6 whitespace-nowrap transition-colors md:w-auto md:fl-rounded-[12px]/desktop md:fl-px-[24px]/desktop",
								index === active
									? "bg-moss/50"
									: "bg-white/[0.04] hover:bg-white/10",
							)}
						>
							<Label className="text-4xl" variant="3">
								{tab}
							</Label>
						</button>
					))}
				</div>
			) : null}

			<div
				ref={track}
				className="flex snap-x snap-mandatory [scrollbar-width:none] gap-6 overflow-x-auto px-6 [-ms-overflow-style:none] md:fl-gap-[24px]/desktop md:fl-px-[52px]/desktop [&::-webkit-scrollbar]:hidden"
			>
				{children}
			</div>
		</div>
	);
}
