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
        size,
        minSize,
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
                <div className='form-group'>
                    <label htmlFor='price'>room price ${price}</label>
                    <input type='range' name='price' min={minPrice} max={maxPrice} id='price' value={price} onChange={handleChange} className='form-control' />
                </div>
                <div className='form-group'>
                    <label htmlFor='price'>room price ${size}</label>
                    <div className='size-inputs'>
                        <input type='number' name='minSize' id='size' value={minSize} onChange={handleChange} className='size-input' />
                        <input type='number' name='maxSize' id='size' value={maxSize} onChange={handleChange} className='size-input' />
                    </div>
                </div>
                <div className='form-group'>
                    <div className='single-extra'>
                        <input type='checkbox' name='breakfast' id='breakfast' checked={breakfast} onChange={handleChange}/>
                        <label htmlFor='breakfast'>breakfast</label>
                    </div>
                    <div className='single-extra'>
                        <input type='checkbox' name='pets' id='pets' checked={pets} onChange={handleChange}/>
                        <label htmlFor='pets'>pets</label>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default RoomsFilter
