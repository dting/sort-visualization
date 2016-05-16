import React from 'react';
import { Layout } from '~/components';
import { BubbleSortVisualization } from '~/components';
import { SelectionSortVisualization } from '~/components';
import { InsertionSortVisualization } from '~/components';
import { QuickSortVisualization } from '~/components';

function Content() {
  return (
    <Layout>
      <BubbleSortVisualization />
      <SelectionSortVisualization />
      <InsertionSortVisualization />
      <QuickSortVisualization />
    </Layout>
  );
}

export default Content;
