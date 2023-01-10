import React from "react";
import styles from './ContactList.css';

import { ContactCard } from '../ContactCard';

export const ContactList = ({items}) => {
    return (
        <div className={styles.ContactList}>
            {items?.map((x) => 
                <ContactCard key={x.id} name={x.name} email={x.email} phone={x.phone} type={x.type}/>
                )
            }
        </div>
    );
}