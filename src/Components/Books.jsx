import { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Books = () => {
    
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const fetchBooks = async () => {
            const res = await fetch("../../data/booksData.json");
            const data = await res.json();
            setBooks(data);
        }
        fetchBooks();
    }, []);
    // console.log(books);

    return (
        <div className="container mx-auto mt-12">
            <h3 className="text-3xl font-bold text-center mb-6">Books</h3>
            <div className="grid grid-cols-1  lg:grid-cols-3 gap-6">
                {
                    books.map((book) => (
                        <div key={book.bookId} className="p-6 rounded-2xl border border-[#131313]/20 flex flex-col justify-center gap-12">

                            <div className="bg-[#f3f3f3] rounded-2xl">
                                <img src={book.image} alt={book.name} className="w-[134px] h-[166px] mx-auto my-8" />
                            </div>

                            <div>
                                <div className="mb-6">
                                    {
                                        book.tags.map((tag,idx) => (
                                            <span key={idx} className="border px-3 py-2 rounded-3xl text-[#23be0a] mr-3 text-base font-medium font-['Work Sans']">{tag}</span>
                                        ))
                                    }
                                </div>

                                <h4 className="text-2xl font-bold">{book.bookName}</h4>
                                <p className="text-base text-gray-500 mt-2">by: {book.author}</p>

                                <div className="border border-dashed my-6"></div>

                                <div className="flex justify-between">
                                    <p className="">{book.category}</p>
                                    <div className="flex items-center gap-2">
                                        <p className="">{book.rating}</p>
                                        <CiStar className="w-6 h-6"></CiStar>
                                    </div>
                                </div>

                                <button className="btn bg-white mx-auto mt-3 shadow-md text-[#23be0a]"><Link
                                to={`/books/${book.bookId}`}>Explore More</Link></button>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Books;