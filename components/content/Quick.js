import React from 'react';
import { Layout, QuickSortVisualization } from '~/components';

function Quick({ html }) {
  return (
    <Layout>
      <QuickSortVisualization />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

Quick.propTypes = {
  html: React.PropTypes.string.isRequired,
};

export default Quick;
