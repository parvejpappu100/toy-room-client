import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopCategory = () => {
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
                    <h2>Sports Car Here</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Regular Car Here</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Truck Here</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Mini Police Car Here</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopCategory;