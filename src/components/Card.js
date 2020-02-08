import React from 'react';
import "../styles/Card.scss";


//This component receive a restaurant object as a prop and returns a card with the restaurant's inforamtion.
const Card = ({restaurant}) => {

    const {name, description, image, delivery_price, currency, tags} = restaurant;

    return (
       <div className="Card">

           <div className="image-container">
            <img src={image} alt={name} />
           </div>

           <div className="card-content">
               <div className="card-content-left top"> 
                    <h3>{name}</h3>
                </div>

                <div className="card-content-right top">
                    <h4>{`${delivery_price/100} ${currency}`}</h4>
                </div>

                <div className="card-content-left top">
                    <p>{description}</p>
                </div>

                <div className="card-content-right bottom">
                    <p>{tags.length > 0 && `#${tags.join(", #")}`}</p> 
                </div>
           </div>
       </div>
    )
};

export default Card;