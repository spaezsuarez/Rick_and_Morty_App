import React from 'react';
import { useParams } from 'react-router-dom';

import usePageTitle from '../../hooks/usePageTitle';
import EpisodeDetailContainer from '../../containers/EpisodeDetail';

const EpisodePageDetail = () => {

  const { idEp } = useParams();
  usePageTitle('Episode Detail');

  return (
    <section className="container py-3">
      <EpisodeDetailContainer id={idEp} />
    </section>
  );
}

export default EpisodePageDetail;