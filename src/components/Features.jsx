import React from 'react';
import style from "../css/style.css";
import howimg from "../assets/how-help.png";
const Features = () => {
  return (
    <div>
      <section className="how-help-main" id='feature'>
      <div class="container">
            <h3 class="text-center" id="features">Features</h3>
            <div class="row how-help">
                <div class="col-xs-12 col-sm-12 col-md-6">
                    <img src= {howimg} class="img-fluid Features-img" alt="" />
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6">
                    <p><i class="fa fa-check" aria-hidden="true"></i><span class="ms-2"><b>Secure Platform:</b> Our platform ensures the privacy and security of your emails and transactions.</span></p>
                    <p><i class="fa fa-check" aria-hidden="true"></i><span class="ms-2"><b>Flexible Pricing:</b> Set your own prices and terms, giving you full control over your earning potential.</span></p>
                    <p><i class="fa fa-check" aria-hidden="true"></i><span class="ms-2"><b>User-Friendly Interface:</b> Our intuitive interface makes it easy to list and manage your email offerings.</span></p>
                    <p><i class="fa fa-check" aria-hidden="true"></i><span class="ms-2"><b>Audience Insights:</b> Gain valuable insights into your subscribers' preferences and behaviors to tailor your content effectively.</span></p>
                    <p><i class="fa fa-check" aria-hidden="true"></i><span class="ms-2"><b>Payment Processing:</b> Receive payments seamlessly through secure payment gateways.</span></p>
                    <p><i class="fa fa-check" aria-hidden="true"></i><span class="ms-2"><b>Monetization Opportunities:</b> Unlock the potential of your email communication by selling personalized content to interested subscribers.</span></p>

                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Features;
