import React from "react";
import style from "../css/style.css";
import choose from "../assets/choose-us.png";

const Whychoose = ()=> {
    return (
        <>
         <section className="choose-us-main" id='whychoose'>
        <div className="container">
            <h3 className="text-center">Why Choose Us</h3>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-lg-6 choose-img">
                    <img src={choose} className=" img-fluid" alt=""/>
                </div>
                <div className="col-xs-12 col-sm-12 col-lg-6">
                    <div className="row mt-md-3 choose-us">
                        <div className="col-xs-12 col-sm-12 col-md-6">
                            <div className="choose-card ">
                                <h4>Seamless Monetization</h4>
                                <p className="pt-md-3">At EMAIL, we understand that monetizing your emails shouldn't be complicated. That's why we've designed our platform to offer a seamless experience from start to finish.</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6">
                            <div className="choose-card">
                                <h4>Flexibility & Control</h4>
                                <p className="pt-md-3">With EMAIL, you have full control over your pricing, content, and subscription terms. Tailor your offerings to suit your audience and maximize your earning potential.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-md-3 choose-us">
                        <div className="col-xs-12 col-sm-12 col-md-6">
                            <div className="choose-card ">
                                <h4>Secure & Reliable</h4>
                                <p className="pt-md-3">Our platform prioritizes the security and privacy of your email communication. You can trust us to handle your data with care and integrity, ensuring a safe experience for both you and your subscribers.</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6">
                            <div className="choose-card ">
                                <h4>Community & Networking</h4>
                                <p className="pt-md-3">Join a vibrant community of fellow creators, professionals, and experts who are also leveraging the power of email monetization. Share insights, collaborate, and learn from one another to grow your email business.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
        </>
    )
}

export default Whychoose;