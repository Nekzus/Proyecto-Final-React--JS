import React from 'react'
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Loading = () => {
    return (
        <div className='loading-main'>
            <div className='loading'>
                <Spinner animation="grow" variant="danger" className='spinner' />
            </div>
        </div>
    )
};
export default Loading;
