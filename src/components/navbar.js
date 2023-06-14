import React, {useState} from 'react'
import {SiConsul} from 'react-icons/si'
import {BsPhoneVibrate} from 'react-icons/bs'
import { AiOutlineGlobal } from 'react-icons/ai'
import {CgMenuGridO} from 'react-icons/cg'
import LogoImg from "../images/logo.jpg"
import '../css/navbar.css'


const Navbar = () =>{

    const [active, setActive] = useState('navBarMenu')
    const showNavBar = ()=> {
        setActive('navBarMenu showNavBar')
    }
    const removeNavBar = ()=> {
        setActive('navBarMenu')
    }


    return(
        <div className='navBar flex'>
            <div className='navBarOne flex'>
                <div>
                    <SiConsul className='icon'/>
                </div>
                <div className='none flex'>
                    <li className='flex'><BsPhoneVibrate className='icon'/>Support</li>
                    <li className='flex'><AiOutlineGlobal className='icon'/> Languages</li>

                </div>
                <div className='atb flex'>
                    <span>Sign In</span>
                    <span>Sign Out</span>
                </div>
            </div>
            <div className='navBarTwo flex'>
                <div className='logoDiv'>
                    <img src={LogoImg} className='logo' alt='logo'/>
                </div>
                <div className={active}>
                    <ul className='menu flex'>
                        <li onClick={removeNavBar} className='listItem'>Home</li>
                        <li onClick={removeNavBar} className='listItem'>About Us</li>
                        <li onClick={removeNavBar} className='listItem'>Projects</li>
                        <li onClick={removeNavBar} className='listItem'>Volunteer</li>
                        <li onClick={removeNavBar} className='listItem'>Contact Us</li>
                    </ul>
                    <button onClick={removeNavBar} className='btn flex btnOne'>
                        Donate
                    </button>
                    <button className='btn flex btnTwo'>
                        Donate
                    </button>
                </div>
                <div onClick={showNavBar} className='none toggleIcon'>
                    <CgMenuGridO className='icon'/>
                </div>
            </div>
        </div>
    )
}

export default Navbar