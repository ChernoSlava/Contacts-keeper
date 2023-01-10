import React from "react";

import styles from './Input.css'

export const Input = ({type, placeholder, onChange}) => {
    return (
        
        <input className={styles.Input} type={type || 'text'} {...type === 'tel' ? {pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}"} : {}} placeholder={placeholder} onChange={onChange}></input>
    );
}