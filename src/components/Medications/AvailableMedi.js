import Card from '../UI/Card';
import MediItem from './MediItem/MediItem';
import classes from './AvailableMedi.module.css';

import MediListing from './MediListing';
import React, { useEffect, useState } from 'react';




const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'cand1',
    description: '....',
    price: 8,
  
  },
  {
    id: 'm2',
    name: 'candy2',
    description: '....',
    price: 5,
    
  },
  {
    id: 'm3',
    name: 'candy3',
    description: '...',
    price: 6,
    
  },
  {
    id: 'm4',
    name: 'candy4',
    description: '...',
    price: 6,
   
  },
];

const AvailableMedi = () => {


  const [mealsCount, setMealsCount] = useState(DUMMY_MEALS.length);
 const [rmeals,setRmeals]=useState([]);
  const addMealHandler = (newMeal) => {
    // Add the new meal to the DUMMY_MEALS array
    DUMMY_MEALS.push(newMeal);

    // Increment the mealsCount to generate a unique ID for the next meal
    setMealsCount((prevCount) => prevCount + 1);
  };


  useEffect( () => {

    async function fetchData(){
   try {
      const response = await fetch(`https://crudcrud.com/api/2f68e642bf884269a2eac1de5a0b36ea/products1`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setRmeals(data)
        setMealsCount((prevCount)=> prevCount+data.length);
        console.log(rmeals);

        // Process the data as needed
      } else {
        console.error('Error fetching data');
      }
    } catch (error) {
      console.error('Network error:', error);
    }}

    fetchData();
  }, []);
  

  const mealsList2 = rmeals.map((meal) => (
    <MediItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  
 


  const mealsList = DUMMY_MEALS.map((meal) => (
    <MediItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
     
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
        <ul>{mealsList2}</ul>
        
      </Card>
      <MediListing mealsCount={mealsCount} onAddMeal={addMealHandler} />
    </section>
  );
};

export default AvailableMedi;