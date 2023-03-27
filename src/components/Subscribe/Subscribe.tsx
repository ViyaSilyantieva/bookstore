import React from "react";
import styles from "./Subscribe.module.scss";

const Subscribe = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <p className={styles.title}>SUBSCRIBE TO NEWSLETTER</p>
                <p className={styles.subtitle}>Be the first to know about new IT books, upcoming releases, exclusive offers and more</p>
            </div>
            <form className={styles.form}>
                <input className={styles.input} type="email" placeholder="Your email"/>
                <button className={styles.button}>SUBSCRIBE</button>
            </form>
        </div>
    )
};

export default Subscribe;