import React, {useContext, useState} from "react";
import styles from "./BookCard.module.scss";
import { Context } from "../../context/favorite";
import { useBookContext } from "../../context/oneBook";
import { useNavigate } from "react-router-dom";

export interface IBookCard {
    title: string;
    subtitle: string;
    isbn13?: string;
    price: string;
    image: string;
    url?: string;
};

const BookCard = ({title, subtitle, price, image, isbn13}: IBookCard) => {
    
    const [context, setContext] = useContext(Context)
    const [button, setButton] = useState(false)
    const {id, getId} = useBookContext()
    const navigate = useNavigate()

    const getContext = (e: React.MouseEvent) => {
        e.stopPropagation()
        e.preventDefault()
        context.push({title, subtitle, price, image, isbn13})
        setButton(!button)
    }

    const getIsbn = () => {
        getId?.(`${isbn13}`)
        navigate("/book")
    }

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
        <div className={styles.container} onClick={getIsbn}>
            <div className={styles.image}>
                <img className={changeBackground()} src={image}/>
            </div>
            <div>
                <p className={styles.title}>{title}</p>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
            <div className={styles.rating}>
                <p className={styles.price}>{price}</p>
                <button disabled={button ? true : false} className={button ? styles.buttonAdd : styles.button} onClick={getContext}>ADD TO FAVORITE</button>
            </div>
        </div>
    )
};

export default BookCard;