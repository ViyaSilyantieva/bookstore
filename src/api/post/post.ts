import { postApi } from "..";

export interface IBookList {
    total: string;
    page: string;
    books: [{
        title: string;
        subtitle: string;
        isbn: string;
        price: string;
        image: string;
        url: string;
    }]
};

export const getBookList = async (): Promise<IBookList> => {
    const response = await postApi.get("/new");
    return response.data;
};
