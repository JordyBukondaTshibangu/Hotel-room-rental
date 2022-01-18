import React, { useContext } from 'react';
import { RoomContext } from '../context/RoomContext';
import Title from './Title';
import Room from './Room';
import Loading from './Loading';

const FeaturedRoom = () => {

    const { loading, featuredRooms }  = useContext(RoomContext);
    return (
        <section className='featured-rooms'>
            <Title title='featured rooms' />
            <div className='featured-rooms-center'>
            { 
                loading ? 
                <Loading /> : 
                featuredRooms.map((room, index) => <Room key={index} room={room}/>)
            }
            </div>
        </section>
    )
}

export default FeaturedRoom
