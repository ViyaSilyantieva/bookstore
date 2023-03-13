import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.container}>
            <p className={styles.text}>©2022 Bookstore</p>
            <p className={styles.text}>All rights reserved</p>
        </div>
    )
};

export default Footer;