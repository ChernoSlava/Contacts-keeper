import React from "react";
import styles from './ContactForm.css';

import { Button } from '../Button';
import { Input } from '../Input';

export const ContactForm = () => {
    return (
        <form className={styles.ContactForm}>
            <h1 className={styles.ContactForm__header}>Add contact</h1>
            <Input placeholder='name' type='text'/>
            <Input placeholder='email' type='email'/>
            <Input placeholder='phone' type='tel'/>
            <div className={styles.ContactType}>
                <h2>Contact type</h2>
                <fieldset className={styles.ContactType__fieldset}>
                    <div className={styles.ContactType__radio}>
                        <span>Personal</span><input type="radio" value="Personal" checked={true} name="type" />
                    </div>
                    <div className={styles.ContactType__radio}>
                        <span>Professional</span><input type="radio" value="Professional" name="type" />
                    </div>
                </fieldset>
            </div>
            
            <Button type='add' title='Create contact'/>
        </form>
    );
}