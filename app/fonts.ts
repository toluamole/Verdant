import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	display: "swap",
});

export const labilGrotesk = localFont({
	src: "./fonts/LabilGrotesk-Medium.woff2",
	weight: "500",
	style: "normal",
	variable: "--font-labil-grotesk",
	display: "swap",
});

export const berlingskeSerif = localFont({
	src: [
		{
			path: "./fonts/BerlingskeSerif-Light.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "./fonts/BerlingskeSerif-LightItalic.woff2",
			weight: "300",
			style: "italic",
		},
		{
			path: "./fonts/BerlingskeSerif-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/BerlingskeSerif-Italic.woff2",
			weight: "400",
			style: "italic",
		},
		{
			path: "./fonts/BerlingskeSerif-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "./fonts/BerlingskeSerif-MediumItalic.woff2",
			weight: "500",
			style: "italic",
		},
		{
			path: "./fonts/BerlingskeSerif-SemiBold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "./fonts/BerlingskeSerif-SemiBoldItalic.woff2",
			weight: "600",
			style: "italic",
		},
		{
			path: "./fonts/BerlingskeSerif-Bold.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "./fonts/BerlingskeSerif-BoldItalic.woff2",
			weight: "700",
			style: "italic",
		},
		{
			path: "./fonts/BerlingskeSerif-ExtraBold.woff2",
			weight: "800",
			style: "normal",
		},
		{
			path: "./fonts/BerlingskeSerif-ExtraBoldItalic.woff2",
			weight: "800",
			style: "italic",
		},
		{
			path: "./fonts/BerlingskeSerif-Black.woff2",
			weight: "900",
			style: "normal",
		},
		{
			path: "./fonts/BerlingskeSerif-BlackItalic.woff2",
			weight: "900",
			style: "italic",
		},
	],
	variable: "--font-berlingske-serif",
	display: "swap",
});
