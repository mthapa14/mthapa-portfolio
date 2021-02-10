import styled from 'styled-components'

export const TechnologyContainer = styled.div`
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;

    @media screen and (max-width: 760px){
        height: auto;
    }

    @media screen and (max-width: 480px){
        height: auto;
    }
`

export const TechnologyWrapper = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    margin-bottom: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-itmes: center;
    grid-gap: 26px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr 1fr 1fr;
        padding: 0 15px;
    }

    @media screen and (max-width: 480px){
        grid-template-columns: 1fr 1fr;
        padding: 0 10px;
    }
`

export const TechnologyCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 2px;
    max-height: 340px;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0, 0,0,0.5);
    transition: all 0.2s ease-in-out;

    &:hover{
        background: #eceff1;
        transition: all 1s ease-in-in-out;
        cursor: pointer;
    }
`

export const TechnologyH1 = styled.h1`
    font-size: 32px;
    color: black;
    border-left: 3px solid #00e676;
    padding-left: 20px;
    margin-top: 40px;
    margin-bottom: 70px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const TechnologyIcon = styled.img`
    height: 60px;
    width: 70px;
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid green;

    &:hover{
        transform: rotateY(360deg);
        -webkit-transform: rotateY(360deg);
        transition-duration: 1.5s;
        -webkit-transition-duration:1.5s;
    }
`

export const TechnologyH2 = styled.h2`
    font-size: 14px;
    color: green;
`