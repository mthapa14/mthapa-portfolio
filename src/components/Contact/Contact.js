import React from 'react'
import {FiPhone} from 'react-icons/fi'
import {SiMinutemailer} from 'react-icons/si'
import {ContactContainer, ContactWrapper, ContactRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ContactDetails, Logo, ContactDetailsWrapper, HeadingText, ContactID, ContactMethod} from './ContactEl'
import { ContactForm } from './ContactForm'
import CtForm from './CtForm'

const Contact = () => {
    return (
        <>
            <ContactContainer id="contact">
                <ContactWrapper>
                    <ContactRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Contact</TopLine>
                                <Heading>Get In Touch</Heading>
                                <Subtitle>Please feel free to get in touch with me. I am always open to any new opportunity or have any queries.</Subtitle>
                            </TextWrapper>
                            <ContactDetails>
                                <ContactMethod>
                                    <Logo><FiPhone/></Logo>
                                    <ContactDetailsWrapper>
                                        <HeadingText>Call Me On</HeadingText>
                                        <ContactID>0426251253</ContactID>
                                    </ContactDetailsWrapper>
                                </ContactMethod>
                                <ContactMethod>
                                    <Logo><SiMinutemailer/></Logo>
                                    <ContactDetailsWrapper>
                                        <HeadingText>Email Me At</HeadingText>
                                        <ContactID>mohan.thapa5767@gmail.com</ContactID>
                                    </ContactDetailsWrapper>
                                </ContactMethod>
                            </ContactDetails>
                        </Column1>
                        <Column2>
                            <TextWrapper>
                                <TopLine>Send Message</TopLine>
                                {/* <ContactForm/> */}
                                <CtForm/>
                            </TextWrapper>
                        </Column2>
                    </ContactRow>
                </ContactWrapper>
            </ContactContainer>
        </>
    )
}

export default Contact