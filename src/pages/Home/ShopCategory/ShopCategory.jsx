import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShowCar from '../ShowCar/ShowCar';

const ShopCategory = () => {

    const [category , setCategory] = useState([]);
    useEffect( () => {
        fetch("toy.json")
        .then(res => res.json())
        .then(data => setCategory(data))
    } , [])

    const sportsCars = category.filter( car => car.category == "Sports Car");
    const regularCars = category.filter( car => car.category == "Regular Car");
    const trucks = category.filter( car => car.category == "Truck");
    const policeCars = category.filter( car => car.category == "Mini Police Car");

    return (
        <div className='lg:container mx-auto my-10'>
            <Tabs>
            
               <div className='text-center font-semibold text-xl'>
                    <h4 className='text-xl font-bold my-10'>TOP PRODUCTS</h4>
                    <TabList>
                        <Tab>SPORTS CAR</Tab>
                        <Tab>REGULAR CAR</Tab>
                        <Tab>TRUCK</Tab>
                        <Tab>MINI POLICE CAR</Tab>
                    </TabList>
               </div>

                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-20'>
                        {
                            sportsCars.map(cars => <ShowCar
                            key={cars._id}
                            cars = {cars}
                            ></ShowCar>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-20'>
                        {
                            regularCars.map(cars => <ShowCar
                            key={cars._id}
                            cars = {cars}
                            ></ShowCar>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-20'>
                        {
                            trucks.map(cars => <ShowCar
                            key={cars._id}
                            cars={cars}
                            ></ShowCar>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-20'>
                        {
                            policeCars.map(cars => <ShowCar
                            key={cars._id}
                            cars={cars}
                            ></ShowCar>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopCategory;