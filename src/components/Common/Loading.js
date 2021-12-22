import React from 'react'
import { Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Loading = () => {
    return (
        <div className='loading-main'>
            <div className='loading'>
            <Spinner color='danger' className='spinner'/>
            </div>
        </div>
    )
};

export default Loading;
