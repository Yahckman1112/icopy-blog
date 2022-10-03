import React from 'react';
import LongCard from './../../../components/longCard/longCard';
import {texts} from './text'
function EmailBody(props) {
   
    return (
        <div>
            <div className='row'style={{whiteSpace:'pre-line'}}>
                <div className="col col-12 col-sm-5" > 
                    < LongCard
                    title='Email Marketing'
                    amount='2000'
                    body={texts.map(text=>(
                        <p>{text.text1}</p>
                    ))}
                    link='/contact'
                    />
                </div>
                <div className="col col-12 col-sm-5">
                < LongCard
                    title='Additional Services'
                    amount='2000'
                    body={texts.map(text=>(
                        <p>{text.text2}</p>
                    ))}
                    link='/contact'
                    /> 
                </div>
            </div>
        </div>
    );
}

export default EmailBody;