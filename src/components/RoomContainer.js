import React, { useContext } from 'react'
import { RoomContext } from '../context/RoomContext'
import RoomsFilter from './RoomFilter'
import RoomsList from './RoomList'
import Loading from './Loading'

const RoomContainer = () => {

    const { rooms, loading, sortedRooms } = useContext(RoomContext)

    return (
       <>
        {
            loading ? 
            <Loading /> : 
            <div>
                <RoomsFilter rooms={rooms}/>
                <RoomsList rooms={sortedRooms}/>
            </div>
        }
       </>
    )
}

export default RoomContainer
