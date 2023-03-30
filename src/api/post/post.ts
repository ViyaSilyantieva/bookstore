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

export const getBookList = async (): Promise<IBookList> => {
    const response = await postApi.get("/new");
    return response.data;
};

export const getAllBookList = async (
    title: string = "",
    page: number = 0,
    total: number = 0
): Promise<IBookList> => {
    let searchParams = "";
    if (title) {
        searchParams += `${title}`;
    } else searchParams += "mongodb";
    const response = await postApi.get(`/search/${searchParams}/${page}`);
    return response.data;
};
