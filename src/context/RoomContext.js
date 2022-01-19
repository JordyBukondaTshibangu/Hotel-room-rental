import React, { createContext, useState , useEffect } from 'react';
import items from '../data'


export const RoomContext = createContext();

const RoomContextProvider = (props) => {

    const [ rooms, setRooms ] = useState([]);
    const [ featuredRooms, setFeaturedRooms ] = useState([]);
    const [ sortedRooms, setSortedRooms ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const [ type, setType ] = useState('all');
    const [ capacity, setCapacity ] = useState(0);
    const [ price, setPrice ] = useState(0);
    const [ minPrice, setMinPrice ] = useState(0);
    const [ maxPrice, setMaxPrice ] = useState(0);
    const [ maxSize, setMaxSize ] = useState(0);
    const [ breakfast, setBreakfast ] = useState(false);
    const [ pets, setPets ] = useState(false);



    useEffect(() => {
        let rooms = formatData(items);
        setRooms(rooms);
        setMaxPrice( Math.max(...rooms.map(item => item.price)))
        setMaxSize(Math.max(...rooms.map(item => item.size)))
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

    const getRoom = (slug) => {
        let tempRooms = [...rooms];
        return  tempRooms.find(room => room.slug === slug)
    }

    const handleChange = event => {
        const target = event.target;
        const value = event.type === 'checkbox' ? target.checked : target.value;
        const name = event.target.name;
    }

    const filterRooms = () => {

    }

    return <RoomContext.Provider value={{
        rooms, featuredRooms, sortedRooms, loading, getRoom, handleChange,
        type,capacity,price,minPrice,maxPrice,maxSize,breakfast,pets }}>
        {props.children}
    </RoomContext.Provider>
    
}


export default RoomContextProvider;
