import React from "react";
import { actionType } from "@constants";
import { ButtonStyled } from './styled';

export const Button: React.FC<{
  title: string;
  type: 'add'| 'remove' | 'edit';
  onClick: () => void;
}> = ({ type, title, ...props }): JSX.Element => {
  return (
    <ButtonStyled {...props} renderType={type}>
      {title}
    </ButtonStyled >
  );
}