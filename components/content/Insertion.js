import React from 'react';
import { Layout, InsertionSortVisualization } from '~/components';

function Insertion({ html }) {
  return (
    <Layout>
      <InsertionSortVisualization />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

Insertion.propTypes = {
  html: React.PropTypes.string.isRequired,
};

export default Insertion;
