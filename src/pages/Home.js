import React, {useState} from 'react'
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import HomeSection from '../components/Home/HomeSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Info from '../components/InfoSection/Info';
import Navbar from '../components/Navbar/Navbar'
import Projects from '../components/Projects/Projects';
import Sidebar from '../components/Sidebar/Sidebar'
import Technology from '../components/Technology/Technology';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    }

    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle}/>
          <HomeSection/>
          <Info {...homeObjOne}/>
          {/* <Info {...homeObjTwo}/> */}
          <Technology/>
          <Projects/>
          {/* <Info {...homeObjThree}/> */}
          <Contact/>
          <Footer/>
        </>
    )
}

export default Home
