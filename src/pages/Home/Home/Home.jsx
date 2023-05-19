import React from 'react';
import HomeSlider from '../HomeSlider/HomeSlider';
import Services from '../Services/Services';
import ShopCategory from '../ShopCategory/ShopCategory';

const Home = () => {
    return (
        <div>
            <HomeSlider></HomeSlider>
            <Services></Services>
            <ShopCategory></ShopCategory>
        </div>
    );
};

export default Home;