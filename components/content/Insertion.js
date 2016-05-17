import React from 'react';
import { Layout, SortVisualization, shuffle } from '~/components';

function Insertion({ html }) {
  const arr = Array.from(Array(100).keys());
  shuffle(arr);
  return (
    <Layout>
      <SortVisualization type="insertionsort" title="Insertion Sort" arr={arr} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

Insertion.propTypes = {
  html: React.PropTypes.string.isRequired,
};

export default Insertion;
