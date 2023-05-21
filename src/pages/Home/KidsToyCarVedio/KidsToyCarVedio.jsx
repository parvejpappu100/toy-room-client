import React, { useRef } from 'react';
import "./KidsToyCarVedio.css"
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';

const KidsToyCarVedio = () => {

    const playerRef = useRef(null);

    const videoId = 'cPV6DIzpFtQ';

    const opts = {
        height: '600',
        width: '100%',
        playerVars: {
            mute: 1,
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            modestbranding: 1,
            start: 0,
            end: 50,
            loop: 1,
        },
    }

    const onEnd = (event) => {
        event.target.playVideo();
    };
    const handlePlayerReady = event => {
        event.target.setVolume(0);
    };

    return (
        <div className='lg:container mx-auto my-10 video-container relative'>
            <YouTube videoId={videoId} opts={opts} onEnd={onEnd} onReady={handlePlayerReady} ref={playerRef} />
            <div className='absolute inset-0 bg-black bg-opacity-90  opacity-100 text-white  flex flex-col justify-center items-center text-center'>
                <h3 className='text-5xl font-bold hover:text-gray-300'>AMAZING CAR</h3>
                <Link to="/allToy"><button className='bg-black hover:bg-gray-400 text-white font-bold py-2 my-5 px-4 rounded-none'>SHOP NOW</button></Link>
            </div>
        </div>
    );
};

export default KidsToyCarVedio;