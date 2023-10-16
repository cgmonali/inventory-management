import React, { useState } from 'react';
import classes from './MediListing.module.css';

const MediListing = (props) => {
  const [tabletName, setTabletName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [remaining, setRemaining] = useState(''); // Add remaining state

  const submitFormHandler = (event) => {
    event.preventDefault();

    // Create a new meal object
    const newMeal = {
      id: `m${props.mealsCount + 1}`,
      name: tabletName,
      description: description,
      price: parseFloat(price),
      remaining: parseFloat(remaining), // Use parseFloat to convert remaining to a number
    };

    // Update DUMMY_MEALS with the new meal
    props.onAddMeal(newMeal);

    // Clear the form
    setTabletName('');
    setDescription('');
    setPrice('');
    setRemaining('');
  };

  return (
    <div className={classes.summary}>
      <div className={classes.container}>
      <form onSubmit={submitFormHandler} >
        <label htmlFor="name">Tablet Name:</label>
        <input
          id="name"
          type="text"
          value={tabletName}
          onChange={(e) => setTabletName(e.target.value)}
        />

        <label htmlFor="description">Description:</label>
        <input
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label htmlFor="remaining">In stock:</label>
        <input
          id="remaining"
          type="number"
          value={remaining}
          onChange={(e) => setRemaining(e.target.value)}
        />

        <button type="submit" className={classes.btn}>Add</button>
      </form>
      </div>
    </div>
  );
};

export default MediListing;
