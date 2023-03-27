import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Account from "./pages/Account/Account";
import Favorites from "./pages/Favorites/Favorites";
import YourCart from "./pages/YourCart/YourCart";
import NewReleasesBooks from "./pages/NewReleasesBooks/NewReleasesBooks";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" element={<NewReleasesBooks/>}/>
                    <Route path="/account" element={<Account/>}/>
                    <Route path="/favorites" element={<Favorites/>}/>
                    <Route path="/cart" element={<YourCart/>}/>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
