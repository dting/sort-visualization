import React from 'react';
import { Layout, SortVisualization, shuffle } from '~/components';

function Bubble({ html }) {
  const arr = Array.from(Array(50).keys());
  shuffle(arr);
  return (
    <Layout>
      <SortVisualization type="bubblesort" title="Bubble Sort" arr={arr} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

Bubble.propTypes = {
  html: React.PropTypes.string.isRequired,
};

export default Bubble;
