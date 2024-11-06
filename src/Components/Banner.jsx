import banner from '../../assets/banner.png';
const Banner = () => {
    return (
        <div className="container mx-auto mt-12">
            <div className="bg-base-200 p-[80px] rounded-xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={banner}
                        className="max-w-sm rounded-lg" />
                    <div className='w-[60%]'>
                        <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                        <button className="btn btn-primary mt-5">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;