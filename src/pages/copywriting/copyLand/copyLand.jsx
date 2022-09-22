import React from 'react';
import BannerSideOne from '../../../components/banner/sideOne';
import './copyLand.css'

function CopyLand(props) {
    return (
        <div>
            <div className="col col-12 col-sm-12 copy_land">
                <div className="row">
                    <div className="col-sm-6 copy_land_text">
                    <BannerSideOne 
                    
                    text='ICopyStory CopyWriting Services'
                    firstSpan= 'Hey there'
                    secondSpan='Meet The StoryMarketer'
                    link= '#'
                    linkName='Get Started'
                    />
                    </div>

                    <div className="col-sm-6 copy_land_pics"></div>
                </div>
            </div>
        </div>
    );
}

export default CopyLand;

// text, firstSpan, secondSpan, link