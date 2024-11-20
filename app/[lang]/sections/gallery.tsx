"use client";

import { getDictionary } from "@/get-dictionary";
import Image from "next/image";

interface GalleryProps {
  dict: Awaited<ReturnType<typeof getDictionary>>;
}

export function Gallery({ dict }: GalleryProps) {
  const images = [
    "https://xlbvwgsr3nuyelsr.public.blob.vercel-storage.com/bycathgraz_12SZTUKATERIE_6308-4XAjj4DHa2GxCH2jvSzTMbOCUPj2Mb.jpg",
    "https://xlbvwgsr3nuyelsr.public.blob.vercel-storage.com/bycathgraz_12SZTUKATERIE_6250-6kgCUUoMXCE9oVbnYPvBlv4wjADRM4.jpg",
    "https://xlbvwgsr3nuyelsr.public.blob.vercel-storage.com/bycathgraz_12SZTUKATERIE_6190-zDXW8tuCmfqVTE96WT1Uq0MrVrNxN0.jpg",
    "https://xlbvwgsr3nuyelsr.public.blob.vercel-storage.com/Zrzut%20ekranu%202024-11-15%20o%2001.45.23-cU7h3uCea7ZzZaz2BukMB2lLHKvYu2.png",
    "https://xlbvwgsr3nuyelsr.public.blob.vercel-storage.com/bycathgraz_12SZTUKATERIE_5974-qxKBUk0LzWIQC2M73j5UvvBBbyrFQI.jpg",
    "https://xlbvwgsr3nuyelsr.public.blob.vercel-storage.com/bycathgraz_12SZTUKATERIE_5933-min-gfwPwt9PFJvtRGNLxyzGTYAur1fNpQ.jpg",
    "https://xlbvwgsr3nuyelsr.public.blob.vercel-storage.com/bkozakphoto-94-min-Pm0Ga7V24nquEdbCSNSDuS0eqRlDuk.JPG",
    "https://xlbvwgsr3nuyelsr.public.blob.vercel-storage.com/bkozakphoto-74-min-V3IG9e08RaLlT5Dkifyp47TqBBYQCi.JPG",
    "https://xlbvwgsr3nuyelsr.public.blob.vercel-storage.com/bkozakphoto-108-min-V6IJimvplYAC5RF8YwlVh7E6RbJwWO.JPG",
    "https://xlbvwgsr3nuyelsr.public.blob.vercel-storage.com/bycathgraz_12SZTUKATERIE_6316-5J69SSVkYRP2Xa02Y4vEFKxHjN6e3d.jpg",
    "https://xlbvwgsr3nuyelsr.public.blob.vercel-storage.com/2024-10-20_ToTo-Impro-spektakl-improwizowany_06-min-ZlWi52YqOxhpSLGPWhlsVRmbJdId6O.jpg",
    "https://xlbvwgsr3nuyelsr.public.blob.vercel-storage.com/DSC_6888-min-lkSnIFSE2SkUtBG1kEe0ACK6Fiix95.jpg",
    "https://xlbvwgsr3nuyelsr.public.blob.vercel-storage.com/431475499_410185878258632_6412565972478795856_n-OZmsFaWzDGY5PpCREY9u7dXe2TDopk.jpg",
    "https://xlbvwgsr3nuyelsr.public.blob.vercel-storage.com/433766926_122155924016083567_5707649947899862337_n-lnBv4FR9ZoO90PGCfyN9lLiqakOe7m.jpg",
    "https://xlbvwgsr3nuyelsr.public.blob.vercel-storage.com/431116334_410185934925293_9188360408670438707_n-iktL5PP7hXFCbHnQqfnJHEjxLpO1FC.jpg",
    "https://xlbvwgsr3nuyelsr.public.blob.vercel-storage.com/4F8A5452%20(1)-OI1x2uLcyXxpAmNo7tkg9Ktiu65A1J.jpeg",
  ];

  return (
    <section id="galeria" className="w-full py-12 md:py-24 lg:py-32 bg-black">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-yellow-400">
          {dict.gallery.title}
        </h2>
        <p className="text-center text-xl mb-12 text-gray-300">
          {dict.gallery.description}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-square">
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover rounded-lg border-2 border-yellow-400"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
