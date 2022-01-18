import React from 'react'
import { Link } from 'react-router-dom';
import Banner from '../components/Banner'
import Hero from '../components/Hero'

const rooms = () => {
    return (
        <div>
            <Hero hero='roomsHero'>
                <Banner title='rooms'>
                    <Link to='/' className='btn-primary'>
                        Return Home
                    </Link>
                </Banner>
            </Hero>
        </div>
    )
}

export default rooms