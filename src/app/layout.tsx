import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { type Metadata } from "next";

export const metadata: Metadata = {
    title: "Counterspell Agra",
    description: "Hack Club's Beginner Friendly Game Jam in the City of Taj",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html
            lang="en"
            className={`${GeistSans.variable} ${GeistMono.variable} dark scroll-smooth font-sans`}
        >
            <body>{children}</body>
        </html>
    );
}
