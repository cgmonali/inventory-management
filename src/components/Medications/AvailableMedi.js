import Card from '../UI/Card';
import MediItem from './MediItem/MediItem';
import classes from './AvailableMedi.module.css';

import MediListing from './MediListing';
import React, { useState } from 'react';




const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Paracetamol',
    description: 'Fever,body pain....',
    price: 8,
    remaining:4
  },
  {
    id: 'm2',
    name: 'aspirin',
    description: 'pain,inflammation....',
    price: 5,
    remaining:10,
  },
  {
    id: 'm3',
    name: 'Dolo',
    description: 'fever,pain,tired...',
    price: 6,
    remaining:5,
  },
  {
    id: 'm4',
    name: 'Crocin',
    description: 'Cold,cough...',
    price: 6,
    remaining:8,
  },
];

const AvailableMedi = () => {


  const [mealsCount, setMealsCount] = useState(DUMMY_MEALS.length);

  const addMealHandler = (newMeal) => {
    // Add the new meal to the DUMMY_MEALS array
    DUMMY_MEALS.push(newMeal);

    // Increment the mealsCount to generate a unique ID for the next meal
    setMealsCount((prevCount) => prevCount + 1);
  };




  const mealsList = DUMMY_MEALS.map((meal) => (
    <MediItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      remaining={meal.remaining}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
      <MediListing mealsCount={mealsCount} onAddMeal={addMealHandler} />
    </section>
  );
};

export default AvailableMedi;