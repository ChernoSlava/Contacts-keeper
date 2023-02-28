import React, { useEffect, useState } from "react";
import {
  ContactFormStyled, 
  ContactFormHeader, 
  ContactType, 
  ContactTypeFieldset, 
  ContactTypeRadio
} from './styled';

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
        <ContactFormStyled onSubmit={(e) => {e.preventDefault();}}>
            <ContactFormHeader>{current? 'Edit contact' : 'Add contact'}</ContactFormHeader>
            <Input placeholder='name' type='text' name='name' onChange={onChange} value={values.name} />
            <Input placeholder='email' type='email' name='email' onChange={onChange} value={values.email}/>
            <Input placeholder='phone' type='tel' name='phone' onChange={onChange} value={values.phone}/>
            <ContactType>
                <h2>Contact type</h2>
                <ContactTypeFieldset>
                    <ContactTypeRadio>
                        <span>Personal</span><input type="radio" value="Personal" checked={values.type === 'Personal'} name="type" onChange={onChange}/>
                    </ContactTypeRadio>
                    <ContactTypeRadio>
                        <span>Professional</span><input type="radio" value="Professional" checked={values.type === 'Professional'} name="type" onChange={onChange}/>
                    </ContactTypeRadio>
                </ContactTypeFieldset>
            </ContactType>
            
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
        </ContactFormStyled>
    );
}