import React from 'react';
import style from "../css/style.css";

const Howtouse = () => {
  return (
    <div>
        <section className="how-use-main" id='how'>
        <div className="container">
            <h3 className="text-center">How To Use</h3>
            <div className="row mt-md-3 how-to-use">
                <div className="col-xs-12 col-sm-12 col-md-4">
                    <div className="gx-3 shadow p-4 text-center">
                    <h4>Sign Up</h4>
                        <p class="pt-md-3">Create an account on EMAIL to access our platform. It only takes a few moments to sign up, and you'll gain instant access to our suite of tools and resources.</p>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4">
                    <div className="gx-3 shadow p-4 text-center">
                    <h4>Create Your Profile</h4>
                        <p class="pt-md-3">Personalize your profile with relevant information about yourself, your expertise, and the type of email content you'll be offering.</p>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4">
                    <div className="gx-3 shadow p-4 text-center">
                    <h4>Set Your Prices</h4>
                        <p class="pt-md-3">If you ever have questions or need assistance, our dedicated customer support team is here to help. Don't hesitate to reach out for guidance.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Howtouse;
