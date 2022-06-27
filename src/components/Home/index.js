import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import Loader from 'react-loaders'
import Photo from '../../assets/images/photo.png'

import './index.scss'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['Y', 'i', 'l', 'd', 'i', 'r', 'i', 'm']
    const surnameArray = ['Y', 'a', 'n', 'i', 'k', 'l', 'a', 'r', 'd', 'a', 'n']

    useEffect(() => {
         setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

      
    return(
        <div className= "container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,&nbsp;</span>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m </span>
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={surnameArray}
                idx={23} />
                </h1>
                <h2>Frontend Developer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            
            
            <div className="photo">
            <img src={Photo} alt="Photo" />
          
             </div>
      
            <Loader type="pacman" />
        </div>

        

        
    );
}




export default Home