import React from 'react'
import Icon1 from '../../images/projectsImg/nature.png'
import Icon2 from '../../images/projectsImg/movie.png'
import Icon33 from '../../images/projectsImg/tours.png'
import Icon3 from '../../images/projectsImg/pw-generator.png'
import Icon4 from '../../images/projectsImg/quizz.png'
import Icon5 from '../../images/projectsImg/weather.png'
import Icon6 from '../../images/projectsImg/todo.png'
import Icon7 from '../../images/projectsImg/comic.png'
import Icon8 from '../../images/projectsImg/pokemon.png'
import Icon9 from '../../images/projectsImg/visit-melbourne.png'
import {ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP} from './ProjectsEl'

const Projects = () => {
    return (
        <ProjectsContainer id='projects'>
            <ProjectsH1>Projects</ProjectsH1>
            <ProjectsWrapper>
                <ProjectsCard href='https://mthapa14.github.io/todo-project/' target='_blank'>
                    <ProjectsIcon src={Icon6} />
                    <ProjectsH2>ToDo App</ProjectsH2>
                    <ProjectsP>Key: Git, JavaScript, ReactJS, Material UI</ProjectsP>
                </ProjectsCard>
                <ProjectsCard href='https://movie-search1772.netlify.app' target='_blank'>
                    <ProjectsIcon src={Icon2} />
                    <ProjectsH2>Movie App</ProjectsH2>
                    <ProjectsP>Key: Git, JavaScript</ProjectsP>
                </ProjectsCard>
                <ProjectsCard href='https://mthapa14.github.io/tours/' target='_blank'>
                    <ProjectsIcon src={Icon33} />
                    <ProjectsH2>Tour App</ProjectsH2>
                    <ProjectsP>Key: Git, RestAPI, React</ProjectsP>
                </ProjectsCard>
                <ProjectsCard href='https://save-nature.netlify.app/' target='_blank'>
                    <ProjectsIcon src={Icon1} />
                    <ProjectsH2>Nature Website</ProjectsH2>
                    <ProjectsP>Key: Html5, CSS3, JavaScript</ProjectsP>
                </ProjectsCard>
                <ProjectsCard href='https://generate-passwords.netlify.app' target='_blank'>
                    <ProjectsIcon src={Icon3} />
                    <ProjectsH2>Password-generator</ProjectsH2>
                    <ProjectsP>Key: JavaScript</ProjectsP>
                </ProjectsCard>
                <ProjectsCard href='https://play-quizz.netlify.app' target='_blank'>
                    <ProjectsIcon src={Icon4} />
                    <ProjectsH2>Quizz App</ProjectsH2>
                    <ProjectsP>Key: JavaScript</ProjectsP>
                </ProjectsCard>
                <ProjectsCard href='https://weather-search1721.netlify.app' target='_blank'>
                    <ProjectsIcon src={Icon5} />
                    <ProjectsH2>Weather App</ProjectsH2>
                    <ProjectsP>Key: CSS3, JSON, JavaScript</ProjectsP>
                </ProjectsCard>
                
                <ProjectsCard href='https://mthapa14.github.io/books' target='_blank'>
                    <ProjectsIcon src={Icon7} />
                    <ProjectsH2>Comic Book App</ProjectsH2>
                    <ProjectsP>Key: Git, JavaScript, ReactJS, React Bootstrap</ProjectsP>
                </ProjectsCard>
                <ProjectsCard href='https://pokemon-deck.netlify.app' target='_blank'>
                    <ProjectsIcon src={Icon8} />
                    <ProjectsH2>Pokemon App</ProjectsH2>
                    <ProjectsP>Key: CSS3, Rest API, JavaScript</ProjectsP>
                </ProjectsCard>
                <ProjectsCard href='https://melbourne-visit.netlify.app/' target='_blank'>
                    <ProjectsIcon src={Icon9} />
                    <ProjectsH2>Visit Melbourne Website</ProjectsH2>
                    <ProjectsP>Key: CSS3, SASS, Git, JavaScript, JSON, jQuery, Google Firebase</ProjectsP>
                </ProjectsCard>
            </ProjectsWrapper>    
        </ProjectsContainer>
    )
}

export default Projects
