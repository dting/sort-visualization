import React from 'react';
import { Layout } from '~/components';
import { BubbleSortVisualization } from '~/components';
import { SelectionSortVisualization } from '~/components';
import { InsertionSortVisualization } from '~/components';

function Content() {
  return (
    <Layout>
      <BubbleSortVisualization />
      <SelectionSortVisualization />
      <InsertionSortVisualization />
    </Layout>
  );
}

export default Content;
