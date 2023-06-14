import React,{useEffect} from 'react'
import '../css/footer.css'
import logoImg from "../images/logo.jpg";
import {TiSocialFacebook} from 'react-icons/ti'
import {FaLinkedin} from 'react-icons/fa';
import {AiOutlineTwitter, AiFillYoutube} from 'react-icons/ai';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () =>{
    useEffect(() => {
        Aos.init({
          duration: 2000
        })
      })
    return(
    <div className='footer'>
        <div className='sectionContainer container grid'>
            <div  data-aos="fade-up" data-aos-duration='2500' className='gridOne'>
                <div className='logoDiv'>
                    <img src={logoImg} alt="" className='Logo'/>
                </div>
                <p className='p-footer'>Changing lives, one step at a time.</p>
                <div className='socialIcon flex'>
                    <TiSocialFacebook className='icons'/>
                    <AiOutlineTwitter className='icons'/>
                    <AiFillYoutube className='icons'/>
                    <FaLinkedin className='icons'/>
                </div>
                </div>
                <div  data-aos="fade-up" data-aos-duration='2500' className='footerLinks'>
                    <span className="linkTitle">Information</span>
                    <li>
                       
                        <a className= "footer-link" href="/">About Us</a>
                    </li>
                    <li>
                        
                        <a className= "footer-link"href="/">Our Mission</a>
                    </li>
                    <li>
                        <a className= "footer-link"href="/">Our Team</a>
                    </li>
                    <li>
                        <a className= "footer-link"href="/">Partnerships</a>
                    </li>
                    <li>
                        <a className= "footer-link"href="/">Blog</a>
                    </li>

                </div>
                <div  data-aos="fade-up" data-aos-duration='2500' className='footerLinks'>
                    <span className="linkTitle">Quick Guide</span>
                    <li>
                        <a className= "footer-link"href="/">How to Donate</a>
                    </li>
                    <li>
                        <a className= "footer-link"href="/">Volunteer Opportunities</a>
                    </li>
                    <li>
                        <a className= "footer-link"href="/">Membership</a>
                    </li>
                    <li>
                        <a className= "footer-link"href="/">Imapct Reports</a>
                    </li>
                    <li>
                        <a className= "footer-link"href="/">Ways to Get Involved</a>
                    </li>
                </div>
                <div  data-aos="fade-up" data-aos-duration='2500' className='footerLinks'>
                    <span className="linkTitle">Information</span>
                    <li>
                        <a className= "footer-link"href="/">Testimonials</a>
                    </li>
                    <li>
                        <a className= "footer-link"href="/">Events</a>
                    </li>
                    <li>
                        <a className= "footer-link"href="/">News and Updates</a>
                    </li>
                    <li>
                        <a className= "footer-link"href="/">Careers</a>
                    </li>
                    <li>
                        <a className= "footer-link"href="/">FAQs</a>
                    </li>

                </div>
            </div>
        <div className="copyRightDiv flex">
        <p>&copy; 2023 Hope Catalysts. All Rights Reserved. | Designed and developed by Manasa Ramamurthy | </p>
  <br/><p><a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-use">Terms of Use</a></p>
        </div>
    </div>
)}

export default Footer;