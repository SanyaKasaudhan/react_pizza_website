import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaPizzaSlice} from 'react-icons/fa'
export const Nav= styled.nav`
background :red;
height: 80px;
display:flex;
justify-content:center;
font-weight:788;
`;
export const NavLink=styled(Link)`
color:#fff;
font-size:2rem;
display:flex;
align-items:center;
text-decoration:none;
cursor:pointer;

@media screen and (max-width:480px ){
    position:absolute;
    top:10px;
    left:20px;
}
`;

export const NavIcon= styled.nav`
display:flex;
padding-top:23px;
padding-right:16px;
position:absolute;
top:0;
right:0;
cursor:pointer;
color:#fff;

p{
    
    trasnform:translated(-175%,100%);
    font-weight:bold;
    font-size:22px;
}
`

export const Bars=styled(FaPizzaSlice)`

padding-right:15px;
font-size:3rem;
transform:translate(-50%,-15%);
`