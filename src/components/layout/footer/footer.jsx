import React, {Component} from "react";
import ReactWhatsapp from 'react-whatsapp';
import download from "../../../assets/images/download.svg";
import facebook from "../../../assets/images/facebook.svg";
import whatsapp from "../../../assets/images/whatsapp.svg";
import insta from "../../../assets/images/insta.svg";
import twitter from "../../../assets/images/twitter.svg";
import call from "../../../assets/images/call.svg";

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
                               <a href=""><img src={call} alt=""/></a>
                               <a href=""><img src={insta} alt=""/></a>
                            </div>
                            <button className="landing__2_text-btn">Download <img className="landing__2_text-btn--icon" src={download} alt=""/></button>
                        </div>
                        <div className="footer__top_social">
                            <div className="footer__top_social-heading">About Us</div>
                            <div  className="footer__top_social-icons">
                               <a href=""><div>Terms</div></a>
                               <a href=""><div>Blogs</div></a>
                               <a href=""><div>Privacy</div></a>
                            </div>
                        </div>
                </div>
                <div className="footer__middle">
                    <div>Contact  :   8517885555</div>
                    <div>Mail :  hello@eximeducation.com</div>
                    <div>406B,Glitz Mall,Marine Line ,Mumbai 400002</div>
                </div>
                <div className="footer__bottom">
                    Copyright  C   2020 Vedship Innovations, pvt.Ltd.
                </div>
           </div>
      )
    }
  }


 export default Footer;
