import React from "react";
import styles from "./BookCardFavorite.module.scss";
import favheart from "../../image/favheart.svg";

export interface IBookCardFavorite {
    title: string;
    subtitle: string;
    price: string;
    image: string;
    isbn13?: string;
};

const BookCardFavorite = ({title, subtitle, price, image, isbn13}: IBookCardFavorite) => {

    function changeBackground() {
        if (price > "$45.00") {
            return styles.backgroundGreen;
        } else if (price > "$30.00") {
            return styles.backgroundPurple;
        } else if (price > "$15.00") {
            return styles.backgroundBlue
        } else return styles.backgroundOrange
    };

    return (
        <div className={styles.container}>
                <div className={styles.containerCard}>
                    <img className={changeBackground()} src={image}></img>
                    <div className={styles.contsinerText}>
                        <div>
                            <p className={styles.title}>{title}</p>
                            <p className={styles.subtitle}>{subtitle}</p>
                        </div>
                        <div className={styles.containerInfo}>
                            <p className={styles.price}>{price}</p>
                            <button className={styles.button}>ADDED TO FAVORITE</button>
                        </div>
                    </div>
                </div>
                <img src={favheart}></img>
        </div>
    )
};

export default BookCardFavorite;