import React from 'react'
import {SidebarContainer,SidebarLink,Icon,CloseIcon,
    SidebarMenu,SidebarRoute,SideBtnWrap} from './SidebarElements'
 const Sidebar = ({isOpen, toggle}) => {
    return (
        <div>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon></CloseIcon>
                </Icon>
                <SidebarMenu>
                    <SidebarLink to="/">Pizzas</SidebarLink>
                    <SidebarLink to="/">Desserts</SidebarLink>
                    <SidebarLink to="/">Full Menu</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                <SidebarRoute to="/">Order now</SidebarRoute>
                </SideBtnWrap>
            </SidebarContainer>
        </div>
    )
}
export default Sidebar;