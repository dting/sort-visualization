import React from 'react';
import { Layout, SortVisualization, shuffle } from '~/components';

function Quick({ html }) {
  const arr = Array.from(Array(50).keys());
  shuffle(arr);
  return (
    <Layout>
      <SortVisualization type="quicksort" title="Quick Sort" arr={arr} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

Quick.propTypes = {
  html: React.PropTypes.string.isRequired,
};

export default Quick;
