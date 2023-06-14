import React, {useEffect} from "react";
import '../css/services.css'
import Book1 from '../images/Poverty_education.jpg'
import Author1 from '../images/education.png'
import Book2 from '../images/health-photo.jpg'
import Author2 from '../images/health.jpg'
import Book3 from '../images/livelihood -photo.jpg'
import Author3 from '../images/livelihood.jpg'
import Book4 from '../images/women-photo.jpg'
import Author4 from '../images/women.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const writers = [
    {
        id: 1,
        bookImage: Book1,
        writerImage: Author1,
        writerName: 'EDUCATION',
        socialLink:'Illuminating minds through education: our NGO breaks barriers, inspires learning, and creates pathways to a brighter future.'
    },
    {
        id: 2,
        bookImage: Book2,
        writerImage: Author2,
        writerName: 'HEALTH',
        socialLink:'Promoting health for all: our NGO drives access to healthcare, education, and prevention, fostering healthier communities.'
    },
    {
        id: 3,
        bookImage: Book3,
        writerImage: Author3,
        writerName: 'LIVELIHOOD',
        socialLink:'Transforming lives through sustainable livelihoods: our NGO empowers communities with skills and resources for lasting economic independence.'
    },
    {
        id: 4,
        bookImage: Book4,
        writerImage: Author4,
        writerName: 'WOMEN EMPOWERMENT',
        socialLink:"Unleashing women's potential: our NGO empowers, uplifts, and advocates for gender equality."
    }
]
function Services () {
    useEffect(() => {
        Aos.init({
          duration: 2000
        })
      })
    return(
        <div className="popular container section">
            <div className="sectionContainer">
                <h2 data-aos='fade-down' data-aos-duration='2500'>Empowering Initiatives</h2>
                <div className="popularContainer grid">
                    {
                        writers.map(({id, bookImage, writerImage, writerName, socialLink})=>{
                            return(
                                <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singleWriter">
                                    <img src={bookImage} alt="" className="bookImage"/>
                                    <div className="writerDetails">
                                        <div className="writerPicture">
                                            <img src={writerImage} alt="" className="writerImage"/>
                                        </div>
                                        <div className="writerName">
                                            <h1>{writerName}</h1>
                                            <p className="fs-17">{socialLink}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Services