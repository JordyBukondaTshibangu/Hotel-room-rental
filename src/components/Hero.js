import React from 'react';
import styled from 'styled-components';
import defaultImg from '../images/room-1.jpeg';

const Hero = ({children, hero }) => {
    return <HeroHeader hero={hero}>
        { children } 
        </HeroHeader>
}

const HeroHeader = styled.header`
    min-height: 60vh;
    background: ${props => props.hero === 'defaultHero' ? `url(${defaultImg})` : `url(${props.hero })` } center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`
    
export default Hero
