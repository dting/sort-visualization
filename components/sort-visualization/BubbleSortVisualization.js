import React from 'react';
import Bars from './Bars';
import { Link } from 'react-app';
import { shuffle, swap } from './utils';
import s from './Visualization.css';

function *bubbleSort(arr, highlights) {
  for (let i = arr.length - 1; i > 0; i--) {
    highlights.i = i;
    for (let j = 0; j < i; j++) {
      yield;
      highlights.j = j;
      highlights.largest = j + 1;
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        yield;
      }
    }
  }
}

const BubbleSortVisualization = React.createClass({
  componentDidMount() {
    let bubbleSorter = bubbleSort(this.state.arr, this.state.highlights);
    this.cleanup = setInterval(() => {
      this.setState(this.state);
      if (bubbleSorter.next().done) {
        shuffle(this.state.arr);
        bubbleSorter = bubbleSort(this.state.arr, this.state.highlights);
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
        <Link to='/sort-visualization/bubblesort/'>
          <h3 className={s.title}>Bubble Sort</h3>
        </Link>
        <Bars arr={this.state.arr} highlights={this.state.highlights} />
      </div>
    );
  },
});

export default BubbleSortVisualization;
