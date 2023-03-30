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
import { SearchParamsContext, useSearchParamsContext } from "./context/searchParams";


function App() {

    const searchContextValue = useSearchParamsContext();
    return (
        <BrowserRouter>
            <SearchParamsContext.Provider value={searchContextValue}>
                <div className="App">
                    <Header/>
                    <Routes>
                        <Route path="/" element={<NewReleasesBooks/>}/>
                        <Route path="/account" element={<Account/>}/>
                        <Route path="/favorites" element={<Favorites/>}/>
                        <Route path="/cart" element={<YourCart/>}/>
                        <Route path="/search" element={<SearchPage/>}/>
                    </Routes>
                    <Footer/>
                </div>
            </SearchParamsContext.Provider>
        </BrowserRouter>
    );
}

export default App;
