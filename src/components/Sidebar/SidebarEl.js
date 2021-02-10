import styled from 'styled-components'
import {Link as LinkScroll} from 'react-scroll'

import {FaTimes} from 'react-icons/fa'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 55%;
    height: 100%;
    background: #212121;
    display: grid;
    top: 0;
    left: 0;
    transition: 0.4s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0%')};
    left: ${({isOpen}) => (isOpen ? '0' : '-100%')};

`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 22px;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #fff;
    margin-top: 80px;
`

export const SidebarMenu = styled.ul`
    display: flex;
    flex-direction: column;
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled(LinkScroll)`
    display: flex;
    padding: 20px 40px;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: black;
        background: #f5f5f5;
        transition: 0.2s ease-in-out;
    }
`