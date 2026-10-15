import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/form";
import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";

export const metadata: Metadata = {
	title: "Contact — Verdant",
	description: "Reach out to Verdant Lens about funding readiness, budgeting, financial modeling and finance operations.",
};

export default function Contact() {
	return (
		<div className="mx-auto flex w-full flex-col gap-5 px-6 py-5 md:fl-gap-[20px]/desktop md:fl-py-[20px]/desktop md:fl-px-[24px]/desktop">
			<Navigation />
			<main className="flex flex-col gap-5 md:fl-gap-[20px]/desktop">
				<ContactForm />
			</main>
			<Footer />
		</div>
	);
}
