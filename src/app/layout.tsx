import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter, Manrope } from "next/font/google";
import AlexioHead from "../AlexioHead";
import AlexioState from "../Context";
import NextThemeProvider from "../providers/theme-provider";
import { cx } from "../utils";
import siteMetadata from "../utils/siteMetaData";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <AlexioState>
        <AlexioHead />
        <body
          className={cx(inter.variable, "font-mr bg-light dark:bg-darkness")}
          >
          <NextThemeProvider>
          {children}
          <SpeedInsights />
          </NextThemeProvider>
        </body>
      </AlexioState>
    </html>
  );
}
function useState(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}

function useEffect(arg0: () => void, arg1: undefined[]) {
  throw new Error("Function not implemented.");
}
