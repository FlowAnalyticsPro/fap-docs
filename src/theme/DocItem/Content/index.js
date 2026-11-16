// Copie du composant Docusaurus DocItem/Content (v3.10), avec les badges
// de la fiche (version, éditions) et sa vidéo affichés sous le titre.
import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';
import FicheBadges from '@site/src/components/FicheBadges';
import FicheVideo from '@site/src/components/FicheVideo';

function useSyntheticTitle() {
  const {metadata, frontMatter, contentTitle} = useDoc();
  const shouldRender = !frontMatter.hide_title && typeof contentTitle === 'undefined';
  if (!shouldRender) {
    return null;
  }
  return metadata.title;
}

export default function DocItemContent({children}) {
  const syntheticTitle = useSyntheticTitle();
  const {frontMatter, metadata} = useDoc();
  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
      {syntheticTitle && (
        <header>
          <Heading as="h1">{syntheticTitle}</Heading>
        </header>
      )}
      <FicheBadges version={frontMatter.guide_version} editions={frontMatter.editions} />
      <FicheVideo id={frontMatter.video} title={metadata.title} />
      <MDXContent>{children}</MDXContent>
    </div>
  );
}
