import React, {useState} from "react";
import styles from "./Header.module.scss";
import ButtonUser from "../ButtonUser/ButtonUser";
import ButtonFavorite from "../ButtonFavorute/ButtonFavorite";
import ButtonBasket from "../ButtonBasket/ButtonBasket";
import logo from "../../image/logo.svg";
import Search from "../Search/Search";
import BurgerMenu from "../BurgerMenu/BurgerMenu";



const Header = () => {
    // const [searchResult, setSearchResult] = useState('')

    // const changeSearch = (input: string) => setSearchResult(input)

    return (
        <div>
            <div className={styles.container}>
                <p><img className={styles.logo} src={logo}/></p>
                <div>
                    <Search
                        // changeSearch={changeSearch}
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