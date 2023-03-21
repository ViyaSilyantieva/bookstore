import React, {useState} from "react";
import styles from "./ButtonFavorite.module.scss";
import { useNavigate } from "react-router-dom";
import heart from "../../image/heart.svg";
import favoriteact from "../../image/favoriteact.svg";

const ButtonFavorite = () => {

    const navigate = useNavigate()
    const[active, setActive] = useState(false)

    const handleButtonClick = () => {
        navigate("/favorites")
        setActive(!active)
    }


    return (
        <div>
            <button onClick={handleButtonClick} className={styles.buttonFavorite}><img src={active? favoriteact : heart}/></button>
        </div>
    )
};

export default ButtonFavorite;