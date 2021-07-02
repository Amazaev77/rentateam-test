import React, { FC } from 'react';
import styles from './Category.module.scss';
import { Link } from 'react-scroll'

export type CategoryType = {
  id: number,
  name: string,
  products: any[]
}

type PropsType = {
  category: CategoryType,
  selected: number,
  setSelected: (id: number) => void
}

const Category: FC<PropsType> = ({ category, selected, setSelected }) => {

  let classNames = `${styles.category} `

  if (selected === category.id) {
    classNames += styles.active
  }

  const handleClick = () => {
    setSelected(category.id)
  }

  return (
    <Link onClick={handleClick} className={classNames} to={category.name} smooth >
      <span style={{ minWidth: category.name.length > 9 ? 92 : '' }}>
        {category.name}
      </span>
    </Link>
  );
};

export default Category;
