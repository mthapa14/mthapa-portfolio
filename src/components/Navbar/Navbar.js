import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarEl'

const Navbar = ({toggle}) => {
    const [scrollNav, setscrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setscrollNav(true)
        } else {
            setscrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav= {scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>PORTFOLIO</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>About</NavLinks>
                        </NavItem>
{/*                         <NavItem>
                            <NavLinks to='discover' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Education</NavLinks>
                        </NavItem> */}
                        <NavItem>
                            <NavLinks to='technology' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Technology</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='projects' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                    {/* <NavBtn>
                        <NavBtnLink to='/signin'>Message</NavBtnLink>
                    </NavBtn> */}
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
