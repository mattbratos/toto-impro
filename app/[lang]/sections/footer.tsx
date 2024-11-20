import { getDictionary } from "@/get-dictionary";
import Link from "next/link";
import { Facebook, Youtube, Instagram, Mail } from "lucide-react";

interface FooterProps {
  dict: Awaited<ReturnType<typeof getDictionary>>;
}

export function Footer({ dict }: FooterProps) {
  return (
    <footer className="w-full border-t border-gray-800 py-8 bg-black">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-4 px-4 md:px-6">
        <div className="flex gap-4">
          <Link
            href="https://www.facebook.com/profile.php?id=61552507030058"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ToTo Impro na Facebooku"
          >
            <Facebook className="h-6 w-6 text-yellow-400 hover:text-yellow-500 transition-colors" />
          </Link>
          <Link
            href="https://www.youtube.com/@ToToImpro-uh2go"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ToTo Impro na YouTube"
          >
            <Youtube className="h-6 w-6 text-yellow-400 hover:text-yellow-500 transition-colors" />
          </Link>
          <Link
            href="https://www.instagram.com/totoimpro/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ToTo Impro na Instagramie"
          >
            <Instagram className="h-6 w-6 text-yellow-400 hover:text-yellow-500 transition-colors" />
          </Link>
          <Link
            href="mailto:totoimprov@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email ToTo Impro"
          >
            <Mail className="h-6 w-6 text-yellow-400 hover:text-yellow-500 transition-colors" />
          </Link>
        </div>
        <p className="text-sm text-gray-400 text-center">
          © 2024 ToTo Impro. {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
