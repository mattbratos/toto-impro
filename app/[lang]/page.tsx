import { AboutImpro } from "@/app/[lang]/sections/about-impro";
import { Contact } from "@/app/[lang]/sections/contact";
import { Experience } from "@/app/[lang]/sections/exprience";
import { FAQ } from "@/app/[lang]/sections/faq";
import { Footer } from "@/app/[lang]/sections/footer";
import { Gallery } from "@/app/[lang]/sections/gallery";
import { Header } from "@/app/[lang]/sections/header";
import { Hero } from "@/app/[lang]/sections/hero";
import { Team } from "@/app/[lang]/sections/team";
import { Videos } from "@/app/[lang]/sections/videos";
import { getDictionary } from "../../get-dictionary";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function IndexPage({ params }: any) {
  const { lang } = await params;

  const dict = await getDictionary(lang);

  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-100 font-sans">
      <Header dict={dict} />

      <main className="flex-1">
        <div className="relative">
          <Hero dict={dict} />
          <Experience dict={dict} />
          <Team dict={dict} />
          <AboutImpro dict={dict} />
          <Videos dict={dict} />
          <Gallery dict={dict} />
          <FAQ dict={dict} />
          <Contact dict={dict} />
        </div>
      </main>

      <Footer dict={dict} />
    </div>
  );
}
