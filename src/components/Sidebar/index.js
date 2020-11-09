import React from 'react'
import {Sidebar,SidebarContainer,SidebarLink,
    SidebarMenu,SidebarRoute,SideBtnWrap} from './SidebarElements'
 const Sidebar = () => {
    return (
        <div>
            <SidebarContainer>
                <Icon>
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