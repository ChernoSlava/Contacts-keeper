import React from "react";
import { ContactListStyled } from './styled'
import { ContactCard } from '../ContactCard';

export const ContactList = ({ items, onRemove, onEdit }) => {
  return (
    <ContactListStyled>
      {items?.map((x) =>
        <ContactCard
          key={x.id}
          name={x.name}
          email={x.email}
          phone={x.phone}
          type={x.type}
          onRemove={() => onRemove(x.id)}
          onEdit={() => onEdit(x.id)} />
      )
      }
    </ContactListStyled>
  );
}