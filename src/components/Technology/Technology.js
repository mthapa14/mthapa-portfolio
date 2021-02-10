import React from 'react'
import Icon1 from '../../images/office.svg'
import Icon16 from '../../images/git.png'
import Icon14 from '../../images/aws.png'
import Icon5 from '../../images/bootstrap.png'
import Icon3 from '../../images/css3.png'
import Icon10 from '../../images/graphql.png'
import Icon17 from '../../images/restapi.png'
import Icon2 from '../../images/html5.svg'
import Icon15 from '../../images/csharp.png'
import Icon7 from '../../images/javascript.png'
import Icon6 from '../../images/material.png'
import Icon12 from '../../images/mysql.svg'
import Icon11 from '../../images/nodejs.png'
import Icon13 from '../../images/php.svg'
import Icon8 from '../../images/react.png'
import Icon9 from '../../images/redux.svg'
import Icon4 from '../../images/sass.svg'
import {TechnologyContainer, TechnologyH1, TechnologyWrapper, TechnologyCard, TechnologyIcon, TechnologyH2} from './TechnologyEl'

const Technology = () => {
    return (
        <TechnologyContainer id='technology'>
            <TechnologyH1>Technology</TechnologyH1>
            <TechnologyWrapper>
                <TechnologyCard>
                    <TechnologyIcon src={Icon1} />
                    <TechnologyH2>Office 365</TechnologyH2>
                </TechnologyCard>
                <TechnologyCard>
                    <TechnologyIcon src={Icon16} />
                    <TechnologyH2>Git</TechnologyH2>
                </TechnologyCard>
                <TechnologyCard>
                    <TechnologyIcon src={Icon2} />
                    <TechnologyH2>HTML5</TechnologyH2>
                </TechnologyCard>
                <TechnologyCard>
                    <TechnologyIcon src={Icon3} />
                    <TechnologyH2>CSS3</TechnologyH2>
                </TechnologyCard>
                <TechnologyCard>
                    <TechnologyIcon src={Icon4} />
                    <TechnologyH2>SASS</TechnologyH2>
                </TechnologyCard>
                <TechnologyCard>
                    <TechnologyIcon src={Icon5} />
                    <TechnologyH2>Bootstrap</TechnologyH2>
                </TechnologyCard>
                <TechnologyCard>
                    <TechnologyIcon src={Icon6} />
                    <TechnologyH2>Material UI</TechnologyH2>
                </TechnologyCard>
                <TechnologyCard>
                    <TechnologyIcon src={Icon7} />
                    <TechnologyH2>JavaScript</TechnologyH2>
                </TechnologyCard>
                <TechnologyCard>
                    <TechnologyIcon src={Icon8} />
                    <TechnologyH2>React</TechnologyH2>
                </TechnologyCard>
                <TechnologyCard>
                    <TechnologyIcon src={Icon9} />
                    <TechnologyH2>Redux</TechnologyH2>
                </TechnologyCard>
                <TechnologyCard>
                    <TechnologyIcon src={Icon17} />
                    <TechnologyH2>Rest API</TechnologyH2>
                </TechnologyCard>
                <TechnologyCard>
                    <TechnologyIcon src={Icon10} />
                    <TechnologyH2>GraphQL</TechnologyH2>
                </TechnologyCard>
                <TechnologyCard>
                    <TechnologyIcon src={Icon11} />
                    <TechnologyH2>NodeJS</TechnologyH2>
                </TechnologyCard>
                <TechnologyCard>
                    <TechnologyIcon src={Icon12} />
                    <TechnologyH2>MySQL</TechnologyH2>
                </TechnologyCard>
                <TechnologyCard>
                    <TechnologyIcon src={Icon13} />
                    <TechnologyH2>php</TechnologyH2>
                </TechnologyCard>
                <TechnologyCard>
                    <TechnologyIcon src={Icon14} />
                    <TechnologyH2>AWS</TechnologyH2>
                </TechnologyCard>
                <TechnologyCard>
                    <TechnologyIcon src={Icon15} />
                    <TechnologyH2>C#</TechnologyH2>
                </TechnologyCard>
            </TechnologyWrapper>    
        </TechnologyContainer>
    )
}

export default Technology
