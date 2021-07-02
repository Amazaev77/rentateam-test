import React, { FC, useState } from 'react';
import styles from './ChooseButtons.module.scss';
import ChooseButton from "./ChooseButton";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { switchDeliveryActive } from "../../redux/ducks/app";

const ChooseButtons: FC = () => {
  const dispatch = useDispatch()

  const [pickupActive, setPickupActive] = useState(false);

  const deliveryActive = useTypedSelector(state => state.app.deliveryActive)


  const handleChangeDeliveryActive = () => {
    if (!deliveryActive) {
      dispatch(switchDeliveryActive())
      setPickupActive(false)
    }
  }

  const handleChangePickupActive = () => {
    if (!pickupActive) {
      setPickupActive(true)
      dispatch(switchDeliveryActive())
    }
  }

  return (
    <div className={styles.root}>
      <div>
        <div className={styles.buttons}>
          <ChooseButton
            text="Доставка"
            active={deliveryActive}
            onClick={handleChangeDeliveryActive}
          />
          <ChooseButton
            text="Самовывоз"
            active={pickupActive}
            onClick={handleChangePickupActive}
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseButtons;
