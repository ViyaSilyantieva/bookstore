import React from "react";
import styles from "./BookCard.module.scss";
import stars from "../../image/stars.svg";



interface IBookCard {
    title: string;
    subtitle: string;
    isbn13?: string;
    price: string;
    image: string;
    url?: string;
};


const BookCard = ({title, subtitle, price, image}: IBookCard) => {
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
            <div className={styles.image}>
                <img className={changeBackground()} src={image}/>
            </div>
            <div>
                <p className={styles.title}>{title}</p>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
            <div className={styles.rating}>
                <p className={styles.price}>{price}</p>
                <img src={stars}/>
            </div>
        </div>
    )
};


export default BookCard;