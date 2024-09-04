import "./globals.css";
import type { Metadata } from "next";
import userData from "../public/data/data.json";
import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google";
import Nav from "./nav";
import Footer from "./footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: userData.metadata.title,
  description: userData.metadata.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <div className="flex flex-col min-h-screen">
          <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-[rgb(13,13,13)]">
            <Nav />
          </header>
          <main className="flex-1 pt-[5rem]">{children}</main>
          <footer className="bg-[rgb(13,13,13)]">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
