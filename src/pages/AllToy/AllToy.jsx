import React, { useEffect, useRef, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowAllToys from './ShowAllToys';
import useTitle from '../../hooks/useTitle';

const AllToy = () => {
    useTitle("All Toy");
    const searchRef = useRef(null);
    const [search , setSearch] = useState("");

    const handleSearch = () => {
        setSearch(searchRef.current.value);
    }

    const [toys , setToys] = useState([]);

    useEffect(() => {
        fetch(`https://toy-marketplace-server-six-pi.vercel.app/searchToys?search=${search}`)
        .then(res => res.json())
        .then(data => setToys(data))
    } , [search]);

    const [showAll, setShowAll] = useState(false);
    const handleShowAll = (event) => {
        setShowAll(true);
    };


    return (
        <div>
            <div className='lg:container mx-auto  my-10'>
                <div className="form-control">
                    <div className="input-group justify-center">
                        <input type="text" ref={searchRef} placeholder="Search…" className="input input-bordered" />
                        <button onClick={handleSearch} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
                {
                    toys.slice(0, showAll ? toys.length : 20).map(toy => <ShowAllToys
                        key={toy._id}
                        toy={toy}
                    ></ShowAllToys>)
                }
            </div>
            <div className="text-center my-5">
                {!showAll && (
                    <button
                        onClick={handleShowAll}
                        className="btn rounded-none font-bold hover:bg-black"
                    >
                        See More
                    </button>
                )}
            </div>
        </div>
    );
};

export default AllToy;