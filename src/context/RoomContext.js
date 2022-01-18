import React, { createContext, useState , useEffect } from 'react';
import items from '../data'


export const RoomContext = createContext();

const RoomContextProvider = (props) => {

    const [ rooms, setRooms ] = useState([]);
    const [ featuredRooms, setFeaturedRooms ] = useState([]);
    const [ sortedRooms, setSortedRooms ] = useState([]);
    const [ loading, setLoading ] = useState(false);


    useEffect(() => {
        let rooms = formatData(items);
        setRooms(rooms);
        let featuredRooms = rooms.filter(room => room.featured === true);
        setFeaturedRooms(featuredRooms);
        setSortedRooms(rooms);
        setLoading(false)
    }, [])



    const formatData = items => (
      items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);

            return  { ...item.fields, images, id}
        })
    )


    return <RoomContext.Provider value={{rooms, featuredRooms, sortedRooms, loading}}>
        {props.children}
    </RoomContext.Provider>
    
}


export default RoomContextProvider;
