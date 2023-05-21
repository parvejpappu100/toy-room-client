import React from 'react';
import HomeSlider from '../HomeSlider/HomeSlider';
import Services from '../Services/Services';
import ShopCategory from '../ShopCategory/ShopCategory';
import useTitle from '../../../hooks/useTitle';
import KidsToyCarVedio from '../KidsToyCarVedio/KidsToyCarVedio';

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <HomeSlider></HomeSlider>
            <Services></Services>
            <ShopCategory></ShopCategory>
            <KidsToyCarVedio></KidsToyCarVedio>
        </div>
    );
};

export default Home;