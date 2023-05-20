import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import ShowMyToys from '../ShowMyToys/ShowMyToys';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const url = `http://localhost:5000/carToys?email=${user.email}`;
    const navigate = useNavigate();

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    if (toys.length == 0) {
        Swal.fire({
            title: "You don't add a toy !",
            text: "Please add toy first !",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Go to add!'
        }).then((result) => {
            if (result.isConfirmed) {
                navigate("/addToy")
            }
        })
    }

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
                fetch(`http://localhost:5000/carToys/${_id}`, {
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
            {
                toys.map(toy => <ShowMyToys
                    key={toy._id}
                    toy={toy}
                    handleDelete={handleDelete}
                ></ShowMyToys>)
            }
        </div>
    );
};

export default MyToy;