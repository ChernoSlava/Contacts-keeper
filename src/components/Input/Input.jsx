import React from "react";
import { InputStyled } from './styled';

export const Input = ({ type, placeholder, ...props }) => {
  return (
    <InputStyled 
      type={type || 'text'} 
      {...type === 'tel' 
      ? 
      { pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}" } 
      : 
      {}} placeholder={type === 'tel' ? 'xxx-xxx-xxxx' : placeholder} 
      {...props}
      ></InputStyled>
  );
}