import React from 'react';
import style from "../css/style.css";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
const Testimonials = () => {
  return (
    <div>
          <section className="how-use-main" id='testimonial'>
        <div className="container">
            <h3 className="text-center">Benefits with Premium plain</h3>
            <div className="row mt-md-3 how-to-use">
                <div className="col-xs-12 col-sm-12 col-md-4">
                    <div className="gx-3 shadow p-4 text-center">
                        <img src={img1} className="img-fluid w-25" alt=""/>
                        <p className="pt-md-3"> Additional space on mail Disk:
                            200 GB, 1 TB, or 3 TB</p>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4">
                    <div className="gx-3 shadow p-4 text-center">
                        <img src={img2} className="img-fluid w-25" alt=""/>
                        <p className="pt-md-3">Unlimited photo and video
                            uploads from your phone</p>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4">
                    <div className="gx-3 shadow p-4 text-center">
                        <img src={img3} className="img-fluid w-25" alt=""/>
                        <p className="pt-md-3">All services without ads</p>
                    </div>
                </div>
            </div>
            <div className="row mt-md-3 how-to-use">
                <div className="col-xs-12 col-sm-12 col-md-4">
                    <div className="gx-3 shadow p-4 text-center">
                        <img src={img4} className="img-fluid w-25" alt=""/>
                        <p className="pt-md-3">Confirmation of new mailing lists</p>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4">
                    <div className="gx-3 shadow p-4 text-center">
                        <img src={img5} className="img-fluid w-25" alt=""/>
                        <p className="pt-md-3">Access settings
                            for email files</p>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4">
                    <div className="gx-3 shadow p-4 text-center">
                        <img src={img6} className="img-fluid w-25" alt=""/>
                        <p className="pt-md-3">A custom email domain
                            instead of @yandex.ru</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}

export default Testimonials;
