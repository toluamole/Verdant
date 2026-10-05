import type { Metadata } from "next";
import { berlingskeSerif, inter, labilGrotesk } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
	title: "Verdant",
	description: "Strategic Finance Operations for Scaling and Growth ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en"
			className={`${inter.variable} ${labilGrotesk.variable} ${berlingskeSerif.variable} h-full antialiased`}
		>
			<body className="flex min-h-full flex-col">{children}</body>
		</html>
	);
}
