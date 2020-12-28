import React, {Component} from "react";
import {Link} from "react-router-dom"
import ReactWhatsapp from 'react-whatsapp';
import download from "../../../assets/images/download.svg";
import facebook from "../../../assets/images/facebook.svg";
import whatsapp from "../../../assets/images/whatsapp.svg";
import insta from "../../../assets/images/insta.svg";
import twitter from "../../../assets/images/twitter.svg";
import call from "../../../assets/images/call.svg";
import googleplaybadge from "../../../assets/images/google-play-badge.png"

  class Footer extends Component{

    render(){

      return (
           <div className="footer">
                <div className="footer__top">
                       <div className="footer__top_text">
                            <div className="footer__top_text-big">EXIM</div>
                            <div className="footer__top_text-small">EDUCATION</div>
                            <div className="footer__top_text-smaller">
                                Exim Education with its exclusive mastery aims to<br/>
                                hasten  the globalization of India and build an<br/>
                                International business by educating and brushing<br/>
                                exim skills of the working class.
                            </div>
                        </div>
                        <div className="footer__top_social">
                            <div className="footer__top_social-heading">Social Media</div>
                            <div  className="footer__top_social-icons">
                               <a href=""><img src={facebook} alt=""/></a>
                               <a href=""><img src={twitter} alt=""/></a>
                               <ReactWhatsapp element="a" number="+918517885555" message="message" >
                                   <a href=""><img src={whatsapp} alt=""/></a>
                               </ReactWhatsapp>
                               <a href="tel://+918517885555"><img src={call} alt=""/></a>
                               <a href="https://www.linkedin.com/company/eduports"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                               <a href="https://instagram.com/eximeducation.com_"><img src={insta} alt=""/></a>
                            </div>
                            <div data-aos-once="true" data-aos="fade-right"><a rel="noreferrer" target="_blank" href="https://play.google.com/store/apps/details?id=co.kevin.pbhaa" className="landing__2_text-btn"><img className="landing__2_text-btn--icon" src={googleplaybadge} alt=""/></a></div>
                        </div>
                        <div className="footer__top_social">
                            <div className="footer__top_social-heading">About Us</div>
                            <div  className="footer__top_social-icons">
                               <Link to="/"><div>Terms</div></Link>
                               <Link to="/blogs/main"><div>Blogs</div></Link>
                               <Link to="/"><div>Privacy</div></Link>
                            </div>
                        </div>
                </div>
                <div className="footer__middle">
                    <div><a href="tel://+918517885555"><i class="fa fa-phone" aria-hidden="true"></i> +91 8517885555</a></div>
                    <div><i class="fa fa-envelope" aria-hidden="true"></i> hello@eximeducation.com</div>
                    <div><i class="fa fa-map-marker" aria-hidden="true"></i> 406B,Glitz Mall,Marine Line ,Mumbai 400002</div>
                </div>
                <div className="footer__bottom">
                    Copyright  &copy;   2020 Vedship Innovations, pvt.Ltd.
                </div>
           </div>
      )
    }
  }


 export default Footer;
