import React from 'react';
import { useParams } from 'react-router-dom';

import usePageTitle from '../../hooks/usePageTitle';
import CharacterDetails from '../../containers/CharacterDetails';

const CharacterPageDetail = () => {

  const { id } = useParams();
  usePageTitle('Character Detail');

  return (
    <section className="container py-3">
      <CharacterDetails id={id} />
    </section>
  );
}

export default CharacterPageDetail;