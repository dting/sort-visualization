import React from 'react';
import { Layout, SortVisualization, shuffle } from '~/components';

function SortInfo({ type, title, best, worst, html }) {
  const props = {
    title: title,
    type: type,
    arr: Array.from(Array(100).keys()),
    aux: type === 'mergesort' ? Array(100).fill(99) : null,
  };
  shuffle(props.arr);
  return (
    <Layout>
      <SortVisualization {...props} />
      {best &&
        <SortVisualization title="Best Case" type={props.type} arr={best} />}
      {worst &&
        <SortVisualization title="Worst Case" type={props.type} arr={worst} />}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

SortInfo.propTypes = {
  type: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  html: React.PropTypes.string.isRequired,
};

export default SortInfo;
