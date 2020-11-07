import styled from 'styled-components'
import imgpiz from '../../images/pizza.jpg'


export const HeroContainer= styled.nav`
background :linear-gradient(to right, rgba(0,0,0,0.7),
rgba(0,0,0,0.1)),url(${imgpiz});

height: 100vh;
background-position:center;
background-size:cover;
`;

export const HeroContent= styled.nav`
height: calc(100vh -80px);
max-height:100%;
width:100vw;
padding: 0rem calc((100vw - 1300px)/2);
`;


export const HeroItems= styled.nav`
display:flex;
flex-direction:column;
align-items:flex-start;
height: 100vh;
max-height:100%
padding: 0 2rem;
width:650px;
color:#fff;
text-transform:uppercase;
line-height:1;
font-weight:bold;
justify-content:center;

@media screen and (max-width:65px){
    width:100%;
}
`

export const HeroH1=styled.h1`
font-size: clamp(2.5rem,10vw,5rem);
margin-bottom:1rem;
box-shadow:3px 5px #e9ba23;
letter-spacing:3px;
`

export const HeroP=styled.p`
font-size: clamp(2rem,2.5vw,3rem);
margin-bottom:2rem;
`

export const HeroBtn=styled.button`
font-size: 1.4rem;
padding: 1rem 4rem;
border:none;
background:#e31837;
color:#fff;
transition:0.2s ease out;

&:hover{
    background:#ffc50;
    color:#000;
transition:0.2s ease out;
cursor:pointer;
}
`