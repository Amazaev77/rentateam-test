import React, { ChangeEvent, FC } from 'react';
import styles from './Input.module.scss';
import Tooltip from "./Tooltip";
import { useTypedSelector } from "../../hooks/useTypedSelector";

type PropsType = {
  id: string,
  value: string,
  onChange: (value: string) => void
  label: string
}

const Input: FC<PropsType> = ({ id, value, onChange, label }) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  const tooltipInputName = useTypedSelector(state => state.app.tooltipInputName)

  return (
    <div>
      <label className={styles.label} htmlFor="street">
        {label}
      </label>
      <div style={{ position: 'relative' }}>
        <input
          type="text" id={id}
          value={value}
          onChange={handleChange}
          className={styles.input}
        />
        {tooltipInputName === label && (
          <Tooltip />
        )}
      </div>
    </div>
  );
};

export default Input;
