import React from 'react';
import Bars from './Bars';
import { Link } from 'react-app';
import { randIn, shuffle, swap } from './utils';
import s from './Visualization.css';

function *quickSort(arr, highlights) {
  const stack = [{ l: 0, h: arr.length - 1 }];
  while (stack.length) {
    let { l, h } = stack.pop();
    yield;
    if (l < h) {
      highlights.smallest = l;
      highlights.largest = h;
      swap(arr, randIn(l, h), h);
      yield;

      let pivotIndex = l;
      let pivotValue = arr[h];
      highlights.i = pivotIndex;
      for (let j = l; j < h; j++) {
        highlights.j = j;
        yield;
        if (arr[j] <= pivotValue) {
          swap(arr, pivotIndex, j);
          yield;
          pivotIndex++;
          highlights.i = pivotIndex;
        }
      }

      swap(arr, pivotIndex, h);
      yield;
      stack.push({ l: pivotIndex + 1, h: h });
      stack.push({ l: l, h: pivotIndex - 1 });
    }
  }
}

const QuickSortVisualization = React.createClass({
  componentDidMount() {
    let quickSorter = quickSort(this.state.arr, this.state.highlights);
    this.cleanup = setInterval(() => {
      this.setState(this.state);
      if (quickSorter.next().done) {
        shuffle(this.state.arr);
        quickSorter = quickSort(this.state.arr, this.state.highlights);
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
        <Link to='/sort-visualization/quicksort/'>
          <h3 className={s.title}>Quick Sort</h3>
        </Link>
        <Bars arr={this.state.arr} highlights={this.state.highlights} />
      </div>
    );
  },
});

export default QuickSortVisualization;
