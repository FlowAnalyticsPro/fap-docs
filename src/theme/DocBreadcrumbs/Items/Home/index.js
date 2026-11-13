// Premier élément du fil d'Ariane : « Guide » au lieu de l'icône maison.
// Le site n'a pas de page d'accueil : « Guide » mène à la première fiche du sommaire.
import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import {useDocsSidebar} from '@docusaurus/plugin-content-docs/client';

function firstLink(items) {
  for (const item of items) {
    if (item.type === 'link') {
      return item.href;
    }
    if (item.type === 'category') {
      const href = item.href ?? firstLink(item.items);
      if (href) {
        return href;
      }
    }
  }
  return undefined;
}

export default function HomeBreadcrumbItem() {
  const sidebar = useDocsSidebar();
  const href = sidebar ? firstLink(sidebar.items) : undefined;
  const label = (
    <Translate id="breadcrumbs.guide" description="Premier élément du fil d'Ariane">
      Guide
    </Translate>
  );
  return (
    <li className="breadcrumbs__item">
      {href ? (
        <Link className="breadcrumbs__link" href={href}>
          {label}
        </Link>
      ) : (
        <span className="breadcrumbs__link">{label}</span>
      )}
    </li>
  );
}
