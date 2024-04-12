import React from 'react';
import style from "../css/style.css";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div>
       <footer className="text-lg-start" style={{ backgroundColor: '#f8f9fa', marginTop: '50px' }}>
        <div className="container">
            <div className="row pt-4">

                <div className="col-md-3 col-lg-3 col-xl-3 mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">
                        <img src={Logo} className="img-fluid w-25" alt=""/>
                    </h6>
                    <p>
                        Connect with us and stay updated on the latest news, tips, and offers. Join our community and start monetizing your emails today.
                    </p>
                </div>


                <hr className="w-100 clearfix d-md-none" />


                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                    <p>
                        <a href="#home" className="text-dark ">Home</a>
                    </p>
                    <p>
                        <a href="#about-us" className="text-dark ">About us</a>
                    </p>
                    <p>
                        <a href="#testimonial" className="text-dark ">Testimonials</a>
                    </p>
                    <p>
                        <a href="#account" className="text-dark ">Account</a>
                    </p>
                </div>


                <hr className="w-100 clearfix d-md-none" />


                <hr className="w-100 clearfix d-md-none" />


                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                    <p><i className="fa fa-home mr-3" aria-hidden="true"></i> New York, NY 10012, US</p>
                    <p><i className="fa fa-envelope-o mr-3" aria-hidden="true"></i> info@gOur mail</p>
                    <p><i className="fa fa-phone mr-3" aria-hidden="true"></i> + 01 234 567 88</p>
                    <p><i className="fa fa-print mr-3" aria-hidden="true"></i> + 01 234 567 89</p>
                </div>
            </div>
            <hr className="my-3"/>

            <section className="p-3 pt-0">
                <div className=" align-items-center">

                    <div className="p-3 text-center">
                       <a> © 2024 Copyright:All rights reserved.</a>
                    </div>

                </div>
            </section>
        </div>
    </footer>
    </div>
  )
}

export default Footer;
