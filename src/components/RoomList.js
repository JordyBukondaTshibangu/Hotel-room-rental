import React from 'react';
import Room from './Room';

const RoomsList = ({ rooms }) => {

    if(rooms.length === 0) {
        return <div className='empty-search'>
            <h3>unfortunately, no rooms matches your search paramters</h3>
        </div>
    }
    
    return (
        <section className='roomslist'>
            <div className='roomslist-center'>
                {
                    rooms.map((room, index) => <Room key={index} room={room} />)
                }
            </div>
        </section>
    )
}

export default RoomsList
