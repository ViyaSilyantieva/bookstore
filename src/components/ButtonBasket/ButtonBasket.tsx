import React, {useState} from "react";
import styles from "./ButtonBasket.module.scss";
import basket from "../../image/basket.svg";
import { useNavigate } from "react-router-dom";
import basketact from "../../image/basketact.svg";


const ButtonBasket = () => {
    const navigate = useNavigate()
    
    const[active, setActive] = useState(false)
    const handleButtonClick = () => {
        navigate("/cart")
        setActive(!active)
    }
    return (
        <div>
            <button className={styles.buttonBasket} onClick={handleButtonClick}><img src={active? basketact : basket}/></button>
        </div>
    )
};

export default ButtonBasket;