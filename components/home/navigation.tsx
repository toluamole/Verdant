import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Paragraph } from "@/components/ui/typography";

const links = ["Home", "Services", "About us", "Contact"];

export function Navigation() {
	return (
		<header className="surface-glass flex items-center justify-between rounded-[20px] px-7 py-4 md:h-20">
			<Logo width={163} />
			<nav className="hidden items-center gap-5 md:flex">
				{links.map((link) => (
					<a
						href="#"
						key={link}
						className="flex items-center gap-1 px-3 py-3"
					>
						<Paragraph variant="4" as="span">
							{link}
						</Paragraph>
						{link === "Contact" ? (
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
					</a>
				))}
			</nav>
			<Button>Get Started</Button>
		</header>
	);
}
