import ThankYouContent from "@/app/[lang]/thank-you/thank-you-content";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

interface ThankYouPageProps {
  params: {
    lang: Locale;
  };
}

export default async function ThankYouPage({
  params: { lang },
}: ThankYouPageProps) {
  const dict = await getDictionary(lang);

  return <ThankYouContent dict={dict} />;
}
