import React from 'react';
import { Layout, SelectionSortVisualization } from '~/components';

function Selection({ html }) {
  return (
    <Layout>
      <SelectionSortVisualization />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

Selection.propTypes = {
  html: React.PropTypes.string.isRequired,
};

export default Selection;
