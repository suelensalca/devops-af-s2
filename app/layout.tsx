import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Bento Grid",
  description: "Challenge from Frontend Mentor",
  icons: {
    icon: "/assets/favicon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{margin: '0', padding: '0', boxSizing: 'border-box',}}>
      <body className={`${dmSans.className}`} style={{margin: '0', padding: '0', boxSizing: 'border-box',}}>
        {children}
      </body>
    </html>
  );
}
