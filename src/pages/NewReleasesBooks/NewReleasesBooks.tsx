import React, {useState, useEffect} from "react";
import styles from "./NewReleasesBooks.module.scss";
import BookCard from "../../components/BookCard/BookCard";
import { getBookList, IBookList } from "../../api/post/post";
import Subscribe from "../../components/Subscribe/Subscribe";


const NewReleasesBooks = () => {

    const[data, setData] = useState<IBookList | undefined>(undefined)

    useEffect(() => {
        (async () => {
            const response = await getBookList()
            setData(response)
        })();
    }, [])

    if (data) {
        return (
            <div className={styles.container}>
                <p className={styles.title}>NEW RELEASES BOOKS</p>
                <div>
                    <div className={styles.containerCard}>
                        {data.books.slice(0,12).map(book => <BookCard
                            image={book.image}
                            title={book.title}
                            subtitle={book.subtitle}
                            price={book.price}
                            key={book.isbn13}
                        />)}
                    </div>
                </div>
                <div>
                    <Subscribe/>
                </div>
            </div>
        )
    } else return null;
};



export default NewReleasesBooks;