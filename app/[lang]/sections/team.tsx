import { getDictionary } from "@/get-dictionary";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface TeamProps {
  dict: Awaited<ReturnType<typeof getDictionary>>;
}

export function Team({ dict }: TeamProps) {
  return (
    <section
      id="poznaj-nas"
      className="w-full py-12 md:py-24 lg:py-32 bg-black"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-yellow-400">
          {dict.team.title}
        </h2>
        <p className="text-center text-xl mb-12 text-gray-300">
          {dict.team.description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {dict.team.members.map((member, index) => (
            <Card key={index} className="bg-black text-gray-100">
              <CardContent className="p-4 flex flex-col items-center">
                <div className="aspect-square w-full relative mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                    objectPosition="center 75%"
                  />
                </div>
                <h3 className="text-xl font-bold text-yellow-400">
                  {member.name}
                </h3>
                <p className="text-md text-gray-300 text-center mt-2">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
