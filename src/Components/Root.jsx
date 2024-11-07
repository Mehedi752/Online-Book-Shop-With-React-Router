import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { createContext, useState } from "react";
export const ReadContext = createContext();
export const WishlistContext = createContext();



const Root = () => {
    const [reads, setReads] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    return (
        <ReadContext.Provider value={{ reads, setReads }}>
            <WishlistContext.Provider value={{ wishlist, setWishlist }}>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </WishlistContext.Provider>
        </ReadContext.Provider>
    );
};

export default Root;