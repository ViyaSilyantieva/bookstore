import React from "react";
import styles from "./Tabs.module.scss";
import { Link } from "react-router-dom";

interface ITabs {
    title: string;
    index: number;
    activeTab: number;
    setActiveTab: any;
}



const Tabs = ({title, index, setActiveTab, activeTab}: ITabs) => {
    
    const getActiveTab = (e: React.MouseEvent) => {
        setActiveTab(index)
        e.preventDefault()
    }

    return (
        <div className={styles.tabssection}>
            <button onClick={getActiveTab} 
            className={index === activeTab ? styles.tabdisabled : styles.tab}>{title}</button>
        </div>
    );
}

export default Tabs;