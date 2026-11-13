// Ajoute deux éléments de barre de navigation propres au guide FAP.
import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import GuideLabel from '@site/src/components/GuideLabel';
import LocaleToggle from '@site/src/components/LocaleToggle';

export default {
  ...ComponentTypes,
  'custom-guideLabel': GuideLabel,
  'custom-localeToggle': LocaleToggle,
};
