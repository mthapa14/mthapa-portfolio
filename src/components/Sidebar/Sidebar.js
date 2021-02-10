import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarEl'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}> About </SidebarLink>
                    {/* <SidebarLink to='discover' onClick={toggle}> Education </SidebarLink> */}
                    <SidebarLink to='technology' onClick={toggle}> Technology </SidebarLink>
                    <SidebarLink to='projects' onClick={toggle}> Learning Projects </SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}> Contact </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
