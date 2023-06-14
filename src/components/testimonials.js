import React, {useEffect} from 'react'
import { BsBookmarkCheck, BsShieldCheck } from 'react-icons/bs'
import {RxCalendar} from 'react-icons/rx'
import "../css/testimonials.css"
import Aos from 'aos'
import 'aos/dist/aos.css'

function Testimonials() {
    useEffect(() => {
        Aos.init({
          duration: 2000
        })
      })
  return (
    <div className='info section'>
        <div className='infoContainer container'>
            <div className='titleDiv flex'>
                <h2 data-aos='fade-right' data-aos-duration='2500'>Voices of Impact: Testimonials from Our Beneficiaries</h2>
                <button data-aos='fade-right' data-aos-duration='2500'className='btn'>
                    View All
                </button>
            </div>
            <div data-aos='fade-down' data-aos-duration='2500'className='cardsDiv grid'>
                <div className='singleCard grid'>
                    <div className='iconDiv flex'>
                        <RxCalendar className='icon'/>
                    </div>
                    <span className='cardTitle'>John Doe, Volunteer</span>
                    <p>Volunteering with Hope Catalysts has been a truly transformative experience. </p>
                </div>
                <div className='singleCard grid'>
                    <div className='iconDiv flex'>
                        <BsShieldCheck className='icon'/>
                    </div>
                    <span className='cardTitle'>Jane Smith, Beneficiary</span>
                    <p>The support and guidance I received from Hope Catalysts during a difficult time in my life was invaluable."</p>
                </div>
                <div className='singleCard grid'>
                    <div className='iconDiv flex'>
                        <BsBookmarkCheck className='icon'/>
                    </div>
                    <span className='cardTitle'>Sarah Brown, Program Participant</span>
                    <p>"The training programs offered by Hope Catalysts have been instrumental in enhancing my skills."</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Testimonials
