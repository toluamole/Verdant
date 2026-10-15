import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Paragraph, Title } from "@/components/ui/typography";

const field =
	"w-full rounded-[12px] border border-black/10 bg-transparent px-6 font-sans fl-text-[16px]/mobile leading-6 placeholder:text-muted focus-visible:border-foreground focus-visible:outline-none md:fl-rounded-[12px]/desktop md:fl-px-[24px]/desktop md:fl-text-[16px]/desktop";

const fields = [
	{
		id: "name",
		label: "Full name",
		placeholder: "Your full name",
		type: "text",
		autoComplete: "name",
	},
	{
		id: "email",
		label: "Email address",
		placeholder: "Your email address",
		type: "email",
		autoComplete: "email",
	},
];

const details = [
	{
		label: "Email:",
		value: "Consulting@gmail.com",
		href: "mailto:Consulting@gmail.com",
	},
	{
		label: "Phone:",
		value: "+1 (123) 456-7890",
		href: "tel:+11234567890",
	},
];

export function ContactForm() {
	return (
		<section className="surface-light flex flex-col gap-12 rounded-[20px] p-6 md:fl-gap-[48px]/desktop md:fl-rounded-[20px]/desktop md:fl-p-[52px]/desktop">
			<Title variant="1">Reach out today</Title>

			<div className="flex flex-col gap-12 md:flex-row md:fl-gap-[48px]/desktop">
				<form className="flex flex-col gap-8 md:fl-w-[775px]/desktop md:fl-gap-[32px]/desktop">
					{fields.map((item) => (
						<label
							key={item.id}
							className="flex flex-col gap-4 md:fl-gap-[16px]/desktop"
						>
							<Paragraph variant="4" as="span">
								{item.label}
							</Paragraph>
							<input
								name={item.id}
								type={item.type}
								autoComplete={item.autoComplete}
								placeholder={item.placeholder}
								className={`${field} h-14 md:fl-h-[54px]/desktop`}
							/>
						</label>
					))}

					<label className="flex flex-col gap-4 md:fl-gap-[16px]/desktop">
						<Paragraph variant="4" as="span">
							Messages
						</Paragraph>
						<textarea
							name="message"
							rows={6}
							placeholder="Your messages here.."
							className={`${field} h-[200px] resize-none py-4 md:fl-h-[200px]/desktop md:fl-py-[16px]/desktop`}
						/>
					</label>

					<Button type="submit" size="lg" className="self-start">
						Submit
					</Button>
				</form>

				<aside className="flex flex-col gap-8 rounded-[20px] bg-brand-cream p-6 md:fl-w-[351px]/desktop md:fl-gap-[32px]/desktop md:fl-rounded-[20px]/desktop md:fl-p-[24px]/desktop">
					{details.map((detail) => (
						<div
							key={detail.label}
							className="flex flex-col gap-3 md:fl-gap-[12px]/desktop"
						>
							<Paragraph variant="6">{detail.label}</Paragraph>
							<a href={detail.href} className="w-fit break-all">
								<Paragraph variant="2" as="span">
									{detail.value}
								</Paragraph>
							</a>
						</div>
					))}

					<div className="flex flex-col gap-3 md:fl-gap-[12px]/desktop">
						<Paragraph variant="6">Follow Us:</Paragraph>
						<a
							href="#"
							aria-label="Verdant on LinkedIn"
							className="grid size-8 place-items-center rounded-full bg-button md:fl-size-[30px]/desktop"
						>
							<Image
								src="/images/svg/linkedin.svg"
								alt=""
								width={18}
								height={18}
								className="invert"
								unoptimized
							/>
						</a>
					</div>
				</aside>
			</div>
		</section>
	);
}
