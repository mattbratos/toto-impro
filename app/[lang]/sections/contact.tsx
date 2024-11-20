"use client";
import { getDictionary } from "@/get-dictionary";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useParams } from "next/navigation";

interface ContactProps {
  dict: Awaited<ReturnType<typeof getDictionary>>;
}

export function Contact({ dict }: ContactProps) {
  // Get the current language from the URL
  const params = useParams();
  const lang = params.lang as string;

  return (
    <section id="kontakt" className="w-full py-16 md:py-24 lg:py-32 bg-black">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-yellow-400">
          {dict.contact.title}
        </h2>
        <form
          className="max-w-2xl mx-auto space-y-6"
          action="https://formsubmit.co/maciek.bratos@gmail.com"
          method="POST"
        >
          <Input
            name="name"
            placeholder={dict.contact.form.namePlaceholder}
            className="bg-gray-900 text-white placeholder-gray-400 border-yellow-400 h-14 text-lg"
            required
          />
          <Input
            name="email"
            type="email"
            placeholder={dict.contact.form.emailPlaceholder}
            className="bg-gray-900 text-white placeholder-gray-400 border-yellow-400 h-14 text-lg"
            required
          />
          <Textarea
            name="message"
            placeholder={dict.contact.form.messagePlaceholder}
            className="bg-gray-900 text-white placeholder-gray-400 border-yellow-400 min-h-[200px] text-lg"
            required
          />
          <input
            type="hidden"
            name="_subject"
            value={dict.contact.form.emailSubject}
          />
          <input
            type="hidden"
            name="_next"
            value={`https://totoimpro.pl/${lang}/thank-you`}
          />
          <input type="text" name="_honey" style={{ display: "none" }} />
          <input type="hidden" name="_template" value="table" />
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-4 rounded-full font-bold text-xl transition-colors duration-300"
          >
            {dict.contact.form.submitButton}
          </button>
        </form>
      </div>
    </section>
  );
}
