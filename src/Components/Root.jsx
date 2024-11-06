import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { createContext, useState } from "react";
export const ReadContext = createContext();


const Root = () => {
    const [reads,setReads] = useState([]);
    return (
        <ReadContext.Provider value={{reads,setReads}}>
            <div>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </ReadContext.Provider>
    );
};

export default Root;