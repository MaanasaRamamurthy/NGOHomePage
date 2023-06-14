import React, {useEffect} from 'react';
import "../css/aboutus.css";
import aboutImg from "../images/collage.jpeg"
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  })

  const styles = {
    backgroundColor: "var(--light-black-color)"
  }
  return (
    <div style={styles}>
      <div className='container'>
        <div data-aos="fade-right" data-aos-duration='2500' className='section-title about-title'>
          <p className='about-bookhub'>About Us</p>
          <h2>Empowering lives, creating impact. Join us in making a difference.</h2> 
        </div>
        <div className='about-content grid'>
          <div data-aos="fade-up" data-aos-duration='2500' className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <div data-aos="fade-right" data-aos-duration='2500' className='about-points'>
              <p className="about-heading">Holistic Empowerment</p>
              <p className='fs-17'> We believe in empowering individuals and communities by addressing their social, economic, and educational needs. Through comprehensive programs, we aim to uplift people, enhance their skills, and provide opportunities for self-sufficiency.</p>
            </div>
            <div data-aos="fade-right" data-aos-duration='2500' className='about-points'>
              <p className="about-heading">Collaborative Partnerships</p>
              <p className='fs-17'>We forge strategic partnerships with local communities, government agencies, nonprofits, and businesses to maximize our impact. By working together, we leverage collective resources, expertise, and networks to create sustainable solutions.</p>
            </div>
            <div data-aos="fade-right" data-aos-duration='2500' className='about-points'>
              <p className="about-heading">Sustainable Development</p>
              <p className='fs-17'> We prioritize sustainable development practices that preserve the environment, conserve natural resources, and promote eco-friendly solutions. Our initiatives are designed to have a positive and lasting impact, both socially and environmentally.</p>
            </div>
            <div data-aos="fade-right" data-aos-duration='2500' className='about-points'>
              <p className="about-heading">Advocacy and Policy Change</p>
              <p className='fs-17'> We actively advocate for policies and reforms that address systemic issues, promote social justice, and protect the rights of vulnerable populations. By raising awareness and engaging in policy discussions, we strive for long-term, transformative change.</p>
            </div>
            <div data-aos="fade-right" data-aos-duration='2500' className='about-points'>
              <p className="about-heading">Impact Measurement and Evaluation</p>
              <p className='fs-17'>  We place a strong emphasis on monitoring and evaluating the effectiveness of our programs and interventions. Through rigorous impact assessments, we ensure accountability, learn from our experiences, and continuously improve our strategies.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default About
