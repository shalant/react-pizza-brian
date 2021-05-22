import React from 'react';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarMenu, 
    SidebarLink, 
    SidebarRoute, 
    SidebarBtnWrap 
} from './SidebarElements';

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to='/'>Pizzas</SidebarLink>
                <SidebarLink to='/'>Desserts</SidebarLink>
                <SidebarLink to='/'>Full Menu</SidebarLink>
            </SidebarMenu>
            <SidebarBtnWrap>
                <SidebarRoute to='/'>Order Now</SidebarRoute>
            </SidebarBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
