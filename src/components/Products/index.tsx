import React, {FC, useEffect} from 'react';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Cards from "../Cards";
import { fetchProducts } from "../../redux/ducks/products";
import { useDispatch } from "react-redux";
import CategoryList from "../CategoryList";

const Products: FC = () => {
  const dispatch = useDispatch()
  const categories = useTypedSelector(state => state.categories.data)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div style={{ position: 'relative' }}>
      <CategoryList />
      {categories.map(category => (
        <Cards key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Products;
