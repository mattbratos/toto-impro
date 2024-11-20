import { getDictionary } from "@/get-dictionary";

interface ExperienceProps {
  dict: Awaited<ReturnType<typeof getDictionary>>;
}

export function Experience({ dict }: ExperienceProps) {
  const experienceStats = [
    { value: "50+", label: "shows" },
    { value: "17", label: "stages" },
    { value: "7", label: "cities" },
    { value: "2", label: "countries" },
  ];

  return (
    <section
      id="nasze-doswiadczenie"
      className="w-full py-12 md:py-24 lg:py-32 bg-black "
    >
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-yellow-400">
          {dict.experience.title}
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-yellow-400">
            {experienceStats.map((stat) => (
              <div key={stat.label}>
                <h3 className="text-4xl font-bold">{stat.value}</h3>
                {/* <p>{dict.experience.stats[stat.label]}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
