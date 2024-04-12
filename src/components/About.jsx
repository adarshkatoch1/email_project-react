import React from 'react';
import style from "../css/style.css";
import Mention from "../assets/Mention.jpg";
import Button from '@mui/material/Button';
const About = () => {
  return (
    <div>
        <section className="about-main" id='about'>
        <div className="container">
            <h3 className="text-center">About Us</h3>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6">
                <p>At EMAIL, we believe in the power of personal communication. Our mission is to
                        provide a platform where individuals can monetize their email correspondence ethically and
                        securely. Founded by a team passionate about empowering content creators, professionals, and
                        individuals alike, we strive to create an environment where your valuable insights are valued
                        and compensated fairly. Join us in revolutionizing the way we perceive and leverage personal
                        emails.</p>
                        <p>Join us at EMAIL and discover the untapped potential of your email 
                            communication. Together, let's redefine the way we value and monetize personal connections.</p>
                            <Button variant='contained' className="btn">Read more</Button>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6">
                    <img src={Mention} className=" about-img float-end" alt=""/>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About
