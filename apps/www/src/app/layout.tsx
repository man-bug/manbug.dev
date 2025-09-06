import "./globals.css";

import { Inter, Lora } from "next/font/google";
import localFont from "next/font/local";

import type { Metadata } from "next";

const interSans = Inter({
    variable: "--font-inter",
    subsets: ["latin"]
});

const loraSerif = Lora({
    variable: "--font-lora",
    subsets: ["latin"]
});

const nectoMono = localFont({
    src: [
        {
            path: "../../public/NectoMono-Regular.woff2",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-necto",
});

export const metadata: Metadata = {
    title: {
        default: "manbug",
        template: "%s | manbug",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${interSans.variable} ${loraSerif.variable} ${nectoMono.variable} antialiased [font-feature-settings:"liga"_off]`}
            >
                {children}
            </body>
        </html>
    );
}
