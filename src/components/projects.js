import React, {useEffect} from 'react'
import ImageGrid from '../images/collage2.jpeg'
import "../css/projects.css"
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Projects() {
    useEffect(() => {
        Aos.init({
          duration: 2000
        })
      })
  return (
    <div className='lounge container section'>
        <div className='sectionContainer grid'>
            <div data-aos='fade-up' data-aos-duration='2500' className='imgDiv'>
                <img src={ImageGrid} alt='collage'/>
            </div>
            <div data-aos='fade-right' data-aos-duration='2500' className='textDiv'>
                <h2 >Our Impactful Projects</h2>
                <div className='grids grid'>
                <div className='singleGrid'>
                    <span className='gridTitle projects'>
                    Empowering Youth through Education
                    </span>
                    <p className='projects'>
                    We provide educational opportunities and support to underprivileged youth, enabling them to pursue their dreams and break the cycle of poverty.
                    </p>
                </div>

                <div className='singleGrid'>
                    <span className='gridTitle projects'>
                    Clean Water for All
                    </span>
                    <p className='projects'>
                    Our initiative focuses on providing clean and safe drinking water to remote villages, improving the health and well-being of the community members.
                    </p>
                </div>

                <div className='singleGrid'>
                    <span className='gridTitle projects'>
                    Sustainable Agriculture for Farmers
                    </span>
                    <p className='projects'>
                    We empower farmers with sustainable agricultural practices, training, and resources, ensuring food security and promoting environmentally friendly farming methods.
                    </p>
                </div>

                <div className='singleGrid'>
                    <span className='gridTitle projects'>
                    Healthcare Access for Rural Communities
                    </span>
                    <p className='projects'>
                    We strive to improve healthcare access in remote rural areas by setting up mobile medical clinics, providing essential medical services, and conducting health awareness campaigns.
                    </p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
