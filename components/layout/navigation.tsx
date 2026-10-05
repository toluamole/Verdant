import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Paragraph } from "@/components/ui/typography";

const links = [
	{ label: "Home", href: "/" },
	{ label: "Services", href: "/services" },
	{ label: "About us", href: "/about" },
	{ label: "Contact", href: "/contact" },
];

export function Navigation() {
	return (
		<header className="surface-glass flex items-center justify-between rounded-[20px] px-7 py-4 md:fl-h-[80px]/desktop md:fl-rounded-[20px]/desktop md:fl-py-[16px]/desktop md:fl-px-[28px]/desktop">
			<Link href="/" aria-label="Verdant home">
				<Logo width={163} className="h-auto md:fl-w-[163px]/desktop" />
			</Link>
			<nav className="hidden items-center gap-5 md:flex md:fl-gap-[20px]/desktop">
				{links.map((link) => (
					<Link
						href={link.href}
						key={link.label}
						className="flex items-center gap-1 px-3 py-3 md:fl-py-[12px]/desktop md:fl-px-[12px]/desktop"
					>
						<Paragraph variant="4" as="span">
							{link.label}
						</Paragraph>
						{link.label === "Contact" ? (
							<svg
								viewBox="0 0 14 14"
								width={14}
								height={14}
								fill="none"
								stroke="currentColor"
								strokeWidth={1.4}
								aria-hidden="true"
							>
								<path d="M3.5 5.6 7 9.1l3.5-3.5" />
							</svg>
						) : null}
					</Link>
				))}
			</nav>
			<Button>Get Started</Button>
		</header>
	);
}
