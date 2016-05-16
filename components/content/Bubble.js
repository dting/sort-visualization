import React from 'react';
import { Layout, BubbleSortVisualization } from '~/components';

function Bubble({ html }) {
  return (
    <Layout>
      <BubbleSortVisualization />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

Bubble.propTypes = {
  html: React.PropTypes.string.isRequired,
};

export default Bubble;
