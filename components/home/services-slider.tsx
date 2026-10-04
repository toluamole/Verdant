"use client";

import { useEffect, useRef } from "react";

export function ServicesSlider({ children }: { children: React.ReactNode }) {
	const track = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = track.current;
		if (!el) return;
		const feature = el.children[1] as HTMLElement | undefined;
		if (!feature) return;
		el.scrollLeft =
			feature.offsetLeft - (el.clientWidth - feature.clientWidth) / 2;
	}, []);

	return (
		<div
			ref={track}
			className="flex snap-x snap-mandatory [scrollbar-width:none] gap-6 overflow-x-auto px-6 [-ms-overflow-style:none] md:px-[52px] [&::-webkit-scrollbar]:hidden"
		>
			{children}
		</div>
	);
}
