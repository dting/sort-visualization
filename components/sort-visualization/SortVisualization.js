import React from 'react';
import FA from 'react-fontawesome';
import Bars from './Bars';
import { Link } from 'react-app';
import shuffle from '~/components';
import * as sorts from './sorts';
import s from './Visualization.css';

const SortVisualization = React.createClass({
  componentDidMount() {
    let sorter = sorts[this.state.type]({ ...this.state });
    this.cleanup = setInterval(() => {
      let result = sorter.next();
      this.setState(this.state);
      if (result.done) {
        clearInterval(this.cleanup);
      }
    }, 75);
  },

  componentWillUnmount() {
    clearInterval(this.cleanup);
  },

  getInitialState() {
    return {
      arr: this.props.arr.slice(),
      highlights: {},
      aux: this.props.aux,
      auxHighlights: {},
      type: this.props.type,
      title: this.props.title,
    };
  },

  render() {
    return (
      <div>
        <div className={s.title}>
          <Link to={`/sort-visualization/${this.state.type}/`}>
            {this.state.title} <FA name="info-circle" />
          </Link>
        </div>
        <Bars arr={this.state.arr} highlights={this.state.highlights} />
        {this.state.aux && <Bars arr={this.state.aux} highlights={this.state.auxHighlights} />}
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
