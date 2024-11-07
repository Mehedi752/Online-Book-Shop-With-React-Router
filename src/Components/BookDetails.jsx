import { useContext } from 'react';
import { ReadContext, WishlistContext } from './Root';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {

    const { bookId } = useParams();
    const id = parseFloat(bookId);

    const data = useLoaderData();
    const book = data.find((book) => book.bookId === id);
    const { bookName, author, category, review, rating, tags, image, totalPages, publisher, yearOfPublishing } = book;

    const { reads, setReads } = useContext(ReadContext);
    const {wishlist, setWishlist} = useContext(WishlistContext);
    
    const handleMarkAsRead = () => {
        if (reads.find((read) => read.bookId === id)) {
            alert('Already marked as read');
            return;
        }
        setReads([...reads, book]);

    }

    const handleAddToWishlist = () => {
        if (wishlist.find((wish) => wish.bookId === id)) {
            alert('Already added to wishlist');
            return;
        }
        setWishlist([...wishlist, book]);
    }
    // console.log(reads.length);

    return (
        <div className='mt-6 container mx-auto flex gap-12'>
            <div className="bg-[#131313]/5 rounded-2xl p-[74px]">
                <img src={image} alt="" className="w-[425px] h-[564px]" />
            </div>

            <div className="w-1/2">
                <h3 className="text-[#131313] text-[40px] font-bold font-['Playfair Display'] mb-4">{bookName}</h3>
                <p className="text-[#131313]/80 text-xl font-medium font-['Work Sans'] mb-6">By : {author}</p>
                <div className="border mb-4"></div>
                <p className="text-[#131313]/80 text-xl font-medium font-['Work Sans'] mb-4">{category}</p>
                <div className="border mb-6"></div>
                <p className="mb-6"><span className="text-[#131313] text-base font-bold font-['Work Sans']">Review: </span>
                    <span className="text-[#131313]/70 text-base font-normal font-['Work Sans']">{review}</span></p>

                <h3 className="mb-6">
                    <span className="text-[#131313] text-base font-bold font-['Work Sans'] mr-5">Tag</span>{
                        tags.map((tag, idx) => (<span key={idx}
                            className=" text-[#23be0a] mr-3 text-base font-medium font-['Work Sans'] mr-5">#{tag}</span>
                        ))}
                </h3>
                <div className="border mb-6"></div>

                <div className="flex flex-col gap-3 mb-8">
                    <p className="text-[#131313]/70 text-base font-normal font-['Work Sans']">Number of Pages :
                        <span className="text-[#131313] text-base font-semibold font-['Work Sans'] ml-[60px]">{totalPages}</span></p>
                    <p className="text-[#131313]/70 text-base font-normal font-['Work Sans']">Publisher :
                        <span className="text-[#131313] text-base font-semibold font-['Work Sans'] ml-[60px]">{publisher}</span></p>
                    <p className="text-[#131313]/70 text-base font-normal font-['Work Sans']">Year of Publishing :
                        <span className="text-[#131313] text-base font-semibold font-['Work Sans'] ml-[60px]">{yearOfPublishing}</span></p>
                    <p className="text-[#131313]/70 text-base font-normal font-['Work Sans']">Rating :
                        <span className="text-[#131313] text-base font-semibold font-['Work Sans'] ml-[60px]">{rating}</span></p>
                </div>

                <div className="flex gap-3">
                    <button onClick={handleMarkAsRead} className="btn  rounded-lg border border-[#131313]/30 bg-white ">Read ({reads.length})</button>
                    <button onClick={handleAddToWishlist} className="btn btn-accent text-white bg-[#50b1c9]">Wishlist ({wishlist.length})</button>
                </div>

            </div>
        </div>
    );
};

export default BookDetails;