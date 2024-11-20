"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getDictionary } from "@/get-dictionary";
import { useParams } from "next/navigation";

interface HeaderProps {
  dict: Awaited<ReturnType<typeof getDictionary>>;
}

// Define the navigation key type based on the dictionary structure
type NavigationKey = keyof Awaited<
  ReturnType<typeof getDictionary>
>["navigation"];

// Define the navigation item interface
interface NavigationItem {
  key: NavigationKey;
  href: string;
}

export function Header({ dict }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const params = useParams();

  const navigationItems: NavigationItem[] = [
    { key: "home", href: "home" },
    { key: "experience", href: "nasze-doswiadczenie" },
    { key: "team", href: "poznaj-nas" },
    { key: "about", href: "czym-jest-impro" },
    { key: "videos", href: "zobacz-nas" },
    { key: "gallery", href: "galeria" },
    { key: "faq", href: "faq" },
    { key: "contact", href: "kontakt" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex h-16 items-center px-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5533%203.jpg-R1oMZ7owo5CVuMPOXQK9tLo6qbEPBL.png"
              alt="ToTo Impro Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            <span className="font-bold text-yellow-400 text-xl">
              ToTo Impro
            </span>
          </Link>

          <nav className="ml-auto hidden md:flex gap-6">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                className="text-sm font-bold text-white hover:text-yellow-400 transition-colors"
                href={`#${item.href}`}
              >
                {dict.navigation[item.key]}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 ml-6">
            <Link
              href="/pl"
              className={`text-sm font-bold !text-white transition-colors flex items-center gap-1 ${
                params.lang === "pl"
                  ? "!text-yellow-400"
                  : "hover:!text-yellow-400"
              }`}
            >
              🇵🇱 PL
            </Link>
            <Link
              href="/en"
              className={`text-sm font-bold !text-white transition-colors flex items-center gap-1 ${
                params.lang === "en"
                  ? "!text-yellow-400"
                  : "hover:!text-yellow-400"
              }`}
            >
              🇬🇧 EN
            </Link>
          </div>

          <button
            className="ml-auto md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6 text-yellow-400" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800">
            <nav className="flex flex-col py-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.key}
                  className="px-4 py-2 text-sm font-bolt text-white hover:text-yellow-400 transition-colors"
                  href={`#${item.href}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {dict.navigation[item.key]}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
