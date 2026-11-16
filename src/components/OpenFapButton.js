import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {translate} from '@docusaurus/Translate';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';

// Site de FAP dans la langue du guide.
const FAP_SITE_URL = {
  fr: 'https://flowanalyticspro.com',
  en: 'https://flowanalyticspro.com/en/',
};

// Bouton « Ouvrir FAP » de la barre de navigation.
export default function OpenFapButton({mobile, ...props}) {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();
  return (
    <DefaultNavbarItem
      {...props}
      mobile={mobile}
      className="navbar-open-fap"
      href={FAP_SITE_URL[currentLocale] ?? FAP_SITE_URL.fr}
      label={translate({id: 'navbar.openFap', message: 'Ouvrir FAP', description: 'Bouton vers le site de FAP'})}
    />
  );
}
