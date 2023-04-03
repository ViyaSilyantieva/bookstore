import React, {useState} from "react";
import styles from "./Header.module.scss";
import ButtonUser from "../ButtonUser/ButtonUser";
import ButtonFavorite from "../ButtonFavorute/ButtonFavorite";
import ButtonBasket from "../ButtonBasket/ButtonBasket";
import logo from "../../image/logo.svg";
import Search from "../Search/Search";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useNavigate } from "react-router-dom";



const Header = () => {
    const navigate = useNavigate()
    const navigateToMain = (e: React.MouseEvent) => {
        e.preventDefault();
        navigate("/")
    }

    return (
        <div>
            <div className={styles.container}>
                <p onClick={navigateToMain}><img className={styles.logo} src={logo}/></p>
                <div>
                    <Search
                    />
                </div>
                <div className={styles.buttonSection}>
                    <ButtonFavorite/>
                    <ButtonBasket/>
                    <ButtonUser/>
                    <BurgerMenu/>
                </div>
            </div>
        </div>
    )
};

export default Header;