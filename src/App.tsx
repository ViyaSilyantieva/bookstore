import React, {useState} from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Account from "./pages/Account/Account";
import Favorites from "./pages/Favorites/Favorites";
import YourCart from "./pages/YourCart/YourCart";
import NewReleasesBooks from "./pages/NewReleasesBooks/NewReleasesBooks";
import SearchPage from "./pages/SearchPage/SearchPage";
import OneBook from "./pages/OneBook/OneBook";
import { SearchParamsContext, useSearchParamsContext } from "./context/searchParams";
import { Context } from "./context/favorite";
import { OneBookContext, useOneBookContext } from "./context/oneBook";

function App() {
    const [context, setContext] = useState([]);
    const searchContextValue = useSearchParamsContext();
    const oneBookValue = useOneBookContext();
    return (
        <BrowserRouter>
            <Context.Provider value={[context, setContext]}>
                <SearchParamsContext.Provider value={searchContextValue}>
                    <OneBookContext.Provider value={oneBookValue}>
                        <div className="App">
                            <Header/>
                            <Routes>
                                <Route path="/" element={<NewReleasesBooks/>}/>
                                <Route path="/account" element={<Account/>}/>
                                <Route path="/favorites" element={<Favorites/>}/>
                                <Route path="/cart" element={<YourCart/>}/>
                                <Route path="/search" element={<SearchPage/>}/>
                                <Route path="/book" element={<OneBook/>}/>
                            </Routes>
                            <Footer/>
                        </div>
                    </OneBookContext.Provider>
                </SearchParamsContext.Provider>
            </Context.Provider>
        </BrowserRouter>
    );
}

export default App;
