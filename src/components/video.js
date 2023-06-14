import {React, useEffect} from "react";
import Books from '../images/video.mp4'
import '../css/video.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Video = () =>{
        useEffect(() => {
          Aos.init({
            duration: 2000
          })
        })

    return(
        <div className="video flex container">
            <div className="mainText">
                <h1 data-aos="fade-up" data-aos-duration='2000'>Igniting Change, Transforming Lives.</h1>
            </div>
            <div data-aos='fade-down' data-aos-duration='2000'className="videoImages flex">
                <div className="videoDiv">
                    <video src={Books} autoPlay muted loop className="video-mp4"></video>
                </div>
                <div className="quote">
                    <h1>We rise by lifting others.<br />- Robert Ingersoll</h1>
                </div>
            </div>
        </div>

    )
}

export default Video;