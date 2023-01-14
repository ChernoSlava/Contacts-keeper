import React, { useEffect, useState } from "react";
import styles from './ContactForm.css';

import { Button } from '../Button';
import { Input } from '../Input';

export const ContactForm = ({ onAdd, current, clearCurrent, onEdit }) => {

    const [values, setValues] = useState({type: 'Personal', name: '', email: '', phone: ''});
    
    useEffect(() => {
        if (current){ 
            setValues({...current});
        } else {
            setValues({type: 'Personal', name: '', email: '', phone: ''})
        }
    }, [current]);

    const onChange = (e) => setValues({...values, [e.target.name]: e.target.value});

    return (
        <form className={styles.ContactForm} onSubmit={(e) => {e.preventDefault();}}>
            <h1 className={styles.ContactForm__header}>{current? 'Edit contact' : 'Add contact'}</h1>
            <Input placeholder='name' type='text' name='name' onChange={onChange} value={values.name} />
            <Input placeholder='email' type='email' name='email' onChange={onChange} value={values.email}/>
            <Input placeholder='phone' type='tel' name='phone' onChange={onChange} value={values.phone}/>
            <div className={styles.ContactType}>
                <h2>Contact type</h2>
                <fieldset className={styles.ContactType__fieldset}>
                    <div className={styles.ContactType__radio}>
                        <span>Personal</span><input type="radio" value="Personal" checked={values.type === 'Personal'} name="type" onChange={onChange}/>
                    </div>
                    <div className={styles.ContactType__radio}>
                        <span>Professional</span><input type="radio" value="Professional" checked={values.type === 'Professional'} name="type" onChange={onChange}/>
                    </div>
                </fieldset>
            </div>
            
            <Button 
                type='add' 
                title={current? 'Edit contact' : 'Create contact'} 
                onClick={() => {
                    if (!current) {
                        onAdd(values);
                    } else {
                        onEdit(values);
                    }  
                    clearCurrent();}}/>
        </form>
    );
}