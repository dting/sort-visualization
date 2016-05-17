import React from 'react';
import { Layout, SortVisualization, MergeSortVisualization } from '~/components';

function Content({ arr }) {
  return (
    <Layout>
      <SortVisualization type="bubblesort" title="Bubble Sort" arr={arr} />
      <SortVisualization type="selectionsort" title="Selection Sort" arr={arr} />
      <SortVisualization type="insertionsort" title="Insertion Sort" arr={arr} />
      <SortVisualization type="quicksort" title="Quick Sort" arr={arr} />
      <SortVisualization type="heapsort" title="Heap Sort" arr={arr} />
      <SortVisualization type="mergesort" title="Merge Sort" arr={arr} aux={Array(100).fill(99)} />
    </Layout>
  );
}

export default Content;
