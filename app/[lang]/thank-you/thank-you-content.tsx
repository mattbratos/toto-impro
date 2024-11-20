"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import { getDictionary } from "@/get-dictionary";

interface ThankYouContentProps {
  dict: Awaited<ReturnType<typeof getDictionary>>;
}

export default function ThankYouContent({ dict }: ThankYouContentProps) {
  const [randomGif, setRandomGif] = useState({
    url: "",
    width: 0,
    height: 0,
  });

  const thankYouGifs = useMemo(
    () => [
      {
        url: "https://media.giphy.com/media/4GArNO5b78YqHETk4J/giphy.gif",
        width: 480,
        height: 360,
      },
      {
        url: "https://media.giphy.com/media/5xtDarmwsuR9sDRObyU/giphy.gif",
        width: 480,
        height: 270,
      },
      {
        url: "https://media.giphy.com/media/26gsjCZpPolPr3sBy/giphy.gif",
        width: 480,
        height: 270,
      },
      {
        url: "https://media.giphy.com/media/uWlpPGquhGZNFzY90z/giphy.gif",
        width: 480,
        height: 480,
      },
      {
        url: "https://media.giphy.com/media/PLqOxEjUUR3jXaCHJU/giphy.gif",
        width: 480,
        height: 270,
      },
      {
        url: "https://media.giphy.com/media/ybHOYhfs2KpCFzBrP5/giphy.gif",
        width: 480,
        height: 270,
      },
    ],
    [],
  );

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * thankYouGifs.length);
    setRandomGif(thankYouGifs[randomIndex]);
  }, [thankYouGifs]);

  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-100 font-sans">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap");
        body {
          font-family: "Geist", sans-serif;
        }
      `}</style>
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-2xl w-full">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-yellow-400 mb-4">
            {dict.thankYou.title}
          </h1>
          <p className="text-lg mb-8">{dict.thankYou.message}</p>
          {randomGif.url && (
            <div className="mb-8 flex justify-center">
              <Image
                src={randomGif.url}
                alt={dict.thankYou.gifAlt}
                width={randomGif.width}
                height={randomGif.height}
                className="rounded-lg"
              />
            </div>
          )}
          <Link
            href="/"
            className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-3 rounded-full font-bold text-lg transition-colors duration-300 inline-block"
          >
            {dict.thankYou.backButton}
          </Link>
        </div>
      </main>
    </div>
  );
}
