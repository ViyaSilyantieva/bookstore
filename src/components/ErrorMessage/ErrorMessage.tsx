import React from "react";
import styles from "./ErrorMessage.module.scss";


const ErrorMessage = () => {
    return (
        <div className={styles.containerError}>
            <h2 className={styles.titleError}>Can't find any books</h2>
        </div>
    )
};

export default ErrorMessage;