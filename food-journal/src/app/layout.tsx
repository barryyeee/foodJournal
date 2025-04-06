import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const roboto = Roboto({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	variable: "--font-roboto",
});

export const metadata: Metadata = {
	title: "Food Journal",
	description: "Track your meals and recipes",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${roboto.variable} antialiased`}>
				<div className="flex min-h-screen">
					<Sidebar />
					<main className="flex-1 md:ml-64 p-4">{children}</main>
				</div>
			</body>
		</html>
	);
}
