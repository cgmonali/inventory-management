import classes from './CartItem.module.css';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';
const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
     
        <button onClick={props.onRemove}>−</button>
        {props.remaining >0 ?<button onClick={props.onAdd}>+</button>: <p>out of stock</p> }
      </div>
    </li>
  );
};

export default CartItem;