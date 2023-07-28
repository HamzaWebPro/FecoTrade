import React, { useState } from 'react';

import PageLayout from './../layouts/PageLayout';
const initialValues = {
    email: "",
    fullName: "",
    password: "",
  }

function ContactUs(){
    const [isSubmit, setIsSubmit] = useState(false)
    const [values, setValues] = useState(initialValues);

    const handleValues = (e) =>{
        setValues({
          [e.target.name]: e.target.value
        })
      }

    const handleSubmit = ()=> {
        setIsSubmit(true)

        setValues({
            email: "",
            fullName: "",
            password: "",
            fname: "",
            lname: "",
            num: "",
            msg: ""
          })
    }

    

      
    return(
        <>
            <div className="page-content">
                <PageLayout desc={false} pageTitle="Contact Us" />
                <section className="content-inner contact-form-wraper style-1">
			        <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-5 col-lg-5 m-b30">
                                <div className="info-box">
                                    <div className="info">
                                        <h2>Contact Information</h2>
                                        <p className="font-18">Fill up the form and our team will get back to you within 24 hours.</p>
                                    </div>
                                    
                                    <div className="widget widget_about">
                                        <div className="widget widget_getintuch">
                                            <ul>
                                                <li>
                                                <i class="fa-brands fa-telegram"></i>
                                                    <span>@fecotrade</span> 
                                                </li>
                                                <li>
                                                    <i className="fa fa-envelope"></i> 
                                                    <span>support@fecotrade.com</span>
                                                </li>
                                                <li>
                                                    <i className="fas fa-map-marker-alt"></i>
                                                    <span>Address: Prospekt Krasnogo Znameni, Vladivostok City, Russia</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>


                                    <div className="social-box dz-social-icon style-3">
                                        <h6>Our Socials</h6>
                                        <ul className="social-icon">
                                            <li><a className="social-btn" target="_blank" rel="noreferrer" href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a></li>
                                            <li><a className="social-btn" target="_blank" rel="noreferrer" href="https://t.me/fecotrade?fbclid=IwAR21inxpS5dtE-pXqB1kd1NWFWyQJFIiWf09Ig2WA8rUPs8hM9tYM7rGzhA"><i class="fa-brands fa-telegram"></i></a></li>
                                            <li><a className="social-btn" target="_blank" rel="noreferrer" href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a></li>
                                            <li><a className="social-btn" target="_blank" rel="noreferrer" href="https://youtube.com/"><i className="fab fa-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                                
                            <div className="col-xl-7 col-lg-7">
                                <div className="contact-box">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="mb-4">
                                                <h2 className="mb-0">Get In touch</h2>
                                                <p className="mb-0 font-18 text-primary">We are here for you. How we can help?</p>
                                            </div>
                                            <form className="dzForm" onSubmit={(e) => e.preventDefault()}>
                                                <div className="dzFormMsg"></div>
                                                <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                                                
                                                <div className="row">
                                                    <div className="col-xl-6 mb-3 mb-md-4">
                                                        <input name="dzFirstName"  type="text" className="form-control" placeholder="First Name"  value={values.fname} onChange={handleValues} />
                                                    </div>
                                                    <div className="col-xl-6 mb-3 mb-md-4">
                                                        <input name="dzLastName" type="text" className="form-control" placeholder="Last Name" value={values.lname} onChange={handleValues} />
                                                    </div>
                                                    <div className="col-xl-6 mb-3 mb-md-4">
                                                        <input name="dzEmail"  type="text" className="form-control" placeholder="Email Address" value={values.email} onChange={handleValues}/>
                                                    </div>
                                                    <div className="col-xl-6 mb-3 mb-md-4">
                                                        <input name="dzPhoneNumber"  type="text" className="form-control" placeholder="Phone No."  value={values.num} onChange={handleValues} />
                                                    </div>
                                                    <div className="col-xl-12 mb-3 mb-md-4">
                                                        <textarea name="dzMessage"  className="form-control" placeholder="Message" value={values.msg} onChange={handleValues} ></textarea>
                                                    </div>
                                                    {/* <div className="col-xl-12 mb-3 mb-md-4">
                                                        <div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                                                        <input className="form-control d-none" style="display:none;" data-recaptcha="true"  data-error="Please complete the Captcha" />
                                                    </div> */}
                                                    <div className="col-xl-12">
                                                        <button name="submit" type="submit" value="Submit" className="btn btn-primary" onClick={handleSubmit}>Submit Now</button>
                                                        {isSubmit && 
                                                            <div class="alert alert-success col-lg-6 text-center mt-3" role="alert">
                                                            Thank you for your message.
                                                          </div>
                                                          
                                                        }						
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default ContactUs;
