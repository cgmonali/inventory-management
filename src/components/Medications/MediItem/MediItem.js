import React, { useContext, useState } from 'react';
import CartContext from '../../../store/cart-context';
import MediItemForm from './MediItemForm';
import classes from './MediItem.module.css';

const MediItem = (props) => {
  const cartCtx = useContext(CartContext);
  

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {

   

    // Pass the updated remaining amount to the cart
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      // Updated remaining amount
    });
  };
  

  return (
    <div className={classes.container}>
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}
        </div>
        
        
      </div>
      <div>

      <MediItemForm
              id={props.id}
              onAddToCart={addToCartHandler}
          
              min={1}
              max={1}
              default={1}
              value={ <div>add 1 item</div> }
            />
            <MediItemForm
              id={props.id}
              onAddToCart={addToCartHandler}
        
              min={2}
              max={2}
              default={2}
              value={ <div>add 2 item</div> }
            />
            <MediItemForm
              id={props.id}
              onAddToCart={addToCartHandler}
            
              min={3}
              max={3}
              default={3}
              value={ <div>add 3 item</div> }
            />




        {/* {remainingAmount > 0 ? (
          <>
            <MediItemForm
              id={props.id}
              onAddToCart={addToCartHandler}
              remaining={remainingAmount}
            />
            <p>Remaining: {remainingAmount}</p>
          </>
        ) : (
          <p>Out of Stock</p>
        )} */}
      </div>
    </li></div>
  );
};

export default MediItem;
