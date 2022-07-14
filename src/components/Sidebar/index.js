import React from 'react'
import './index.scss'
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEnvelopeCircleCheck, faFileCode, faGraduationCap, faHomeUser, faNewspaper, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => {
  
    return <>
    <div className='nav-bar'>

        <Link className='logo' to='/'>
            <img className='sub-logo' src={LogoSubtitle} alt ='LogoDos' />
        </Link>

        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
            <FontAwesomeIcon icon={faNewspaper} color = '#4d4d4e' />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className='home-link' to='/home'>
            <FontAwesomeIcon icon={faHomeUser} color = '#4d4d4e' />
            </NavLink>

            <NavLink exact='true' activeclassname='active' to='/'>
            <FontAwesomeIcon icon={faHomeUser} color = '#4d4d4e' />
            </NavLink>

            <NavLink exact='true' activeclassname='active' to='/'>
            <FontAwesomeIcon icon={faHomeUser} color = '#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blanck' rel='noreferrer' href='https://www.linkedin.com/in/ilichbetancourtr/'>
                <FontAwesomeIcon icon={faLinkedin} color = '#4d4d4e' />
                </a>
            </li>
            
        </ul>
        
    </div>
    </>
}

export default Sidebar;