import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
    background-color: #101522;
`

export const FooterWrap = styled.div`
    padding: 16px 0px;
    max-width: 1100px;
    margin: 0 auto;
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1100px;
    margin: 10px auto 10px auto;
`

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 18px;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;

    &:hover{
        color: #01bf71;
    }
`

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`

export const SocialIcons = styled.div`
    display: flex;
    align-items: center;
`

export const SocialIconLink = styled.a`
    padding: 0 20px;
    color: #fff;
    font-size: 26px;

    &:hover{
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`

