import React from 'react';
import Bar from './Bar';
import s from './Visualization.css';

class Bars extends React.Component {

  render() {
    const bars = this.props.arr.map((val, idx) => {
      return <Bar val={val} key={idx} idx={idx} meta={this.props.meta} />;
    });
    return (
      <div className={s.bars}>
        {bars}
      </div>
    );
  }
}

export default Bars;
