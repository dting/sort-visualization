import React from 'react';
import Bars from './Bars';
import { Link } from 'react-app';
import { shuffle, swap } from './utils';
import s from './Visualization.css';

function *selectionSort(arr, highlights) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = arr[i];
    let smallestIndex = i;

    highlights.i = i;
    highlights.smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      highlights.j = j;
      yield;
      if (arr[j] <= smallest) {
        smallest = arr[j];
        smallestIndex = j;
        highlights.smallest = j;
      }
    }

    swap(arr, smallestIndex, i);
    yield;
  }
}

const SelectionSortVisualization = React.createClass({
  componentDidMount() {
    let selectionSorter = selectionSort(this.state.arr, this.state.highlights);
    this.cleanup = setInterval(() => {
      this.setState(this.state);
      if (selectionSorter.next().done) {
        shuffle(this.state.arr);
        selectionSorter = selectionSort(this.state.arr, this.state.highlights);
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
        <Link to='/sort-visualization/selectionsort/'>
          <h3 className={s.title}>Selection Sort</h3>
        </Link>
        <Bars arr={this.state.arr} highlights={this.state.highlights} />
      </div>
    );
  },
});

export default SelectionSortVisualization;
