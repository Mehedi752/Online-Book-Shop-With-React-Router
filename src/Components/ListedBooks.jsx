import { useContext } from 'react';
import 'react-tabs/style/react-tabs.css';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import { ReadContext, WishlistContext } from './Root';
import { Link } from 'react-router-dom';
import { CiStar } from "react-icons/ci";

const ListedBooks = () => {
    const {reads} = useContext(ReadContext);
    const {wishlist} = useContext(WishlistContext);

    return (
        <div className='container mx-auto'>
           
            <Tabs>
                <TabList className={'flex'}>
                    <Tab className={"text-[#131313]/80 text-lg font-normal font-['Work Sans'] p-2 border-x border-t border-b-0"}>Mark As Read</Tab>
                    <Tab className={"text-[#131313]/50 text-lg font-normal p-2 border-b border-r font-['Work Sans']"}>Add to Wishlist</Tab>
                </TabList>

                <TabPanel className={"mt-6"}>
                    <div className="flex flex-col gap-6">
                        {reads.length === 0 ? <h3 className="text-2xl font-bold text-center">No Books Marked as Read</h3> : 
                        reads.map((read) => (

                            <div key={read.bookId} className="p-6 rounded-2xl border border-[#131313]/20 flex flex-col justify-center gap-12">
                                <div className="bg-[#f3f3f3] rounded-2xl">
                                    <img src={read.image} alt={read.name} className="w-[134px] h-[166px] mx-auto my-8" />
                                </div>
                                
                                <div>
                                    <div className="mb-6">
                                        {
                                            read.tags.map((tag,idx) => (
                                                <span key={idx} className="border px-3 py-2 rounded-3xl text-[#23be0a] mr-3 text-base font-medium font-['Work Sans']">{tag}</span>
                                            ))
                                        }
                                    </div>
                                    <h4 className="text-2xl font-bold">{read.bookName}</h4>
                                    <p className="text-base text-gray-500 mt-2">by: {read.author}</p>
                                    <div className="border border-dashed my-6"></div>
                                    <div className="flex justify-between">
                                        <p className="">{read.category}</p>
                                        <div className="flex items-center gap-2">
                                            <p className="">{read.rating}</p>
                                            <CiStar className="w-6 h-6"></CiStar>
                                        </div>
                                    </div>

                                    <button className="btn bg-white mx-auto mt-3 shadow-md text-[#23be0a]"><Link
                                    to={`/books/${read.bookId}`}>Explore More</Link></button>
                                </div>
                            </div>

                         ))}
                    </div>
                </TabPanel>

                <TabPanel className={"mt-6"}>
                    <div className="flex flex-col gap-6">
                        {wishlist.length === 0 ? <h3 className="text-2xl font-bold text-center">No Books Added to Wishlist</h3> : 
                        wishlist.map((wish) => (

                            <div key={wish.bookId} className="p-6 rounded-2xl border border-[#131313]/20 flex flex-col justify-center gap-12">
                                <div className="bg-[#f3f3f3] rounded-2xl">
                                    <img src={wish.image} alt={wish.name} className="w-[134px] h-[166px] mx-auto my-8" />
                                </div>
                                
                                <div>
                                    <div className="mb-6">
                                        {
                                            wish.tags.map((tag,idx) => (
                                                <span key={idx} className="border px-3 py-2 rounded-3xl text-[#23be0a] mr-3 text-base font-medium font-['Work Sans']">{tag}</span>
                                            ))
                                        }
                                    </div>
                                    <h4 className="text-2xl font-bold">{wish.bookName}</h4>
                                    <p className="text-base text-gray-500 mt-2">by: {wish.author}</p>
                                    <div className="border border-dashed my-6"></div>
                                    <div className="flex justify-between">
                                        <p className="">{wish.category}</p>
                                        <div className="flex items-center gap-2">
                                            <p className="">{wish.rating}</p>
                                            <CiStar className="w-6 h-6"></CiStar>
                                        </div>
                                    </div>

                                    <button className="btn bg-white mx-auto mt-3 shadow-md text-[#23be0a]"><Link
                                    to={`/books/${wish.bookId}`}>Explore More</Link></button>
                                </div>
                            </div>

                         ))}
                    </div>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default ListedBooks;