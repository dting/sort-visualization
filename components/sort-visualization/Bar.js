import React from 'react';
import classNames from 'classNames/bind';
import s from './Visualization.css';

const cx = classNames.bind(s);

function Bar({ idx, val, meta }) {
  const className = cx({
    bar: true,
    i: meta.i === idx,
    j: meta.j === idx,
    largest: meta.largest === idx,
    smallest: meta.smallest === idx,
  });
  const divStyle = {
    height: `${val + 1}px`,
    width: '1%',
    backgroundColor: `rgba(0, 0, 0, ${(val + 1) / 100})`,
  };
  return <div className={className} style={divStyle}></div>;
}

export default Bar;
