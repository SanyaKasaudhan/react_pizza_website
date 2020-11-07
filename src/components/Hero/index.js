import React from 'react'
import Navbar from '../Navbar'
import {HeroContainer, HeroBtn,HeroContent,HeroH1,HeroItems,HeroP} from './HeroElements'
export const Hero = () => {
    return (
        <HeroContainer>
            <Navbar />
            <HeroContent>
                <HeroItems>
                   <HeroH1>Greatest Pizza Ever</HeroH1> 
                   <HeroP>Ready in 60seconds</HeroP>
                   <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;