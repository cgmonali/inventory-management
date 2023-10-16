import React, { useContext, useState } from 'react';
import CartContext from '../../../store/cart-context';
import MediItemForm from './MediItemForm';
import classes from './MediItem.module.css';

const MediItem = (props) => {
  const cartCtx = useContext(CartContext);
  const [remainingAmount, setRemainingAmount] = useState(props.remaining);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    const updatedAmount = remainingAmount - amount;
    if (updatedAmount < 0) {
      return; // Prevent adding more items than available
    }
    setRemainingAmount(updatedAmount);

    // Pass the updated remaining amount to the cart
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      remaining: props.remaining, // Updated remaining amount
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
        {remainingAmount > 0 ? (
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
        )}
      </div>
    </li></div>
  );
};

export default MediItem;
