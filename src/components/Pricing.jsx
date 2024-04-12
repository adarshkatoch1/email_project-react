import React from 'react';
import style from "../css/style.css";
import Button from '@mui/material/Button';

const Pricing = () => {
  return (
    <div>
       <section className="pricing-main" id='pricing'>
        <div className="container">
            <h3 className="text-center">Pricing</h3>
            <div className="row pricing">
                <div className="col-xs-12 col-sm-12 col-md-4">
                    <div className="gx-3 pricing-card shadow p-4">
                        <p className="month-text">1 month</p>
                        <h4>Starter Plan</h4>
                        <p className="">Email that helps build your brand business.</p>
                        <h3>$12.35</h3>
                        <Button variant='contained'  className="button">ADD TO CARD</Button>
                        <p className="icon-text"><i className="fa fa-envelope fs-4" aria-hidden="true"></i><span className="ms-3">8
                                GB storage for email, contacts and calendars</span></p>
                        <p className="icon-text"><i className="fa fa-at fs-4" aria-hidden="true"></i><span className="ms-3">Unique
                                email address instead of you@name.com</span></p>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4">
                    <div className="gx-3 pricing-card shadow p-4">
                        <p className="month-text">6 month</p>
                        <h4>Professional Plan</h4>
                        <p className="">Email that helps build your brand business.</p>
                        <h3>$50.35</h3>
                        <Button variant='contained' className="button">ADD TO CARD</Button>
                        <p className="icon-text"><i className="fa fa-envelope fs-4" aria-hidden="true"></i><span className="ms-3">12
                                GB storage for email, contacts and calendars</span></p>
                        <p className="icon-text"><i className="fa fa-at fs-4" aria-hidden="true"></i><span className="ms-3">Unique
                                email address instead of you@name.com</span></p>
                        <p className="icon-text"><i className="fa fa-calendar-check-o fs-4" aria-hidden="true"></i><span
                                className="ms-3">Share calendars and contacts with your team</span></p>

                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4">
                    <div className="gx-3 pricing-card shadow p-4">
                        <p className="month-text">12 month</p>
                        <h4>Enterprise Plan</h4>
                        <p className=""> Email that helps build your brand business.</p>
                        <h3>$102.35</h3>
                        <Button variant='contained' className="button">ADD TO CARD</Button>
                        <p className="icon-text"><i className="fa fa-envelope fs-4" aria-hidden="true"></i><span className="ms-3">30
                                GB storage for email, contacts and calendars</span></p>
                        <p className="icon-text"><i className="fa fa-at fs-4" aria-hidden="true"></i><span className="ms-3">Unique
                                email address instead of you@name.com</span></p>
                        <p className="icon-text"><i className="fa fa-calendar-check-o fs-4" aria-hidden="true"></i><span
                                className="ms-3">Share calendars and contacts with your team</span></p>
                        <p className="icon-text"><i className="fa fa-tasks fs-4" aria-hidden="true"></i><span
                                className="ms-3">Assign tasks to your team members</span></p>

                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Pricing;
