import React, { FC } from 'react';
import styles from './ItemCard.module.scss';
import AddButton from "./AddButton";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

export type ProductType = {
  "delivery" : boolean,
  "id" : number,
  "img" : string,
  "name" : string,
  "price" : number
}

const ItemCard: FC<{ product: ProductType }> = ({ product }) => {
  const deliveryActive = useTypedSelector(state => state.app.deliveryActive)

  if (deliveryActive && !product.delivery) {
    return null
  }

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={product.img} alt="img" />
        <AddButton product={product} />
      </div>
      <div className={styles.name}>{product.name}</div>
      <div className={styles.price}>{product.price} ₽</div>
    </div>
  );
};

export default ItemCard;
