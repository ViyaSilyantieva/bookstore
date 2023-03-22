import React from "react";
import user from "../../image/user.svg";
import styles from "./ButtonUser.module.scss";
import { useNavigate } from "react-router-dom";


const ButtonUser = () => {

    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() => navigate("/account")} className={styles.buttonUser}><img src={user}/></button>
        </div>
    )
};

export default ButtonUser;