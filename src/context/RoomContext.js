import React, { createContext, useState , useEffect } from 'react';
import items from '../data'


export const RoomContext = createContext();

const RoomContextProvider = (props) => {

    const [ rooms, setRooms ] = useState([]);
    const [ featuredRooms, setFeaturedRooms ] = useState([]);
    const [ sortedRooms, setSortedRooms ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const [ type, setType ] = useState('all');
    let [ capacity, setCapacity ] = useState(0);
    let [ price, setPrice ] = useState(600);
    const [ minPrice, setMinPrice ] = useState(0);
    const [ maxPrice, setMaxPrice ] = useState(600);
    const [ size, setSize ] = useState(0);
    const [ minSize, setMinSize ] = useState(0);
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
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = event.target.name;

        console.log(name, value)

        if(name === 'type'){
            setType(value)
            filterRooms()
        }
        if(name ==='capacity'){
            setCapacity(value)
            filterRooms()
        }
        if(name === 'price'){
            setPrice(value)
            filterRooms()
        }
        if(name === 'size'){
            setSize(value)
            filterRooms()
        }
        if(name === 'breakfast'){
            setBreakfast(!breakfast)
            filterRooms()
        }
        if(name === 'pets'){
            setPets(!pets)
            filterRooms()
        }

    }

    const filterRooms = () => {
        let tempRooms = [...rooms ];

        capacity = parseInt(capacity);
        price = parseInt(price);

        if(type !== 'all'){
            tempRooms = tempRooms.filter(room => room.type === type)
        }

        if(capacity !== 1){
            tempRooms = tempRooms.filter(room => room.capacity >= capacity)
        }

        tempRooms = tempRooms.filter(room => room.price <= price)
        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)

        if(breakfast){
            tempRooms = tempRooms.filter(room => room.breakfast === true)
        }
        if(pets){
            tempRooms = tempRooms.filter(room => room.pets === true)
        }
        setSortedRooms(tempRooms);
    }

    return <RoomContext.Provider value={{
        rooms, featuredRooms, sortedRooms, loading, getRoom, handleChange,
        type,capacity,price,minPrice,size,minSize,maxPrice,maxSize,breakfast,pets }}>
        {props.children}
    </RoomContext.Provider>
    
}


export default RoomContextProvider;
