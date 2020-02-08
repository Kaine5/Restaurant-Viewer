import React from 'react';
import Card from './Card';
import '../styles/RestaurantsList.scss';

//This component takes an array of restaurants and returns a list of cards displaying the restaurants.
const RestaurantsList = ({restaurants}) => {
    return (
        //i is chosen since there is no unique restaurant id, name can be an alternative.
        <div className="restaurants-list">
            {restaurants.map((restaurant, i) => {
               return( 
                    <Card key={i} restaurant={restaurant} />
               );
            })}
        </div>
    )
}

export default RestaurantsList;