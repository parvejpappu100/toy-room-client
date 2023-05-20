import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import ShowMyToys from '../ShowMyToys/ShowMyToys';

const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const url = `http://localhost:5000/carToys?email=${user.email}`;
    
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    return (
        <div className='lg:container mx-auto my-20'>
            {
                toys.map(toy => <ShowMyToys
                key={toy._id}
                toy={toy}
                ></ShowMyToys>)
            }
        </div>
    );
};

export default MyToy;