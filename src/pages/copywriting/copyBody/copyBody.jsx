import React from 'react';
import LongCard from '../../../components/longCard/longCard';
import { bod1,bod2 } from './text';

function CopyBody(props) {

   



    return (
        <div>
        <div className="row">
            <div className="col col-12 col-sm-5 copyBody " >
                <LongCard
                title='Copy Writing'
                amount='700'
                body= {bod1.map((bod)=>(
                    <p>{bod.label}</p>
                ))}
                link='/contact'
                />
            </div>

            <div className="col-sx-12 col-12 col-sm-5">
            <LongCard
                title='Additional Service'
                amount='2000'
                body= {bod2.map((bod)=>(
                    <p>{bod.label}</p>
                ))}
                link='/contact'
                />
            </div>
        </div>

        </div>
    );
}

export default CopyBody;


// title, amount, body, link