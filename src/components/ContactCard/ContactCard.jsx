import React from "react";
import { Button } from "../Button";

import { 
  ContactCardStyled, 
  ContactCardHeader, 
  ContactCardName, 
  ContactCardType, 
  ContactCardEmail, 
  ContactCardPhone, 
  ContactCardButtons 
} from './styled';

export const ContactCard = ({ name, email, phone, type, onRemove, onEdit }) => {
  return (
    <ContactCardStyled>
      <ContactCardHeader>
        <ContactCardName>{name}</ContactCardName>
        <ContactCardType>{type}</ContactCardType>
      </ContactCardHeader>
      <ContactCardEmail>{email}</ContactCardEmail>
      <ContactCardPhone>{phone}</ContactCardPhone>
      <ContactCardButtons>
        <Button type='edit' title='Edit' onClick={onEdit} />
        <Button type='remove' title='Remove' onClick={onRemove} />
      </ContactCardButtons>
    </ContactCardStyled>
  );
}