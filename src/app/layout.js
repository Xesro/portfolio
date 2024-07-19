import { GeistSans } from "geist/font/sans";

import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "Software Engineer specialized in blockchain and AI technologies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={"dark"}>
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
