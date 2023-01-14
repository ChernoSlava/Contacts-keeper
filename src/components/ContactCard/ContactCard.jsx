import React from "react";
import { Button } from "../Button";
import styles from './ContactCard.css';

export const ContactCard = ({ name, email, phone, type, onRemove, onEdit }) => {
    return (
        <div className={styles.ContactCard}>
            <div className={styles.ContactCard__header}>
                <div className={styles.ContactCard__name}>{name}</div>
                <div className={styles.ContactCard__type}>{type}</div>
            </div>
            <div className={styles.ContactCard__email}>{email}</div>
            <div className={styles.ContactCard__phone}>{phone}</div>
            <div className={styles.ContactCard__buttons}>
                <Button type='edit' title='Edit' onClick={onEdit}/>
                <Button type='remove' title='Remove'onClick={onRemove}/>
            </div>
        </div>
    );
}