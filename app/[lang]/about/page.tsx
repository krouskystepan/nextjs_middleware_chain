import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

export default async function Dashboard({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);

  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-3xl font-bold">{page.about.title}</h1>
        <p className="text-gray-500">{page.about.description}</p>
        <p className="text-gray-500">{page.about.description2}</p>
      </div>
    </section>
  );
}
