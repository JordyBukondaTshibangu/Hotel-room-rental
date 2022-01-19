import React, { useContext } from 'react';
import { RoomContext } from '../context/RoomContext';
import Title from './Title'

const getUniqueValues = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
} 
const RoomsFilter = ({rooms}) => {

    const { 
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        maxSize,
        breakfast,
        pets,
        handleChange } = useContext(RoomContext);

        let types = getUniqueValues(rooms, 'type');
        types = ['all', ...types];
        types = types.map((item, index) => <option value={item} key={index}>{item}</option>)

        let guests = getUniqueValues(rooms, 'capacity');
        guests = guests.map((item,index) => <option value={item} key={index}>{item}</option>)

    return (
        <section className='filter-container'>
            <Title title='search rooms'/>
            <form className='filter-form'>
                <div className='form-group'>
                    <label htmlFor='type'>room type</label>
                    <select name='type' id='type' value={type} className='form-control' onChange={handleChange}>
                        { types }
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='type'>guests</label>
                    <select name='capacity' id='capacity' value={capacity} className='form-control' onChange={handleChange}>
                        { guests }
                    </select>
                </div>
            </form>
        </section>
    )
}

export default RoomsFilter
