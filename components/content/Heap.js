import React from 'react';
import { Layout, SortVisualization, shuffle } from '~/components';

function Heap({ html }) {
  const arr = Array.from(Array(100).keys());
  shuffle(arr);
  return (
    <Layout>
      <SortVisualization type="heapsort" title="Heap Sort" arr={arr} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

Heap.propTypes = {
  html: React.PropTypes.string.isRequired,
};

export default Heap;
