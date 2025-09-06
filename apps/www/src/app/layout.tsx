import "./globals.css";

import { Inter, Lora } from "next/font/google";
import localFont from "next/font/local";

import { Footer } from "@/components/footer";
import { TmuxStatusBar } from "@/components/tmux-status-bar";

import { Providers } from "./providers";
import type { Metadata } from "next";

const interSans = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const loraSerif = Lora({
    variable: "--font-lora",
    subsets: ["latin"],
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
                className={`${interSans.variable} ${loraSerif.variable} ${nectoMono.variable} font-serif antialiased [font-feature-settings:"liga"_off]`}
            >
                <Providers>
                    <div className="bg-background text-foreground relative grid min-h-screen grid-rows-[32px_1fr_32px] justify-items-center">
                        <TmuxStatusBar />
                        <div className="row-start-2 grid w-full px-4 sm:px-8">
                            <div className="mx-auto grid w-full max-w-2xl">
                                {children}
                            </div>
                        </div>
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
