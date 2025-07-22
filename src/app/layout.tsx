import type { Metadata } from "next";
import "../index.css";

export const metadata: Metadata = {
   title: "Than Htut Aung",
   description: "Portfolio website of Than Htut Aung - Web Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <head>
            <link rel="icon" href="/favicon.ico" />
            <meta name="theme-color" content="#000000" />
            <link rel="apple-touch-icon" href="/logo192.png" />
            <link rel="manifest" href="/manifest.json" />
         </head>
         <body>
            <div id="root">{children}</div>
         </body>
      </html>
   );
}
