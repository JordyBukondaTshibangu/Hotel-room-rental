import React from 'react';
import loadingGift from '../images/gif/loading-arrow.gif';

const Loading = () => {
    return (
        <div className='loading'>
            <h4>Loading  ... </h4>
            <img src={loadingGift} alt='loading...' />
        </div>
    )
}

export default Loading
