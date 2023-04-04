import { log } from "console";
import { postApi } from "..";

export interface IBookList {
    total: string;
    page: string;
    books: [{
        title: string;
        subtitle: string;
        isbn13: string;
        price: string;
        image: string;
        url: string;
        favorite: boolean;
    }]
};

export interface IBook {
    error: string;
    title: string;
    subtitle: string;
    authors: string;
    publisher: string;
    isbn10: string;
    isbn13: string;
    pages: string;
    year: string;
    rating: string;
    desc: string;
    price: string;
    image: string;
    url: string;
    pdf: {
            Chapter2: string;
            Chapter5: string;
        }
}

export const getBookList = async (): Promise<IBookList> => {
    const response = await postApi.get("/new");
    return response.data;
};

export const getAllBookList = async (
    title: string = "",
    page: number = 0,
): Promise<IBookList> => {
    let searchParams = "";
    if (title) {
        searchParams += `${title}`;
    } else searchParams += "mongodb";
    const response = await postApi.get(`/search/${searchParams}/${page}`);
    return response.data;
};

export const getOneBook = async (
    isbn13: string = "",
): Promise<IBook> => {
    const response = await postApi.get(`/books/${isbn13}`);
    console.log(response);
    return response.data;
};