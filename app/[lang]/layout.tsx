import "@/app/globals.css";
import { Metadata } from "next";
import localFont from "next/font/local";
import { i18n } from "../../i18n-config";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function RootLayout({ children, params }: any) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* Fabrile Bot */}
        <script
          src="https://fabrile.app/scripts/widget.js?agentId=bot_CHEx6SrdPGPwjwooUfQzi"
          defer
        ></script>
      </body>
    </html>
  );
}
