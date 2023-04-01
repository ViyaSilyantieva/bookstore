import React, {useEffect, useState} from "react";
import styles from "./SearchPage.module.scss"
import BookCard from "../../components/BookCard/BookCard";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { IBookList } from "../../api/post/post";
import { getAllBookList } from "../../api/post/post";
import { useSearchContext } from "../../context/searchParams";
import prev from "../../image/prev.svg";
import next from "../../image/next.svg";



const SearchPage = () => {

    const [posts, setPosts] = useState<IBookList | undefined>(undefined)
    const [page, setPage] = useState(1)
    const {value} = useSearchContext()


    useEffect (() => {
        (async () => {
            const posts = await getAllBookList(value, page);
            setPosts(posts)
        })();
    }, [value, page])

    const getNextPage = (e: React.MouseEvent) => {
        e.preventDefault()
        if ((Number(posts?.total) / 10) > page)  {    
            setPage(page + 1)
        } else return null;
    };   

    const getPreviousPage = (e: React.MouseEvent) => {
        e.preventDefault()
        if (page > 1){
            setPage(page - 1)
        }
        console.log(e)
    };

    if (posts) {
        return (
            <div className={styles.container}>
                <p className={styles.titleSearch}>'{value?.toUpperCase()}' SEARCH RESULTS</p>
                <p className={styles.subtitleSearch}>Found {posts?.total} books</p>
                <div className={ posts && Number(posts?.total) > 0 ? styles.containerCard : styles.containerError}>
                    {posts && Number(posts?.total) > 0  ? posts.books?.slice(0,9).map(post => 
                    <BookCard
                        title={post.title}
                        subtitle={post.subtitle}
                        image={post.image}
                        price={post.price}
                        key={post.isbn13}
                    />) : <ErrorMessage/>}
                </div>
                <div className={styles.containerButton}>
                    <button onClick={getPreviousPage} className={ page > 1 ? styles.button : styles.buttonNotActive}><img src={prev}/>Prev</button>
                    <button onClick={getNextPage} className={(Number(posts?.total) / 10) > page ? styles.button : styles.buttonNotActive}>Next<img src={next}/></button>
                </div>
            </div>
        )
    } else return null;
};

export default SearchPage;