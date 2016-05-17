import React from 'react';
import { Layout, SortVisualization, shuffle } from '~/components';

function SortInfo({ type, title, html }) {
  const arr = Array.from(Array(100).keys());
  shuffle(arr);
  return (
    <Layout>
      <SortVisualization type={type} title={title} arr={arr} />
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
