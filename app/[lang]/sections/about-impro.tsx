import { getDictionary } from "@/get-dictionary";

interface AboutImproProps {
  dict: Awaited<ReturnType<typeof getDictionary>>;
}

export function AboutImpro({ dict }: AboutImproProps) {
  return (
    <section
      id="czym-jest-impro"
      className="w-screen relative left-[50%] right-[50%] -mx-[50vw] py-16 md:py-24 lg:py-32 bg-black"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-yellow-400">
              {dict.about.title}
            </h2>
            <p className="text-gray-300 md:text-lg">{dict.about.mainText}</p>
            <p className="text-gray-300 md:text-lg">
              {dict.about.secondaryText}
            </p>
          </div>
          <div className="relative aspect-video">
            <iframe
              src={dict.about.demoUrl}
              allow="fullscreen"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded-xl border-2 border-yellow-400"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
