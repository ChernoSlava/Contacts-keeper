import React from "react";
import styles from './Button.css';

const typeCss = {
    add: styles.Button_add,
    remove: styles.Button_remove,
    edit: styles.Button_edit,
}

export const Button = ({type, title, ...props}) => {
    return (
        <button {...props} className={`${styles.Button} ${typeCss[type] || styles.Button_add}`}>
            {title}
        </button>
    );
}