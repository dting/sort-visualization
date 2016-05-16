import React from 'react';
import Bar from './Bar';
import s from './Visualization.css';

class Bars extends React.Component {

  render() {
    const bars = this.props.arr.map((val, idx) => {
      return <Bar val={val} key={val} idx={idx} highlights={this.props.highlights} />;
    });
    return (
      <div className={s.bars}>
        {bars}
      </div>
    );
  }
}

export default Bars;
