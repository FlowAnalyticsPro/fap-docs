import React from 'react';
import {translate} from '@docusaurus/Translate';

// Vidéo de la fiche, en tête de page. Le champ `video` d'une fiche contient
// l'identifiant YouTube de la vidéo (11 caractères), propre à chaque langue.
// youtube-nocookie.com : aucun cookie YouTube tant que la vidéo n'est pas lancée.
export default function FicheVideo({id, title}) {
  if (!id) {
    return null;
  }
  return (
    <div className="fiche-video">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?rel=0`}
        title={translate({id: 'fiche.video.title', message: 'Vidéo : {title}'}, {title})}
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
