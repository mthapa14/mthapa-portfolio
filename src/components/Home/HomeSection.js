import React, {useState} from 'react'
import {HomeSectionContainer, HomeSectionContent, HomeSectionH1, HomeSectionP, HomeSectionBtnWrapper, ArrowForward, ArrowRight} from './HomeSectionEl'
import {Button} from '../ButtonEl'

const HomeSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HomeSectionContainer id='home'>
            <HomeSectionContent>
                <HomeSectionH1>Welcome to my portfolio</HomeSectionH1>
                <HomeSectionP>
                    I am glad you are here to visit this website portfolio. Please scroll down to know more about me. <br/> If you would like to know me even further, it would be my pleasure to introduce myself with you.
                </HomeSectionP>
                <HomeSectionBtnWrapper>
                    <Button to='about' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                        Get started {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </HomeSectionBtnWrapper>
            </HomeSectionContent>
        </HomeSectionContainer>
    )
}

export default HomeSection