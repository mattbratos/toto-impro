import ThankYouContent from "@/app/[lang]/thank-you/thank-you-content";
import { getDictionary } from "@/get-dictionary";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function ThankYouPage({ params: { lang } }: any) {
  const dict = await getDictionary(lang);

  return <ThankYouContent dict={dict} />;
}
