import { getDictionary } from "@/get-dictionary";

interface VideosProps {
  dict: Awaited<ReturnType<typeof getDictionary>>;
}

export function Videos({ dict }: VideosProps) {
  const videos = [
    "https://www.youtube.com/embed/MvbTeqY8lVM",
    "https://www.youtube.com/embed/QXmbvpDl1eg",
    "https://www.youtube.com/embed/Jgybcz2Wttg",
  ];

  return (
    <section
      id="zobacz-nas"
      className="w-full py-16 md:py-24 lg:py-32 bg-black"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-yellow-400">
          {dict.videos.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((src, index) => (
            <div key={index} className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={src}
                title={`ToTo Impro ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl border-2 border-yellow-400"
              ></iframe>
            </div>
          ))}
        </div>
        {/* <div className="text-center mt-12">
          <Link
            href="https://www.youtube.com/@totoimpro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 py-3 rounded-lg font-bold text-lg border-2 border-yellow-400 transition-colors duration-200"
          >
            {dict.videos.buttons.more}
          </Link>
        </div> */}
      </div>
    </section>
  );
}
