import styled from 'styled-components'

export const ContactContainer = styled.div`
    background: #fff;

    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`

export const ContactWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: auto;
    border-bottom: 2px solid #e0e0e0;
    width: 100%;
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 120px 14px;
    justify-content: center;

    @media screen and (max-height: 700px){
        height: auto;
        padding: 0 14px;
    }
    @media screen and (max-width: 760px){
        height: auto;
        padding: 0 14px;
    }
`

export const ContactRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';

    @media screen and (max-width: 768px){
        grid-template-areas: 'col1 col1' 'col2 col2';
    }
`

export const Column1 = styled.div`
    margin-buttom: 15px;
    padding: 0 15px;
    grid-area: col1;

    @media screen and (max-width: 480px){
        padding: 0;
    }
`

export const Column2 = styled.div`
    margin-buttom: 15px;
    padding: 0 15px;
    grid-area: col2;

    @media screen and (max-width: 480px){
        padding: 0;
    }
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 20px;
    padding-bottom: 10px;
`

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 17px;
    line-height: 20px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 40px;
    line-height: 1.1;
    font-weight: 600;

    @media screen and (max-width: 480px){
        font-size: 30px;
    }
`

export const Subtitle = styled.p`
    max-width: 95%;
    margin-bottom: 20px;
    border-left: 2px solid #eeeeee;
    padding: 15px;
    font-size: 16px;
    line-height: 26px;
    @media screen and (max-width: 480px){
        font-size: 15px;
    }
`

export const ContactDetails = styled.div`
    background: #fff;
    border: 2px solid #eeeeee;
    padding: 20px;

    @media screen and (max-width: 680px){
        padding: 8px;
    }
`
export const ContactMethod = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 25px;
`
export const Logo = styled.h1`
    color: blue;
    font-size: 24px;
    padding-right: 5px;
`

export const ContactDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 40px;
`

export const HeadingText = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: green;
    padding-bottom: 5px;
`

export const ContactID = styled.p`
    font-size: 15px;
`