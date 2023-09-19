import React from 'react';
import { Link } from 'react-router-dom';

const snack1Details = {
    name: "Chocolate Bar",
    price: "$1.50",
    description: "A delicious milk chocolate bar.",
    image: "chocolate-bar.jpg",
  };
  

  function Snack1() {
    return (
      <div>
        <h2>{snack1Details.name} Details</h2>
        <img src={snack1Details.image} alt={snack1Details.name} />
        <p>Price: {snack1Details.price}</p>
        <p>Description: {snack1Details.description}</p>
        <Link to="/">Go Back to Vending Machine</Link>
      </div>
    );
  }
  
  export default Snack1;