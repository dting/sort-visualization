import React from 'react';
import classNames from 'classNames/bind';
import s from './Visualization.css';

const cx = classNames.bind(s);

function Bar({ idx, val, meta }) {
  const context = {
    bar: true,
    i: meta.i === idx,
    j: meta.j === idx,
    largest: meta.largest === idx,
    smallest: meta.smallest === idx,
  };
  context[`bar-${val}`] = true;
  return <div className={cx(context)} />;
}

export default Bar;
