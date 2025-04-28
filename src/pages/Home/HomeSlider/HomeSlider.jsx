import React from "react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa"

const HomeSlider = () => {

    

    return (
        <div>
            <div className=" w-full my-20">
                <div id="" className="  w-full relative">
                    <img
                        src="https://i.ibb.co/r4Q5hPq/sample-2.jpg"
                        className="h-1/2"
                    />
                    <div className="bg-black absolute left-64 hidden lg:block  top-1/4 text-center p-16">
                        <h4 className="text-5xl text-[#a1a1a1] font-bold hover:text-white">NEW <br />    ARRIVAL</h4>
                        <p className="text-[#a1a1a1] font-bold text-xl my-5">Get Up To 50% Off *Only</p>
                        <button className="btn rounded-none font-bold hover:bg-black">Shop Now</button>
                    </div>
                    {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="text-gray-300">
                            <FaLongArrowAltLeft className="text-5xl"></FaLongArrowAltLeft>
                        </a>
                        <a href="#slide2" className="text-gray-300">
                            <FaLongArrowAltRight className="text-5xl"></FaLongArrowAltRight>
                        </a>
                    </div> */}
                </div>
                {/* <div id="slide2" className="carousel-item relative w-full">
                <img
                        src="https://i.ibb.co/r43MhhY/sample-1.jpg"
                        className="w-full"
                    />
                    <div className="bg-black absolute right-36 hidden lg:block  top-1/4 text-center p-16">
                        <h4 className="text-5xl text-[#a1a1a1] font-bold hover:text-white">REMOTE <br /> CAR </h4>
                        <p className="text-[#a1a1a1] font-bold text-xl my-5">Get Up To 30% Off *Only</p>
                        <button className="btn rounded-none font-bold hover:bg-black">Shop Now</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="text-gray-300">
                            <FaLongArrowAltLeft className="text-5xl"></FaLongArrowAltLeft>
                        </a>
                        <a href="#slide3" className="text-gray-300">
                            <FaLongArrowAltRight className="text-5xl"></FaLongArrowAltRight>
                        </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co/4SpkQd3/sample-3.jpg"
                        className="w-full"
                    />
                    <div className="bg-black absolute right-44 hidden lg:block  top-1/4 text-center p-16">
                        <h4 className="text-5xl  text-[#a1a1a1] font-bold hover:text-white">BATTERY <br /> CAR </h4>
                        <p className="text-[#a1a1a1] font-bold text-xl my-5">Get Up To 45% Off *Only</p>
                        <button className="btn rounded-none font-bold hover:bg-black">Shop Now</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="text-gray-300">
                            <FaLongArrowAltLeft className="text-5xl"></FaLongArrowAltLeft>
                        </a>
                        <a href="#slide1" className="text-gray-300">
                            <FaLongArrowAltRight className="text-5xl"></FaLongArrowAltRight>
                        </a>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default HomeSlider;
