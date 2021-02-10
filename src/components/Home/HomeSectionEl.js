import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HomeSectionContainer = styled.div`
    background: #263238;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1

    :before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradiant(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`

export const HomeSectionContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HomeSectionH1 = styled.h1`
    color: #fff;
    font-size: 42px;
    border-left: 3px solid #00e676;
    padding-left: 20px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 36px;
    }
    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const HomeSectionP = styled.p`
    margin-top: 34px;
    color: #fff;
    font-size: 20px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 20px;
    }
    @media screen and (max-width: 768px){
        font-size: 16px;
    }
`

export const HomeSectionBtnWrapper = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`