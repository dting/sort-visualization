import React from 'react';
import Bar from './Bar';
import classNames from 'classNames/bind';
import s from './Visualization.css';

const cx = classNames.bind(s);

class Bars extends React.Component {

  render() {
    const bars = this.props.arr.map((val, idx) => {
      return <Bar val={val} key={idx} idx={idx} meta={this.props.meta} />;
    });
    const context = {
      bars: true,
      aux: this.props.meta.aux,
    };
    return (
      <div className={cx(context)}>
        {bars}
      </div>
    );
  }
}

export default Bars;
