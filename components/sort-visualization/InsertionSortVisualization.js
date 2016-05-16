import React from 'react';
import Bars from './Bars';
import { Link } from 'react-app';
import { shuffle, swap } from './utils';
import s from './Visualization.css';

function *insertionSort(arr, highlights) {
  for (let i = 1; i < arr.length; i++) {
    highlights.i = i;
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      highlights.j = j;
      highlights.smallest = j - 1;
      yield;
      swap(arr, j, j - 1);
      yield;
    }
  }
}

const InsertionSortVisualization = React.createClass({
  componentDidMount() {
    let insertionSorter = insertionSort(this.state.arr, this.state.highlights);
    this.cleanup = setInterval(() => {
      this.setState(this.state);
      if (insertionSorter.next().done) {
        shuffle(this.state.arr);
        insertionSorter = insertionSort(this.state.arr, this.state.highlights);
      }
    }, 50);
  },

  componentWillUnmount() {
    clearInterval(this.cleanup);
  },

  getInitialState() {
    const arr = Array.from(Array(50).keys());
    const highlights = {};
    shuffle(arr);

    return {
      arr: arr,
      highlights: highlights,
    };
  },

  render() {
    return (
      <div>
        <Link to='/sort-visualization/insertionsort/'>
          <h3 className={s.title}>Insertion Sort</h3>
        </Link>
        <Bars arr={this.state.arr} highlights={this.state.highlights} />
      </div>
    );
  },
});

export default InsertionSortVisualization;
