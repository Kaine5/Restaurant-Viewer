import React, { useState } from 'react';
import {restaurants} from '../data/restaurants';
import {sortRestaurantsAsc, sortRestaurantsDes} from '../helpers';
import RestaurantsList from './RestaurantsList';
import '../styles/App.scss';

function App() {

  const [sortState, setSortState] = useState("default");
  const [currentSortedArray, setCurrentSortedArray] = useState(restaurants);

  //This function is an event handler for the sort button.
  //It will set new state for sortState and currentSortedArray.
  //Can't be changed back to unsorted state with this function.
  const onSortButtonClick = () => {
    if (sortState === "default" || sortState === "des") {
      setSortState("asc");
      setCurrentSortedArray(sortRestaurantsAsc(restaurants));
    } else {
      setSortState("des");
      setCurrentSortedArray(sortRestaurantsDes(restaurants));
    }
  }
  //This function is an event handler for the sort cancel button.
  //It will set the states for sortState and currentSortedArray to default and unsorted.
  const onResetButtonClick = () => {
    setSortState("default");
    setCurrentSortedArray(restaurants);
  }

  return (
    <div className="App">
      <div className="buttons">
        <button className={`sort-button ${sortState}`} onClick={onSortButtonClick}>Sort alphabetically</button>
        {/* If the list is sorted, the cancel button will be shown and vice versa */}
        {sortState !== "default" && <button className="sort-button" onClick={onResetButtonClick}>Cancel</button>}
      </div>
      <RestaurantsList restaurants={currentSortedArray} />
    </div>
  );
}

export default App;
