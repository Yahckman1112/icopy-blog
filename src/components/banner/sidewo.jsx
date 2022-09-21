import React from 'react';
import './banner.css'
function BannerSideTwo({banner}) {
    return (
        <div className='banner_pics'>
            <img src={banner} alt="bannener picture" />
        </div>
    );
}

export default BannerSideTwo;