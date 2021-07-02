import React, { FC } from 'react';
import styles from './Cards.module.scss';
import Container from "../Container";
import ItemCard from "./ItemCard";
import { CategoryType } from "../CategoryList/Category";
import { useTypedSelector } from "../../hooks/useTypedSelector";


const Cards: FC<{ category: CategoryType }> = ({ category }) => {
  const products = useTypedSelector(state => state.products.data.filter(
    product => category?.products?.some(productId => product.id === productId
  )))

  const loading = useTypedSelector(state => state.products.loading)

  if (category.products === undefined) {
    return null
  }

  if (loading) {
    return null
  }

  return (
    <section id={category.name} className={styles.section}>
      <Container>
      <div className={styles['category-name']}>{category.name}</div>
        <div className={styles['cards-group']}>
          {products.map(product => (
            <ItemCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Cards;
