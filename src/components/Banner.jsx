import React from 'react'
import style from "../css/style.css";
import banner from "../assets/banner-img.jpg";
import Button from '@mui/material/Button';
const Banner = () => {
  return (
    <div>
          <section>
        <div className="container">
            <div className="row banner" id="home">
                <div className="col-xs-12 col-sm-12 col-md-6">
                    <h1><span className="banner-text">Unlock </span> the Value of Your Emails</h1>
                    <p>Welcome to EMAIL, where we're redefining the way you think about email. Our platform empowers you to transform your everyday emails into a valuable source of income. Whether you're a professional, content creator, influencer, or expert in your field, your emails hold untapped potential. Automatically scan for viruses and spam, and easily manage newsletter subscriptions.</p>
                    <Button type="button" variant='contained' className="btn">Get Your Mail</Button>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6">
                    <img src={banner} className="img-fluid float-end" alt=""/>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Banner;
