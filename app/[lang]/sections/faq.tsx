import { getDictionary } from "@/get-dictionary";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  dict: Awaited<ReturnType<typeof getDictionary>>;
}

export function FAQ({ dict }: FAQProps) {
  return (
    <section id="faq" className="w-full py-16 md:py-24 lg:py-32 bg-black">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-yellow-400">
          {dict.faq.title}
        </h2>
        <div className="max-w-5xl mx-auto space-y-4">
          <Accordion type="single" collapsible>
            {dict.faq.items.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-2xl font-semibold text-yellow-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
