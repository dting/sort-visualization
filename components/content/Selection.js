import React from 'react';
import { Layout, SortVisualization, shuffle } from '~/components';

function Selection({ html }) {
  const arr = Array.from(Array(100).keys());
  shuffle(arr);
  return (
    <Layout>
      <SortVisualization type="selectionsort" title="Selection Sort" arr={arr} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

Selection.propTypes = {
  html: React.PropTypes.string.isRequired,
};

export default Selection;
