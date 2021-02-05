import React from 'react';
import { useParams } from 'react-router-dom';

import usePageTitle from '../../hooks/usePageTitle';
import CharacterDetail from '../../containers/CharacterDetail';

const CharacterPageDetail = () => {

  const { id } = useParams();
  usePageTitle('Character Detail');

  return (
    <section className="container py-3">
      <CharacterDetail id={id} />
    </section>
  );
}

export default CharacterPageDetail;