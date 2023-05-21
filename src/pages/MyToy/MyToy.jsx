import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import ShowMyToys from '../ShowMyToys/ShowMyToys';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const MyToy = () => {
    useTitle("My Toy")
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const url = `https://toy-marketplace-server-six-pi.vercel.app/carToys?email=${user.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-marketplace-server-six-pi.vercel.app/carToys/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(toy => toy._id !== _id);
                            setToys(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div className='lg:container mx-auto my-20'>
            <h5 className='text-3xl font-semibold'>My Toys : {toys.length ? toys.length : "You Don't add any toy"}</h5>
            {
                toys.sort((a , b) => a.price - b.price).map(toy => <ShowMyToys
                    key={toy._id}
                    toy={toy}
                    handleDelete={handleDelete}
                ></ShowMyToys>)
            }
        </div>
    );
};

export default MyToy;