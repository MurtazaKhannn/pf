import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "MurtazaDev",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link href="https://fonts.googleapis.com/css2?family=Abel&family=Chathura:wght@100;300;400;700;800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Protest+Guerrilla&family=SUSE:wght@100..800&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Abel&family=Chathura:wght@100;300;400;700;800&family=Oswald:wght@200..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Protest+Guerrilla&family=SUSE:wght@100..800&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Abel&family=Chathura:wght@100;300;400;700;800&family=Oswald:wght@200..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Protest+Guerrilla&family=Protest+Strike&family=SUSE:wght@100..800&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://unpkg.com/lenis@1.1.13/dist/lenis.css"></link>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
