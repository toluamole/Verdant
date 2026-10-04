import { Logo } from "@/components/ui/logo";
import { Paragraph } from "@/components/ui/typography";
import Image from "next/image";

const links = ["Home", "Services", "Contact"];
const legal = ["Terms", "Privacy"];

export function Footer() {
	return (
		<footer className="surface-footer flex flex-col gap-12 rounded-[20px] p-6 md:p-[52px]">
			<div className="flex items-center justify-between">
				<a
					href="#"
					aria-label="Verdant on LinkedIn"
					className="flex size-9 justify-center items-center rounded-full bg-white"
				>
					<Image
						src="/images/svg/linkedin.svg"
						alt=""
						width={20}
						height={20}
					/>
				</a>
				<nav className="flex gap-10 md:gap-26">
					{links.map((link) => (
						<a href="#" key={link}>
							<Paragraph
								variant="6"
								as="span"
								className="text-muted"
							>
								{link}
							</Paragraph>
						</a>
					))}
				</nav>
			</div>

			<Logo width={1126} className="h-auto w-full text-brand-cream" />

			<div className="flex justify-center gap-6 border-y border-[#2A3839] py-6">
				{legal.map((item) => (
					<a href="#" key={item}>
						<Paragraph variant="8" as="span" className="text-muted">
							{item}
						</Paragraph>
					</a>
				))}
			</div>
		</footer>
	);
}
