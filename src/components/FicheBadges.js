import React from 'react';
import {translate} from '@docusaurus/Translate';

// Libellés des repères d'édition, utilisés dans le champ `editions` d'une fiche.
const EDITION_LABELS = {
  cloud: () => translate({id: 'fiche.edition.cloud', message: 'Cloud'}),
  'on-premise': () => translate({id: 'fiche.edition.onPremise', message: 'On-Premise'}),
  jira: () => translate({id: 'fiche.edition.jira', message: 'Module Jira'}),
};

// Badges sous le titre d'une fiche : version de l'application et éditions concernées.
export default function FicheBadges({version, editions = []}) {
  if (!version && editions.length === 0) {
    return null;
  }
  return (
    <div className="fiche-badges">
      {version && (
        <span className="fiche-badge fiche-badge--version">
          {translate(
            {id: 'fiche.version', message: 'Version {version}'},
            {version},
          )}
        </span>
      )}
      {editions.map((edition) => {
        const label = EDITION_LABELS[edition];
        if (!label) {
          throw new Error(`Édition inconnue dans une fiche : « ${edition} »`);
        }
        return (
          <span key={edition} className="fiche-badge fiche-badge--edition">
            {label()}
          </span>
        );
      })}
    </div>
  );
}
