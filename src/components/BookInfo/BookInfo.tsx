import React, {useState} from "react";
import styles from "./BookInfo.module.scss";
import back from "../../image/Icon-Arrow-Left.svg";
import { useNavigate } from "react-router-dom";
import Tabs from "../Tabs/Tabs";
import facebook from "../../image/facebook.svg";
import twitter from "../../image/twitter.svg";
import point from "../../image/more-horizontal.svg";


interface IBookInfo {
    title: string;
    authors: string
    publisher: string;
    isbn13?: string;
    pages: string;
    year: string;
    rating: string;
    desc: string;
    price: string;
    image: string;
    url?: string | undefined;
    pdf?: {
            Chapter2: string;
            Chapter5: string;
        }
}
const tabs = [{
    tab: "Description", 
},
{
    tab: "Authors",

},
{
    tab: "Reviews",
}
];


const BookInfo = ({title, authors, publisher, isbn13, pages, year, rating, desc, price, image, url}: IBookInfo) => {

    const [activeTab, setActiveTab] = useState(0)

    function changeBackground() {
        if (price > "$45.00") {
            return styles.backgroundGreen;
        } else if (price > "$30.00") {
            return styles.backgroundPurple;
        } else if (price > "$15.00") {
            return styles.backgroundBlue
        } else return styles.backgroundOrange
    };

    return (
        <div className={styles.container}>
            <div>
                <div>
                    <div>
                        <p className={styles.title}>{title}</p>
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <div>
                        <img className={changeBackground()} src={image}/>
                    </div>
                    <div className={styles.containerInfo}>
                        <div className={styles.containerText}>
                            <div>
                                <p className={styles.price}>{price}</p>
                                <p className={styles.text}>Authors</p>
                                <p className={styles.text}>Publisher</p>
                                <p className={styles.text}>Pages</p>
                            </div>
                            <div>
                                <p className={styles.raiting}>{rating}</p>
                                <p className={styles.value}>{authors}</p>
                                <p className={styles.value}>{publisher}, {year}</p>
                                <p className={styles.value}>{pages}</p>
                            </div>
                        </div>
                        <div className={styles.containerButton}>
                            <button className={styles.button}>ADD TO CART</button>
                            <a className={styles.link} href={url} target="_blank">More detail</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.tabs}>{tabs.map((tab, index) => (<Tabs
                        title={tab.tab}
                        index={index}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        key={index}
                        />))}</div>
            <div className={styles.containerDescription}>
                <p className={activeTab === 1 || activeTab === 2 ? styles.descriptionNone : styles.description}>{desc}</p>
            </div>
            <div className={styles.containerSocial}>
                <a className={styles.linkSocial} href="https://ru-ru.facebook.com/" target="_blank"><img src={facebook}/></a>
                <a className={styles.linkSocial} href="https://twitter.com/" target="_blank"><img src={twitter}/></a>
                <a href="https://ru.linkedin.com/" target="_blank"><img src={point}/></a>
            </div>
        </div>
    )
};

export default BookInfo;