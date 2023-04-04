import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Favorite.module.scss";
import { Context } from "../../context/favorite";
import BookCardFavorite from "../../components/BookCardFavorite/BookCardFavorite";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import back from "../../image/Icon-Arrow-Left.svg"

const Favorites = () => {

    const [context, setContext] = useContext(Context)
    const navigate = useNavigate()


    const clearContext = Object.values(context.reduce((acc: any, cur: any)=>Object.assign(acc,{[cur.image]:cur}),{}))

    if(clearContext.length > 0) {
    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={() => navigate("/")}><img src={back}/></button>
            <p className={styles.title}>FAVORITES</p>
            <div>{clearContext.map((item: any) => <BookCardFavorite
                title={item.title}
                image={item.image}
                subtitle={item.subtitle}
                price={item.price}
                key={item.image}
                isbn13={item.isbn13}
            />)}
            </div>
        </div>
    )} else return (
        <div className={styles.container}>
            <button className={styles.button} onClick={() => navigate("/")}><img src={back}/></button>
            <p className={styles.title}>FAVORITES</p>
            <div><ErrorMessage/></div>
        </div>
    ) 
};


export default Favorites;