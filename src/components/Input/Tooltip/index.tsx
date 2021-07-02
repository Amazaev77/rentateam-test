import React, { FC } from 'react';
import styles from './Tooltip.module.scss';

const Tooltip: FC = () => {
  return (
    <div className={styles.tooltip}>
      <div>Нужно заполнить для оформления доставки</div>
    </div>
  );
};

export default Tooltip;
