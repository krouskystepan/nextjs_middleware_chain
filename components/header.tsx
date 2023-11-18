import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import LocaleSwitcher from './locale-switcher';
import CustomLink from './custom-link';

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  return (
    <header className="py-6">
      <nav className="container flex items-center justify-between">
        <ul className="flex gap-x-8">
          <li>
            <CustomLink href="/" lang={lang}>
              {navigation.home}
            </CustomLink>
          </li>
          <li>
            <CustomLink href={`/dashboard`} lang={lang}>
              {navigation.dashboard}
            </CustomLink>
          </li>
        </ul>
        <LocaleSwitcher />
      </nav>
    </header>
  );
}
