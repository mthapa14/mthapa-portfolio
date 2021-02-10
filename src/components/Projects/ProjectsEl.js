import styled from 'styled-components'

export const ProjectsContainer = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 760px){
        height: auto;
    }

    @media screen and (max-width: 480px){
        height: auto;
    }
`

export const ProjectsWrapper = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    margin-bottom: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-itmes: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ProjectsCard = styled.a`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    border-radius: 5px;
    max-height: 340px;
    padding: 10px;
    box-shadow: 0 1px 3px rgba(0, 0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-in-out;
        cursor: pointer;
    }
`

export const ProjectsIcon = styled.img`
    height: 200px;
    width: 300px;
    object-fit: cover;
    overflow: hidden;
    margin-bottom: 10px;
`

export const ProjectsH1 = styled.h1`
    font-size: 32px;
    color: #fff;
    border-left: 3px solid #00e676;
    padding-left: 20px;
    margin-top: 40px;
    margin-bottom: 70px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const ProjectsH2 = styled.h2`
    font-size: 18px;
    color: #1565c0;
    text-decoration: none;
    margin-bottom: 10px;
    &:hover{
        color: green;
        text-decoration: underline;
    }
`

export const ProjectsP = styled.p`
    font-size: 14px;
    text-align: center;
`