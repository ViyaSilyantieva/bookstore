import React, {useState} from "react";
import styles from "./Search.module.scss";
import loupe from "../../image/loupe.svg";
import { useNavigate } from "react-router-dom";
import { useSearchContext } from "../../context/searchParams";


const Search = () => {

    const navigate = useNavigate()

    const {value, getValue} = useSearchContext()

    const search = (e: any) => {
        e.preventDefault()
        navigate("/search")
    }

    return (
        <div>
            <form className={styles.form}>
                <input className={styles.input} type="text" placeholder="Search" value={value} minLength={0} onChange={(e => getValue?.(e.target.value))}/>
                <button className={styles.buttonSearch} onClick={search}><img src={loupe}/></button>
            </form>
        </div>
    )
};


export default Search;