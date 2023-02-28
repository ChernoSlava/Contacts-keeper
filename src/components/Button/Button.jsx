import React from "react";
import { ButtonStyled } from './styled';

export const Button = ({ type, title, ...props }) => {
  return (
    <ButtonStyled {...props} renderType={type}>
      {title}
    </ButtonStyled >
  );
}