import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const UpdateToy = () => {
    useTitle("Update Toy")

    const toy = useLoaderData();
    const { _id, name, quantity, price, img, description, rating } = toy;


    const { user } = useContext(AuthContext);
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = event => {
        setSelectedCategory(event.target.value);
    }

    const handleUpdateToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const seller = form.seller.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const description = form.description.value;
        const rating = form.rating.value;
        form.reset();
        const updatedToy = { name: name, seller: seller, quantity: quantity, price: price, img: photo, description: description, rating: rating, category: selectedCategory }

        fetch(`https://toy-marketplace-server-six-pi.vercel.app/toys/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        'Toy updated successfully!',
                        'success'
                    )
                }
            })

    }

    return (
        <div className="lg:container mx-auto md:my-20 py-10 px-10 md:px-20 bg-gray-300 rounded-xl">
            <h3 className="text-center text-4xl font-semibold">Update Toy</h3>
            <form onSubmit={handleUpdateToy} className='my-10'>
                <div className="md:flex gap-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={name} placeholder="Enter toy name" className="px-4 py-2 text-xl" required />
                        <label className="label">
                            <span className="label-text text-xl font-medium">Seller</span>
                        </label>
                        <input defaultValue={user?.displayName} readOnly type="text" name="seller" placeholder="seller name" className="px-4 py-2 text-xl" />
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Select Category</span>
                            </label>
                            <select required className="select  w-full rounded-none" value={selectedCategory} onChange={handleCategoryChange}>
                                <option disabled value="">Pick one</option>
                                <option value="Sports Car">Sports Car</option>
                                <option value="Regular Car">Regular Car</option>
                                <option value="Truck">Truck</option>
                                <option value="Mini Police Car">Mini Police Car</option>
                            </select>
                        </div>
                        <label className="label">
                            <span className="label-text text-xl font-medium">Rating</span>
                        </label>
                        <input type="text" defaultValue={rating} name="rating" placeholder="rating" required className="px-4 py-2 text-xl" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-xl font-medium">Quantity</span>
                        </label>
                        <input type="text" defaultValue={quantity} name="quantity" placeholder="Enter Quantity" required className="px-4 py-2 text-xl" />
                        <label className="label">
                            <span className="label-text text-xl font-medium">Price</span>
                        </label>
                        <input type="text" defaultValue={price} name="price" placeholder="price" required className="px-4 py-2 text-xl" />
                        <label className="label">
                            <span className="label-text text-xl font-medium">Photo</span>
                        </label>
                        <input type="text" name="photo" defaultValue={img} placeholder="photo url" className="px-4 py-2 text-xl" required />
                        <label className="label">
                            <span className="label-text text-xl font-medium">Email(optional)</span>
                        </label>
                        <input type="text" name="email" placeholder="email" className="px-4 py-2 text-xl" />
                    </div>
                </div>
                <label className="label">
                    <span className="label-text text-xl font-medium">Description</span>
                </label>
                <textarea name="description" defaultValue={description} id="" className="px-4 py-2 text-xl w-full" cols="30" rows="5" required></textarea>
                <input type="submit" value="Add Toy" className="bg-black text-white bg-opacity-70 text-center w-full my-5 py-2  font-medium text-xl" />
            </form>
        </div>
    );
};

export default UpdateToy;