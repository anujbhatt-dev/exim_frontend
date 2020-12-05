import React, {Component} from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import book from "../../../assets/images/book.svg";
import laptop from "../../../assets/images/laptop.svg";
import reload from "../../../assets/images/reload.svg";
import download from "../../../assets/images/download.svg";
import mobile from "../../../assets/images/mobile.svg";
import section from "../../../assets/images/section.svg";
import clock from "../../../assets/images/clock.svg";
import zoom from "../../../assets/images/zoom.svg";
import crown from "../../../assets/images/crown.svg";
import video from "../../../assets/images/video.svg";
import cell from "../../../assets/images/cell.svg";
import pdf from "../../../assets/images/pdf.svg";
import offline from "../../../assets/images/offline.svg";
import s from "../../../assets/images/s.svg";
import s1 from "../../../assets/images/s-1.svg";
import s2 from "../../../assets/images/s-2.svg";
import s3 from "../../../assets/images/s-3.svg";
import certificate from "../../../assets/images/certificate.svg";
import colab from "../../../assets/images/colab.svg";
import videoAfterColab from "../../../assets/images/videoAfterColab.svg";
import bubble from "../../../assets/images/bubble.svg";
import upArrow from "../../../assets/images/upArrow.svg";
import downArrow from "../../../assets/images/downArrow.svg";
import blueDownload from "../../../assets/images/blueDownload.svg";
import appleDownload from "../../../assets/images/appleDownload.svg";
import longDash from "../../../assets/images/longDash.svg";
import setting from "../../../assets/images/setting.svg";
import globe from "../../../assets/images/globe.svg";
import eximManagement from "../../../assets/images/eximManagement.svg";
import lapi from "../../../assets/images/lapi.svg";
import humanChain from "../../../assets/images/humanChain.svg";

import videoBig from "../../../assets/images/videoBig.svg";
import crownBig from "../../../assets/images/crownBig.svg";
import tv from "../../../assets/images/tv.svg";
import send from "../../../assets/images/send.svg";
import pause from "../../../assets/images/pause.svg";
import gratuate from "../../../assets/images/gratuate.svg";
import play from "../../../assets/images/play.svg";
import orbits from "../../../assets/images/orbits.svg";

import FlipNumbers from 'react-flip-numbers';




import ellipse1 from "../../../assets/images/ellipse1.png";
import video2 from "../../../assets/images/video2.png";
import landing_main from "../../../assets/images/landing-main.svg"

  class Landing extends Component{

    state={
        numbersVisible:false,
        numberValue:6456749,
    }

    componentDidMount=()=>{
     Aos.init({
        duration: 1500,
        delay: 100,
      });

      //number flip
      window.addEventListener('scroll',()=>{


        if(!document.getElementById("numbers"))
         return ;

        let rect= document.getElementById("numbers").getBoundingClientRect();

       
       if( rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth))
        this.setState({numbersVisible:true})
       else if(this.state.numbersVisible)
       this.setState({numbersVisible:false})


    });
   }

    render(){

        console.log()

      return (
          <div className="landing">

               {
                 // screen 1
               }
                <div className="landing__1">
                <div className="landing__1_text">
                    <div className="landing__1_text-biggest">
                       EXIM
                    </div>
                    <div className="landing__1_text-bigger">
                       EDUCATION
                    </div>
                    <div className="landing__1_text-smaller">
                       "Export Import Education"
                    </div>
                    <div className="landing__1_text-smallest">
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus deserunt odio ipsum fuga, cumque voluptatibus veniam laboriosam eius alias laborum odit ut harum iste quam, ad rerum voluptates quae atque.
                    </div>

                    <div className="landing__1_text-btns">
                        <button className="landing__1_text-btns--join">Join Free</button>
                        <button className="landing__1_text-btns--trial">Trail</button>
                    </div>
                </div>
                <img className="landing__1_image" src={landing_main} alt="landing_main"/>
                </div>

               {
               // bar
               }

              <div className="landing__bar">
                   <div className="landing__bar_item">
                       <img className="landing__bar_item-svg" src={book} alt=""/>
                       <div className="landing__bar_item-text">simple video courses to ease global trade</div>
                   </div>
                   <div className="landing__bar_item">
                       <img className="landing__bar_item-svg" src={laptop} alt=""/>
                       <div className="landing__bar_item-text">Live student-teacher interactive session</div>
                   </div>
                   <div className="landing__bar_item">
                      <img className="landing__bar_item-svg" src={reload} alt=""/>
                      <div className="landing__bar_item-text">Get ready for career</div>
                   </div>
              </div>

              {
                // mobile screen
              }

              <div className="landing__2">
                  <div className="landing__2_text">
                       <div className="heading-primary">exim education app</div>
                       <div className="landing__2_text-small">
                          The quick, brown fox jumps over a lazy dog. DJs flock by when<br/>
                          MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds<br/>
                          jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!<br/>
                          Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy<br/>
                          veldt fox. Bright.
                        </div>
                       <button className="landing__2_text-btn">Download <img className="landing__2_text-btn--icon" src={download} alt=""/></button>
                  </div>
                  <img data-aos="flip-right" className="landing__2_image" src={mobile} alt=""/>
              </div>

              <div className="landing__3">
                  <h1 className="heading-primary landing__3_heading">course details</h1>
                  <div className="landing__3_box">
                      <div className="landing__3_box-text">
                          <div className="landing__3_box-text--big">ABOUT EXIM EDUCATION</div>
                          <div className="landing__3_box-text--small">
                            Exim Educationn is training centre of Indiaport.<br/>
                            We tempor invidunt ut labore et dolore magna aliquyam<br/>
                            erat, sed diam voluptua. At vero eos et accusam et justo duo<br/>
                            dolores et ea rebum. Stet clita kasd gubergren, no sea<br/>
                            takimata sanctus est Lorem ipsum dolor sit amet. Lorem<br/>
                            ipsum dolor sit amet, consetetur sadipscing<br/>
                          </div>
                      </div>

                      <div className="landing__3_box-text">
                          <div className="landing__3_box-text--big">ADAPTIVE LEARNING</div>
                          <ul>
                            <li>
                                 <img src={section} alt=""/>
                                 <span>Modules 14</span>
                            </li>
                            <li>
                                 <img src={clock} alt=""/>
                                 <span>Duration 1 month</span>
                            </li>
                            <li>
                                 <img src={zoom} alt=""/>
                                 <span>Zoom call every sunday</span>
                            </li>
                            <li>
                                 <img src={crown} alt=""/>
                                 <span>Premium helpdesk expert</span>
                            </li>
                          </ul>
                      </div>

                      <div className="landing__3_box-text">
                          <div className="landing__3_box-text--big">COURSE FEATURES</div>
                          <ul>
                            <li>
                                 <img src={video} alt=""/>
                                 <span>Video tutorials</span>
                            </li>
                            <li>
                                 <img src={cell} alt=""/>
                                 <span>Mobile application</span>
                            </li>
                            <li>
                                 <img src={pdf} alt=""/>
                                 <span>Powerpoint and PDF</span>
                            </li>
                            <li>
                                 <img src={offline} alt=""/>
                                 <span>Offine mode</span>
                            </li>
                          </ul>
                      </div>
                      <div className="landing__3_box-btn">arrow</div>
                  </div>
              </div>
              {
                // s
              }

              <div className="landing__4">
                  <img className="landing__4_background" src={s} alt=""/>
                  <div className="landing__4_1">
                      <div className="landing__4_1-text">
                           <div className="landing__4_1-text--big heading-primary">SIGN UP</div>
                           <div className="landing__4_1-text--small">Quick sign up with 2 steps</div>
                           <div className="landing__4_1-text--smaller">Download our <span>mobile application</span> and watch the first<br/>two videos for free, and get a peek on new terms<br/>and ways to export and import.</div>
                      </div>
                      <img className="landing__4_1-image" src={s1} alt=""/>
                  </div>

                  <div className="landing__4_2">
                      <img className="landing__4_2-image" src={s2} alt=""/>
                      <div className="landing__4_2-text">
                           <div className="landing__4_2-text--big heading-primary">SIGN UP</div>
                           <div className="landing__4_2-text--small">Quick sign up with 2 steps</div>
                           <div className="landing__4_2-text--smaller">Download our <span>mobile application</span> and watch the first<br/>two videos for free, and get a peek on new terms<br/>and ways to export and import.</div>
                      </div>
                  </div>

                  <div className="landing__4_3">
                      <div className="landing__4_3-text">
                           <div className="landing__4_3-text--big heading-primary">SIGN UP</div>
                           <div className="landing__4_3-text--small">Quick sign up with 2 steps</div>
                           <div className="landing__4_3-text--smaller">Download our <span>mobile application</span> and watch the first<br/>two videos for free, and get a peek on new terms<br/>and ways to export and import.</div>
                      </div>
                      <img className="landing__4_3-image" src={s3} alt=""/>
                  </div>
              </div>

              {
                //exports
              }

              <div className="landing__5">
                   <h1 className="heading-primary landing__3_heading">EXPORT IN INDIA</h1>

                   {
                   //countdown
                   }
                 <div id="numbers" className="landing__5_count">
                        {[... this.state.numberValue+""].map(value=>

                            this.state.numbersVisible?
                            <div className="landing__5_count-digit"> <FlipNumbers height={40} width={40} color="" background="" duration="5" delay="0" play perspective={500} numbers={""+value} /></div>
                            :<div className="landing__5_count-digit">0</div>

                          )}
               </div>

                    <div className="landing__5_text">COUNTDOWN STARTS IN was my birthday day I was just thinking</div>
              </div>

              {
                //Earn
              }

              <div className="landing__6">
                 <h1 className="heading-primary landing__3_heading">Earn an Accredited Qualification</h1>
                 <div className="landing__6_box">
                     <img className="landing__6_box-certificate" src={certificate} alt=""/>
                     <div className="landing__6_box-text">
                         <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br/>sed diam nonumy eirmod tempor invidunt ut labore<br/> et dolore magna aliquyam erat, sed diam </div>
                         <div>Lorem ipsum dolor sit.</div>
                     </div>
                 </div>
              </div>

              {
                //colab
              }

              <div className="landing__7">
                  <img src={colab} alt=""/>
                  <img src={videoAfterColab} alt=""/>
              </div>

              {
                //cousre to success
              }

              <div className="landing__8">
                  <h1 className="heading-primary landing__3_heading">cousre to success</h1>
                  <div className="landing__8_bar">
                      <div className="landing__8_bar-box">
                          <img src={eximManagement} alt=""/>
                          <div>Exim<br/>management</div>
                      </div>
                      <div className="landing__8_bar-box">
                          <img src={humanChain} alt=""/>
                          <div>Freight Forwarder</div>
                      </div>
                      <div className="landing__8_bar-box">
                          <img src={lapi} alt=""/>
                          <div>Merchant<br/>export/importer</div>
                      </div>
                      <div className="landing__8_bar-box">
                          <img src={setting} alt=""/>
                          <div>Logistic manager</div>
                      </div>
                      <div className="landing__8_bar-box">
                          <img src={globe} alt=""/>
                          <div>in CHA</div>
                      </div>
                  </div>
                  <div className="landing__8_box">
                      <div className="landing__8_box-images">
                              <img src={bubble} alt=""/>
                              <div className="landing__8_box-icons">
                                  <img className="landing__8_box-icons--1" src={blueDownload} alt=""/>
                                  <img className="landing__8_box-icons--2" src={longDash} alt=""/>
                                  <img className="landing__8_box-icons--3" src={appleDownload} alt=""/>
                              </div>
                      </div>
                      <div className="landing__8_box-text">
                            <div className="landing__8_box-text--big">Exim Management</div>
                            <div className="landing__8_box-text--small">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br/> sed diam nonumy eirmod tempor invidunt ut labore et dolore<br/> magna aliquyam erat, sed diam voluptua. At vero eos et accusam et<br/> justo duo dolores et ea rebum. Stet clita kasd gubergren, no</div>
                            <div className="landing__8_box-flex">
                                 <div className="landing__8_box-flex--text">Stock</div>
                                 <button className="landing__8_box-flex--btn  landing__8_box-flex--btn-1">
                                     <img src={upArrow} alt=""/>
                                     <div>Lorem ipsum</div>
                                 </button>
                                 <button className="landing__8_box-flex--btn">
                                     <img src={downArrow} alt=""/>
                                     <div>Lorem ipsum</div>
                                 </button>
                            </div>
                      </div>
                  </div>
              </div>

              {
                // features
              }

              <div className="landing__9">
                   <h1 className="heading-primary landing__3_heading">FEATURES</h1>
                   <div className="landing__9_box">
                        <div className="landing__9_box-1">
                            <div className="landing__9_box-1--top">
                                <h1><img src={videoBig} alt=""/><span>FLEXIBLE ONLINE CLASS</span></h1>
                                <div>Learning with Exim Education is dynamic and<br/>responsive to unique learning needs of import and export.</div>
                            </div>
                            <div className="landing__9_box-1--top">
                                <h1><img src={pause} alt=""/><span>FLEXIBLE ONLINE CLASS</span></h1>
                                <div>Learning with Exim Education is dynamic and<br/>responsive to unique learning needs of import and export.</div>
                            </div>
                            <div className="landing__9_box-1--top">
                                <h1><img src={gratuate} alt=""/><span>FLEXIBLE ONLINE CLASS</span></h1>
                                <div>Learning with Exim Education is dynamic and<br/>responsive to unique learning needs of import and export.</div>
                            </div>
                        </div>
                        <div className="landing__9_box-1">
                            <div className="landing__9_box-1--top">
                                <h1><img src={tv} alt=""/><span>FLEXIBLE ONLINE CLASS</span></h1>
                                <div>Learning with Exim Education is dynamic and<br/>responsive to unique learning needs of import and export.</div>
                            </div>
                            <div className="landing__9_box-1--top">
                                <h1><img src={crownBig} alt=""/><span>FLEXIBLE ONLINE CLASS</span></h1>
                                <div>Learning with Exim Education is dynamic and<br/>responsive to unique learning needs of import and export.</div>
                            </div>
                            <div className="landing__9_box-1--top">
                                <h1 ><img src={send} alt=""/><span>FLEXIBLE ONLINE CLASS</span></h1>
                                <div>Learning with Exim Education is dynamic and<br/>responsive to unique learning needs of import and export.</div>
                            </div>
                        </div>
                   </div>
              </div>

              {
                // video 2
              }

              <div className="landing__10 landing__7">
                 <img className="landing__10_img" src={video2} alt=""/>
                 <div className="landing__10_text">
                    <div>
                      next<br/>
                      <span>WEBINAR</span><br/>
                      sunday
                    </div>
                    <div className="landing__3_box-btn">arrow</div>
                 </div>
                 <img className="landing__10_orbits" src={orbits} alt=""/>
                 <img className="landing__10_play" src={play} alt=""/>
              </div>
              {
                // review
              }

              <div className="landing__11">
                   <h1 className="heading-primary landing__3_heading">Reviews</h1>
                   <div className="slide">
                       <div className="landing__11_review">
                           <div className="landing__11_review-top">
                               <img className="landing__11_review-top--img" src={ellipse1} alt=""/>
                               <div className="landing__11_review-top--name"><strong>Jennifer Lopezx</strong><br/>Cofounder at audiable</div>
                               <div className="landing__11_review-top--rating">4.5</div>
                           </div>
                           <div  className="landing__11_review-bottom">
                              One thing is for sure that I can step in the<br/>
                              International market without fear. Thank you<br/>
                              Exim Education!
                           </div>
                       </div>
                       <div className="landing__11_review">
                           <div className="landing__11_review-top">
                               <img className="landing__11_review-top--img" src={ellipse1} alt=""/>
                               <div className="landing__11_review-top--name"><strong>Jennifer Lopezx</strong><br/>Cofounder at audiable</div>
                               <div className="landing__11_review-top--rating">4.5</div>
                           </div>
                           <div  className="landing__11_review-bottom">
                              One thing is for sure that I can step in the<br/>
                              International market without fear. Thank you<br/>
                              Exim Education!
                           </div>
                       </div>
                       <div className="landing__11_review">
                           <div className="landing__11_review-top">
                               <img className="landing__11_review-top--img" src={ellipse1} alt=""/>
                               <div className="landing__11_review-top--name"><strong>Jennifer Lopezx</strong><br/>Cofounder at audiable</div>
                               <div style={{background:"yellow"}} className="landing__11_review-top--rating">4.5</div>
                           </div>
                           <div  className="landing__11_review-bottom">
                              One thing is for sure that I can step in the<br/>
                              International market without fear. Thank you<br/>
                              Exim Education!
                           </div>
                       </div>
                       <div className="landing__11_review">
                           <div className="landing__11_review-top">
                               <img className="landing__11_review-top--img" src={ellipse1} alt=""/>
                               <div className="landing__11_review-top--name"><strong>Jennifer Lopezx</strong><br/>Cofounder at audiable</div>
                               <div className="landing__11_review-top--rating">4.5</div>
                           </div>
                           <div  className="landing__11_review-bottom">
                              One thing is for sure that I can step in the<br/>
                              International market without fear. Thank you<br/>
                              Exim Education!
                           </div>
                       </div>
                       <div className="landing__11_review">
                           <div className="landing__11_review-top">
                               <img className="landing__11_review-top--img" src={ellipse1} alt=""/>
                               <div className="landing__11_review-top--name"><strong>Jennifer Lopezx</strong><br/>Cofounder at audiable</div>
                               <div className="landing__11_review-top--rating">4.5</div>
                           </div>
                           <div  className="landing__11_review-bottom">
                              One thing is for sure that I can step in the<br/>
                              International market without fear. Thank you<br/>
                              Exim Education!
                           </div>
                       </div>
                       <div className="landing__11_review">
                           <div className="landing__11_review-top">
                               <img className="landing__11_review-top--img" src={ellipse1} alt=""/>
                               <div className="landing__11_review-top--name"><strong>Jennifer Lopezx</strong><br/>Cofounder at audiable</div>
                               <div style={{background:"yellow"}} className="landing__11_review-top--rating">4.5</div>
                           </div>
                           <div  className="landing__11_review-bottom">
                              One thing is for sure that I can step in the<br/>
                              International market without fear. Thank you<br/>
                              Exim Education!
                           </div>
                       </div>
                   </div>
              </div>
          </div>

      )
    }
  }


 export default Landing;
