import React from 'react';
import { Link } from 'react-router-dom';

const snack2Details = {
    name: "Potato Chips",
    price: "$1.25",
    description: "Crispy and salty potato chips.",
    image: "potato-chips.jpg",
  };
  

  function Snack2() {
    return (
      <div>
        <h2>{snack2Details.name} Details</h2>
        <img src={snack2Details.image} alt={snack2Details.name} />
        <p>Price: {snack2Details.price}</p>
        <p>Description: {snack2Details.description}</p>
        <Link to="/">Go Back to Vending Machine</Link>
      </div>
    );
  }
  
  export default Snack2;