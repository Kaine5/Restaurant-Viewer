import Restaurant from './data/restaurants';
import {shallow} from 'enzyme';
import React from 'react';
import {sortRestaurantsAsc, sortRestaurantsDes} from './helpers';
import Card from './components/Card';
import RestaurantsList from './components/RestaurantsList';


describe('restaurant data', ()=>{
  test('is defined', () => {
    expect(Restaurant).toBeDefined();
  });
  
  test('has restaurants array in it', () => {
    expect(Restaurant.restaurants.length).toBeGreaterThanOrEqual(1);
  }); 


});

describe('restaurants got sorted alphabetically - Ascending', ()=> {
  const sortedArray = sortRestaurantsAsc(Restaurant.restaurants);

  test('the sorted array has the same number of items as the original array', ()=>{
    expect(sortedArray.length).toEqual(Restaurant.restaurants.length);
  });

  test('the sorted array has the right sorting order', () => {
    expect(sortedArray[0].name < sortedArray[1].name).toBeTruthy();
  })
  
  
})

describe('restaurants got sorted alphabetically - Descending', () => {
  const sortedArray = sortRestaurantsDes(Restaurant.restaurants);
  
  test('the sorted array has the same number of items as the original array', ()=>{
    expect(sortedArray.length).toEqual(Restaurant.restaurants.length);
  });

  test('the sorted array has the right sorting order', () => {
    expect(sortedArray[0].name > sortedArray[1].name).toBeTruthy();
  })
  
})

describe('Card component tests', ()=>{
  test('Card component with the first restaurant data got rendered correctly', () => {
    expect(shallow(<Card restaurant={Restaurant.restaurants[0]}/>)).toMatchSnapshot();
  })
})

describe('RestaurantsList tests', ()=>{
  const ascSortedArray = sortRestaurantsAsc(Restaurant.restaurants);
  const desSortedArray = sortRestaurantsDes(Restaurant.restaurants);
  test('Unsorted array of restaurants got rendered correctly', () => {
    expect(shallow(<RestaurantsList restaurants={Restaurant.restaurants} />)).toMatchSnapshot();
  })

  test('Ascending sorted array of restaurants got rendered correctly', () => {
    expect(shallow(<RestaurantsList restaurants={ascSortedArray} />)).toMatchSnapshot();
  })

  test('Descending sorted array of restaurants got rendered correctly', () => {
    expect(shallow(<RestaurantsList restaurants={desSortedArray} />)).toMatchSnapshot();
  })
  
})