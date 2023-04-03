import React, {useContext, useState} from "react";

type IOneBook = {
    id?: string;
    getId?: (value: string) => void | undefined;
};

export const OneBookContext = React.createContext<IOneBook>({})

export const useOneBookContext = () => {
    const [id, setId] = useState("")

    const getId = (id: string) => {
        setId(id)
    }

    return {
        id: id,
        getId: getId
    }
};

export const useBookContext = () => useContext(OneBookContext);