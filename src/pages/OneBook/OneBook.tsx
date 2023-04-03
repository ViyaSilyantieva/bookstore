import React, {useState, useEffect} from "react";
import { useBookContext } from "../../context/oneBook";
import BookInfo from "../../components/BookInfo/BookInfo";
import { IBook, getOneBook } from "../../api/post/post";
import styles from "./OneBook.module.scss";
import Subscribe from "../../components/Subscribe/Subscribe";
import BookCard from "../../components/BookCard/BookCard";
import { IBookList, getBookList } from "../../api/post/post";
import { useNavigate } from "react-router-dom";
import back from "../../image/Icon-Arrow-Left.svg";


const OneBook = () => {
    const[data, setData] = useState<IBookList | undefined>(undefined)
    const [post, setPost] = useState<IBook | undefined>(undefined)
    const {id} = useBookContext()
    const navigate = useNavigate()

    useEffect (() => {
        (async () => {
            const post = await getOneBook(id);
            setPost(post)
        })();
    }, [id])

    useEffect(() => {
        (async () => {
            const response = await getBookList()
            setData(response)
        })();
    }, [])

    if(post?.isbn13 === id && post) {
    return (
        <div className={styles.containerContent}>
            <div>
                <button className={styles.buttonBack} onClick={() => navigate("/")}><img src={back}/></button>
            </div>
            <div>{<BookInfo
                title={post.title}
                image={post.image}
                authors={post.authors}
                publisher={post.publisher}
                rating={post.rating}
                price={post.price}
                pages={post.pages}
                desc={post.desc}
                year={post.year}
                url={post.url}
            />}
            </div>
            <div><Subscribe/></div>
            <p className={styles.subtitle}>SIMILAR BOOKS</p>
            <div className={styles.containerBook}>{data ? data.books.slice(16, 19).map(book => <BookCard
                title={book.title}
                subtitle={book.subtitle}
                image={book.image}
                price={book.price}
                key={book.isbn13}
                isbn13={book.isbn13}
            />) : null}</div>
        </div>
    ) 
    } else return null; 
};


export default OneBook;
