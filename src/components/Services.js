import React, {useState } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import Title from './Title'

const Services = () => {
    const [ services, setServices] = useState([
        { 
            title : 'Free cocktail', 
            icon : <FaCocktail />, 
            info : 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content'},
        { 
            title : 'Endless hiking', 
            icon : <FaHiking />, 
            info : 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content'},
        { 
            title : 'Free shuttle', 
            icon : <FaShuttleVan />, 
            info : 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content'},
        { 
            title : 'Strongest Beer', 
            icon : <FaBeer />, 
            info : 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content'
        }
        ])


    return (
        <section className='services'>
            <Title title='services' />
            <div className='services-center'>
                {
                    services.map((service, index) => (
                        <article key={index} className='service'>
                            <span>{service.icon}</span>
                            <h6>{service.title}</h6>
                            <p>{service.info}</p>
                        </article>
                    )
                    )
                }
            </div>
        </section>
    )
}

export default Services
