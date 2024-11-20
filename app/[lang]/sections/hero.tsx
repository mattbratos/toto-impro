import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/get-dictionary";

interface HeroProps {
  dict: Awaited<ReturnType<typeof getDictionary>>;
}

export function Hero({ dict }: HeroProps) {
  return (
    <section
      id="home"
      className="w-screen relative left-[50%] right-[50%] -mx-[50vw] py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-yellow-400 to-yellow-600 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5533%203.jpg-R1oMZ7owo5CVuMPOXQK9tLo6qbEPBL.png"
            alt="ToTo Impro Logo"
            width={300}
            height={300}
            className="mb-8"
          />
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-black">
            {dict.hero.title}
          </h1>
          <p className="mx-auto max-w-[700px] text-black/80 md:text-xl">
            {dict.hero.description}
          </p>
          <Link
            href="https://biletyna.pl/spektakl/toto-impro"
            className="bg-black text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 py-3 rounded-lg font-bold text-lg"
          >
            {dict.hero.buttons.tickets}
          </Link>
          <Link
            href="mailto:totoimprov@gmail.com"
            className="bg-black text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 py-3 rounded-lg font-bold text-lg mt-4"
          >
            {dict.hero.buttons.booking}
          </Link>
        </div>
      </div>
    </section>
  );
}
