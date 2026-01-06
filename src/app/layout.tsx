import type { Metadata, Viewport } from "next";
import "../index.css";

const siteUrl = "https://thanhtutaung.dev";
const siteName = "Than Htut Aung";
const siteDescription =
   "Portfolio of Than Htut Aung — a passionate Web Developer crafting modern, performant, and beautiful digital experiences.";

export const metadata: Metadata = {
   title: {
      default: siteName,
      template: `%s | ${siteName}`,
   },
   description: siteDescription,
   keywords: [
      "Than Htut Aung",
      "Web Developer",
      "Frontend Developer",
      "Software Engineer",
      "React",
      "Next.js",
      "TypeScript",
      "Portfolio",
   ],
   authors: [{ name: siteName, url: siteUrl }],
   creator: siteName,
   publisher: siteName,
   metadataBase: new URL(siteUrl),
   alternates: {
      canonical: "/",
   },
   icons: {
      icon: "/assets/me.png",
      shortcut: "/assets/me.png",
      apple: "/assets/me.png",
   },
   manifest: "/manifest.json",
   openGraph: {
      type: "website",
      locale: "en_US",
      url: siteUrl,
      siteName: siteName,
      title: siteName,
      description: siteDescription,
      images: [
         {
            url: "/assets/me.png",
            width: 512,
            height: 512,
            alt: siteName,
         },
      ],
   },
   twitter: {
      card: "summary",
      title: siteName,
      description: siteDescription,
      images: ["/assets/me.png"],
      creator: "@thanhtutaung",
   },
   robots: {
      index: true,
      follow: true,
      googleBot: {
         index: true,
         follow: true,
         "max-video-preview": -1,
         "max-image-preview": "large",
         "max-snippet": -1,
      },
   },
};

export const viewport: Viewport = {
   themeColor: "#000000",
   width: "device-width",
   initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body>
            <div id="root">{children}</div>
         </body>
      </html>
   );
}
