import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useAlternatePageUtils} from '@docusaurus/theme-common/internal';
import {translate} from '@docusaurus/Translate';

// Sélecteur FR | EN : ouvre la même fiche dans l'autre langue.
export default function LocaleToggle({mobile}) {
  const {
    i18n: {currentLocale, locales, localeConfigs},
  } = useDocusaurusContext();
  const {createUrl} = useAlternatePageUtils();

  return (
    <div
      className={clsx('locale-toggle', mobile && 'locale-toggle--mobile')}
      role="group"
      aria-label={translate({
        id: 'navbar.localeToggle.ariaLabel',
        message: 'Langue du guide',
        description: 'Libellé accessible du sélecteur de langue',
      })}>
      {locales.map((locale) => {
        const isCurrent = locale === currentLocale;
        return (
          <a
            key={locale}
            className={clsx('locale-toggle__item', isCurrent && 'locale-toggle__item--active')}
            href={createUrl({locale, fullyQualified: false})}
            hrefLang={localeConfigs[locale].htmlLang}
            lang={localeConfigs[locale].htmlLang}
            aria-current={isCurrent ? 'true' : undefined}>
            {localeConfigs[locale].label}
          </a>
        );
      })}
    </div>
  );
}
