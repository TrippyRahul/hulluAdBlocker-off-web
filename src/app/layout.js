import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import Schema from "./Schema";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Enjoy the ultimate watching experience with hulu ad blocker",
  description:
    " No more video or display ads during streaming sessions. Install now for an ad-free experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/nav-logo.png" />
        <link rel="canonical" href="https://www.huluadblocker.net/" />
        <meta name="google-site-verification" content="XCgxDalrgHtypXbth4qBvP6bzqgavYtkcMDEEpuzoEU" />


        <meta property="og:url" content="https://www.huluadblocker.net/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Enjoy the ultimate watching experience with hulu ad blocker" />
        <meta
          property="og:description"
          content=" No more video or display ads during streaming sessions. Install now for an ad-free experience"
        />
        <meta
          property="og:image"
          content="https://www.huluadblocker.net/favicon.svg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="huluadblocker.net" />
        <meta property="twitter:url" content="https://www.huluadblocker.net/" />
        <meta name="twitter:title" content="Enjoy the ultimate watching experience with hulu ad blocker" />
        <meta
          name="twitter:description"
          content=" No more video or display ads during streaming sessions. Install now for an ad-free experience"
        />
        <meta
          name="twitter:image"
          content="https://www.huluadblocker.net/favicon.svg"
        />
      </head>
      <body className={inter.className}>
        <Schema />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
