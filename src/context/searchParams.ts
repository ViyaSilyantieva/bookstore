import React, {useContext, useState} from "react";

type ISearchParamsContext = {
    value?: string;
    getValue?: (value: string) => void | undefined;
};


export const SearchParamsContext = React.createContext<ISearchParamsContext>({})

export const useSearchParamsContext = () => {
    const [value, setValue] = useState("")

    const getValue = (value: string) => {
        setValue(value)
    }

    return {
        value: value,
        getValue: getValue
    }
};


export const useSearchContext = () => useContext(SearchParamsContext);