"use client";

import Link from "next/link";
import { useRef } from "react";
import { Logo } from "@/components/ui/logo";
import { Paragraph } from "@/components/ui/typography";

type MobileMenuProps = {
	links: { label: string; href: string }[];
};

export function MobileMenu({ links }: MobileMenuProps) {
	const dialogRef = useRef<HTMLDialogElement>(null);

	const open = () => dialogRef.current?.showModal();
	const close = () => dialogRef.current?.close();

	return (
		<>
			<button
				type="button"
				onClick={open}
				aria-label="Open menu"
				aria-haspopup="dialog"
				className="flex size-10 items-center justify-center md:hidden"
			>
				<svg
					viewBox="0 0 24 24"
					width={24}
					height={24}
					fill="none"
					stroke="currentColor"
					strokeWidth={1.5}
					strokeLinecap="round"
					aria-hidden="true"
				>
					<path d="M4 7h16M4 12h16M4 17h16" />
				</svg>
			</button>
			<dialog
				ref={dialogRef}
				aria-label="Menu"
				onClick={(event) => {
					if (event.target === event.currentTarget) close();
				}}
				className="surface-dark fixed inset-y-0 right-0 left-auto m-0 h-dvh max-h-none w-[min(85vw,360px)] max-w-none translate-x-full transition-[translate,display,overlay] transition-discrete duration-300 ease-out backdrop:bg-black/60 backdrop:opacity-0 backdrop:transition-[opacity,display,overlay] backdrop:transition-discrete backdrop:duration-300 open:translate-x-0 open:backdrop:opacity-100 md:hidden starting:open:translate-x-full starting:open:backdrop:opacity-0"
			>
				<div className="flex h-full flex-col px-6 py-5">
					<div className="flex items-center justify-between">
						<Link
							href="/"
							aria-label="Verdant home"
							onClick={close}
						>
							<Logo width={130} className="h-auto" />
						</Link>
						<button
							type="button"
							onClick={close}
							aria-label="Close menu"
							className="flex size-10 items-center justify-center"
						>
							<svg
								viewBox="0 0 24 24"
								width={24}
								height={24}
								fill="none"
								stroke="currentColor"
								strokeWidth={1.5}
								strokeLinecap="round"
								aria-hidden="true"
							>
								<path d="M6 6l12 12M18 6 6 18" />
							</svg>
						</button>
					</div>
					<nav className="mt-10 flex flex-col">
						{links.map((link) => (
							<Link
								href={link.href}
								key={link.label}
								onClick={close}
								className="border-b border-white/10 py-4"
							>
								<Paragraph variant="2" as="span">
									{link.label}
								</Paragraph>
							</Link>
						))}
					</nav>
				</div>
			</dialog>
		</>
	);
}
