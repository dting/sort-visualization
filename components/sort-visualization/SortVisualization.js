import React from 'react';
import Bars from './Bars';
import { Link } from 'react-app';
import shuffle from '~/components';
import * as sorts from './sorts';
import s from './Visualization.css';

const SortVisualization = React.createClass({
  componentDidMount() {
    let sorter = sorts[this.state.type](this.state.arr, this.state.highlights);
    this.cleanup = setInterval(() => {
      let result = sorter.next();
      this.setState(this.state);
      if (result.done) {
        clearInterval(this.cleanup);
      }
    }, 50);
  },

  componentWillUnmount() {
    clearInterval(this.cleanup);
  },

  getInitialState() {
    return {
      arr: this.props.arr.slice(),
      highlights: {},
      type: this.props.type,
      title: this.props.title,
    };
  },

  render() {
    return (
      <div className={s.content}>
        <div className={s.title}>
          <Link to={`/sort-visualization/${this.state.type}/`}>
            {this.state.title}
          </Link>
        </div>
        <Bars arr={this.state.arr} highlights={this.state.highlights} />
      </div>
    );
  },
});

SortVisualization.propTypes = {
  arr: React.PropTypes.array.isRequired,
  type: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
};

export default SortVisualization;
