import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowAllToys from './ShowAllToys';
import useTitle from '../../hooks/useTitle';

const AllToy = () => {
    useTitle("All Toy");

    const loadedToys = useLoaderData();

    const [showAll, setShowAll] = useState(false);
    const handleShowAll = () => {
        setShowAll(true);
    };

    return (
        <div>
            <div className='lg:container mx-auto  my-10'>
                {
                    loadedToys.slice(0, showAll ? loadedToys.length : 20).map(toy => <ShowAllToys
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