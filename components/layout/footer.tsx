import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Paragraph } from "@/components/ui/typography";

const links = [
	{ label: "Home", href: "/" },
	{ label: "Services", href: "/services" },
	{ label: "Contact", href: "/contact" },
];
const legal = [
	{ label: "Terms", href: "/terms" },
	{ label: "Privacy", href: "/privacy" },
];

const socials = [
	{ name: "Instagram", src: "/images/svg/instagram.svg" },
	{ name: "Facebook", src: "/images/svg/facebook.svg" },
	{ name: "LinkedIn", src: "/images/svg/linkedin.svg" },
	{ name: "X", src: "/images/svg/x.svg" },
];

export function Footer() {
	return (
		<footer className="surface-footer flex flex-col gap-20 rounded-[20px] p-6 md:fl-gap-[80px]/desktop md:fl-rounded-[20px]/desktop md:fl-p-[52px]/desktop">
			<div className="flex flex-col gap-10 md:flex-row md:justify-between">
				<div className="flex flex-col gap-10 md:fl-max-w-[766px]/desktop">
					<Paragraph variant="4" className="text-muted">
						Would you like to add any copy here?
					</Paragraph>
					<ul className="flex gap-3 md:fl-gap-[12px]/desktop">
						{socials.map((social) => (
							<li key={social.name}>
								<a
									href="#"
									aria-label={`Verdant on ${social.name}`}
									className="grid size-9 place-items-center rounded-full bg-white md:fl-size-[36px]/desktop"
								>
									<Image
										src={social.src}
										alt=""
										width={20}
										height={20}
										unoptimized
									/>
								</a>
							</li>
						))}
					</ul>
				</div>

				<nav className="flex gap-10 md:fl-gap-[80px]/desktop">
					{links.map((link) => (
						<Link
							href={link.href}
							key={link.label}
							className="px-3 py-3 md:fl-py-[12px]/desktop md:fl-px-[12px]/desktop"
						>
							<Paragraph
								variant="6"
								as="span"
								className="text-muted"
							>
								{link.label}
							</Paragraph>
						</Link>
					))}
				</nav>
			</div>

			<Logo width={1126} className="h-auto w-full text-brand-cream" />

			<div className="flex flex-col gap-4 border-y border-[#2A3839] py-6 md:flex-row md:justify-between md:fl-gap-[16px]/desktop md:fl-py-[24px]/desktop">
				<div className="flex gap-6 md:fl-gap-[24px]/desktop">
					{legal.map((item) => (
						<Link href={item.href} key={item.label}>
							<Paragraph
								variant="8"
								as="span"
								className="text-muted"
							>
								{item.label}
							</Paragraph>
						</Link>
					))}
				</div>
				<Paragraph variant="8" className="text-muted">
					&copy; 2025 Pipely Inc. All rights reserved.
				</Paragraph>
			</div>
		</footer>
	);
}
