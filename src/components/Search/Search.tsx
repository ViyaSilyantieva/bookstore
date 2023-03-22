import React, {useState} from "react";
import styles from "./Search.module.scss";
import loupe from "../../image/loupe.svg";


const Search = () => {

    const [search, setSearch] = useState("")

    const submitValue = () => {
        const value = {
            "search": search,
        }
        console.log(value)
    }

    return (
        <div>
            <form className={styles.form}>
                <input className={styles.input} type="text" placeholder="Search" onChange={(e => setSearch(e.target.value))}/>
                <button className={styles.buttonSearch} onClick={submitValue}><img src={loupe}/></button>
            </form>
        </div>
    )
};


export default Search;