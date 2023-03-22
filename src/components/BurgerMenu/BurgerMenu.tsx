import React, {useState} from "react";
import styles from "./BurgerMenu.module.scss";
import menu from "../../image/menu.svg";
import openmenu from "../../image/openmenu.svg";




const BurgerMenu = () => {

    const[active, setActive] = useState(false)


    return (
        <div onClick={()=>setActive(!active)}>
            <button className={styles.menu}><img src={active ? openmenu : menu}/></button>
        </div>
    )
};

export default BurgerMenu;