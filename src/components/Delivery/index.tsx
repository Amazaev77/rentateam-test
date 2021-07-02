import React, { FC } from 'react';
import Input from "../Input";
import styles from './Delivery.module.scss';
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { setHouseInputValue, setStreetInputValue } from "../../redux/ducks/app";

const Delivery: FC = () => {
  const dispatch = useDispatch()

  const streetValue = useTypedSelector(state => state.app.streetInputValue)
  const houseIValue = useTypedSelector(state => state.app.houseInputValue)

  const handleChangeStreet = (value: string) => {
    dispatch(setStreetInputValue(value))
  }
  const handleChangeHome = (value: string) => {
    dispatch(setHouseInputValue(value))
  }

  return (
    <div className={styles.delivery}>
      <h1 className={styles.header}>Доставка г.Москва</h1>
      <form className={styles.form}>
        <Input
          id='street'
          value={streetValue}
          label="Улица"
          onChange={handleChangeStreet}
        />
        <Input
          id='home'
          value={houseIValue}
          label="Дом"
          onChange={handleChangeHome}
        />
      </form>
    </div>
  );
};

export default Delivery;
