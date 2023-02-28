import React from "react";
import { InputStyled } from './styled';

export const Input: React.FC<React.HTMLProps<HTMLInputElement>> = ({ type, placeholder, onChange, name, value }) => {
  return (
    <InputStyled
      type={type || 'text'}
      {...type === 'tel'
        ?
        { pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}" }
        :
        {}} placeholder={type === 'tel' ? 'xxx-xxx-xxxx' : placeholder}
      onChange={onChange}
      name={name}
      value={value}
    ></InputStyled>
  );
}
