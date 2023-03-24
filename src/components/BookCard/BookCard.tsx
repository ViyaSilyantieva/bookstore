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


const BookCard = ({title, subtitle, price, image, url}: IBookCard) => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img className={
                    price > "$45.00" ? styles.backgroundGreen : 
                    price > "$30.00" ? styles.backgroundPurple : 
                    price > "$15.00" ? styles.backgroudBlue : styles.backgroundOrange} src={image}/>
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