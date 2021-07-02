import React, { FC } from 'react';
import styles from './Header.module.scss';
import '../../index.scss';
import burgerIcon from '../../icons/BurgerMenu.svg';
import basketIcon from '../../icons/Basket.svg';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { sendCart } from "../../redux/ducks/cart";
import { showTooltipForInput } from "../../redux/ducks/app";

const Header: FC = () => {
  const dispatch = useDispatch()
  const cartSum = useTypedSelector(state => state.cart.cartSum)

  const streetValue = useTypedSelector(state => state.app.streetInputValue)
  const houseIValue = useTypedSelector(state => state.app.houseInputValue)

  const sendCartHandler = () => {
    if (!streetValue || !houseIValue) {
      dispatch(showTooltipForInput())
    }

    if (cartSum > 0 && streetValue && houseIValue) {
      dispatch(sendCart())
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.squares}>
        <div /><div /><div />
      </div>
      <div>
        <img src={burgerIcon} alt="burger"/>
      </div>
      <div>
        <div onClick={sendCartHandler} className={styles.basket}>
          {cartSum} ₽
          <img src={basketIcon} alt="basket" />
        </div>
      </div>
    </header>
  );
};

export default Header;

