import React from "react";
import { ContactListStyled } from './styled'
import { ContactCard } from '../ContactCard';

export const ContactList: React.FC<{
  items: [];
  onRemove: (x: number) => void;
  onEdit: (x: number) => void;
}> = ({ items, onRemove, onEdit }): JSX.Element => {
  return (
    <ContactListStyled>
      {items?.map((x: any) =>
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