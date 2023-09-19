import React from 'react';
import { Link } from 'react-router-dom';

const snack3Details = {
  name: "Soda Can",
  price: "$1.00",
  description: "A refreshing carbonated soda.",
  image: "soda-can.jpg",
};

function Snack3() {
  return (
    <div>
      <h2>{snack3Details.name} Details</h2>
      <img src={snack3Details.image} alt={snack3Details.name} />
      <p>Price: {snack3Details.price}</p>
      <p>Description: {snack3Details.description}</p>
      <Link to="/">Go Back to Vending Machine</Link>
    </div>
  );
}

export default Snack3;