import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { fetchCategories } from "../../redux/ducks/categories";
import styles from './CategoryList.module.scss';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Category from "./Category";
import Container from "../Container";

const Categories: FC = () => {
  const dispatch = useDispatch()

  const categories = useTypedSelector(state => state.categories.data)

  const [selected, setSelected] = useState(1)

  useEffect(() => {
    dispatch(fetchCategories())
  },[dispatch])

  const loading = useTypedSelector(state => state.categories.loading)

  if (loading) {
    return null
  }

  return (
    <div className={styles.sticky}>
      <Container>
        <div className={styles.categories}>
          {categories.map(category => (
            <Category
              key={category.id.toString()}
              category={category}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Categories;
