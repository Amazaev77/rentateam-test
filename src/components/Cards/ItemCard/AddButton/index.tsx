import React, { FC } from 'react';
import styles from './AddButton.module.scss';
import plusIcon from '../../../../icons/plus.svg';
import plusWhiteIcon from '../../../../icons/plus-white.svg';
import minusIcon from '../../../../icons/minus.svg';
import { ProductType } from "../index";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { addItemToCart, minusItemFromCart } from "../../../../redux/ducks/cart";

const AddButton: FC<{ product: ProductType }> = ({ product }) => {
  const dispatch = useDispatch()

  const cartData = useTypedSelector(state => state.cart.cartData)
  const itemCart = cartData.find(item => item.id === product.id)

  const addItemToCartHandler = () => {
    dispatch(addItemToCart(product))
  }

  const minusItemHandler = () => {
    dispatch(minusItemFromCart(product.id, product.price))
  }

  return (
    <div className={styles.root}>
      {itemCart ? (
        <div className={styles.counter}>
          <div onClick={minusItemHandler} className={styles.icon}>
            <img src={minusIcon} alt="minus" />
          </div>
          <span> {itemCart.count} </span>
          <div onClick={addItemToCartHandler} className={styles.icon}>
            <img src={plusWhiteIcon} alt="plus-white" />
          </div>
        </div>
      ) : (
        <div onClick={addItemToCartHandler} className={styles.plus}>
          <img src={plusIcon} alt="plus" />
        </div>
      )}
    </div>
  );
};

export default AddButton;
