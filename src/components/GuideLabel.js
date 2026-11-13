import React from 'react';
import Translate from '@docusaurus/Translate';

// Mention « Guide utilisateur » à côté du logo, comme sur la maquette.
export default function GuideLabel({mobile}) {
  if (mobile) {
    return null;
  }
  return (
    <span className="navbar-guide-label">
      <Translate id="navbar.guideLabel" description="Libellé à côté du logo">
        Guide utilisateur
      </Translate>
    </span>
  );
}
