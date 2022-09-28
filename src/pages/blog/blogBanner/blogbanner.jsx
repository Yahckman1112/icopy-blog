import React from 'react';
import './bannerup.css'

//"https://icopy-server.herokuapp.com/api
function BlogBanner(props) {
    return (
        
        <div className="col-12 col-sm-12 homeLandPage" >
            <div className='row'>
                <div className='col-12 col-sx-12 col-sm-6'>
                    <p className='blogBanner_para1'> Eplore All Blog </p>
                </div>
                <div className='col-12 col-sx-12 col-sm-6 blogBanner_card'></div>
            </div>
        </div>
    );
}

export default BlogBanner;