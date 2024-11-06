import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Listed Books</a></li>
                            <li><a>Pages to Read</a></li>
                        </ul>
                    </div>
                    <a className="text-[#131313] text-[28px] font-bold font-['Work Sans']">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <li className="text-[#131313]/80 text-lg font-normal font-['Work Sans']"><NavLink to={"/"}>Home</NavLink></li>
                        <li className="text-[#131313]/80 text-lg font-normal font-['Work Sans']"><NavLink to={"/listed-books"}>Listed Books</NavLink></li>
                        <li className="text-[#131313]/80 text-lg font-normal font-['Work Sans']"><NavLink to={"/pages-to-read"}>Pages to Read</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <a className="btn">Sign In</a>
                    <a className="btn">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;