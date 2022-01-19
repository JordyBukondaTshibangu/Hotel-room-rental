import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { RoomContext } from '../context/RoomContext';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner'


const SingleRoom = () => {

    const [ room, setRoom ] = useState({ 
        name : '', 
        slug : '', 
        type : '', 
        price : 0, 
        size : 0, 
        capacity : 0, 
        pets : false, 
        breakfast : false, 
        feautred : false, 
        description : '' 
    })
    const roomSlug = useParams().slug
    const { getRoom } = useContext(RoomContext)

    useEffect(() => {
        setRoom(getRoom(roomSlug))
    }, [room, getRoom ])

    if(!room ||!room.name || room.name === '')
    {
        return <div className='error'>
                <h3>No such room could be found...</h3>
                <Link to='/rooms' className='btn-primary'>
                    Back to rooms
                </Link>
            </div> 
    }

    const [ mainImg, ...defaultImg ] = room.images 
    return ( 
            <>
            <Hero hero={mainImg}>
                <Banner title={ `${room.name} room`}>
                    <Link to='/rooms' className='btn-primary'>
                        Back to rooms
                    </Link>
                </Banner>
            </Hero>
            <section className='single-room'>
                <div className='single-room-images'>
                    {
                        defaultImg.map((image, index) => <img src={image} alt={room.name} key={index} />)
                    }
                </div>
                <div className='single-room-info'>
                    <article className='desc'>
                        <h3>Details</h3>
                        <p>{room.description}</p>
                    </article>
                    <article className='info'>
                        <h3>Info</h3>
                        <h6>Price : ${room.price}</h6>
                        <h6>Size : {room.size} SQFT</h6>
                        <h6>Max capacity : { room.capacity > 1 ?  `${room.capacity} people `  : `${room.capacity} person ` }</h6>
                        <h6>{ room.pets ? 'Pets allowed' : 'No pets allowed'}</h6>
                        <h6>{ room.breakfast && 'Free breakfast included'}</h6>
                    </article>
                </div>
            </section>
            <section className='room-extras'>
                <h6>Extras</h6>
                <ul className='extras'>
                    {
                        room.extras.map((extra, index) => <li key={index}>{extra}</li>)
                    }
                </ul>
            </section>
            </>
    )
}

export default SingleRoom
