import React, { FC } from 'react';
import styles from './ChooseButton.module.scss';

type PropsType = {
  text: string
  onClick: () => void
  active: boolean
}

const ChooseButton: FC<PropsType> = ({ text, onClick, active }) => {

  let buttonClassnames = `${styles.button} `

  if (active) {
    buttonClassnames += styles.active
  }

  return (
    <button onClick={onClick} className={buttonClassnames}>
      {text}
    </button>
  );
};

export default ChooseButton;
