
import React, {Component} from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import $ from "jquery"
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
import sMob from "../../../assets/images/sMob.svg";
import s1 from "../../../assets/images/s-1.svg";
import s2 from "../../../assets/images/s-2.svg";
import s3 from "../../../assets/images/s-3.svg";
import certificate from "../../../assets/images/certificate.svg";
import colab from "../../../assets/images/colab.svg";
import colabMob from "../../../assets/images/colabMob.svg";
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

import settingImg from "../../../assets/images/settingImg.svg";
import globeImg from "../../../assets/images/globeImg.svg";
import eximManagementImg from "../../../assets/images/eximManagementImg.svg";
import lapiImg from "../../../assets/images/lapiImg.svg";
import humanChainImg from "../../../assets/images/humanChainImg.svg";

import whiteEM from "../../../assets/images/whiteEM.svg";
import whiteHC from "../../../assets/images/whiteHC.svg";
import whiteL from "../../../assets/images/whiteL.svg";
import whiteS from "../../../assets/images/whiteS.svg";
import whiteG from "../../../assets/images/whiteG.svg";

import videoBig from "../../../assets/images/videoBig.svg";
import crownBig from "../../../assets/images/crownBig.svg";
import tv from "../../../assets/images/tv.svg";
import send from "../../../assets/images/send.svg";
import pause from "../../../assets/images/pause.svg";
import gratuate from "../../../assets/images/gratuate.svg";
import whitever from "../../../assets/images/whitever.svg";
import orbits from "../../../assets/images/orbits.svg";
import plays from "../../../assets/images/play-s.svg";
import orbitss from "../../../assets/images/orbits-s.svg";

import FlipNumbers from 'react-flip-numbers';


import googleplaybadge from "../../../assets/images/google-play-badge.jpeg";

import ellipse1 from "../../../assets/images/ellipse1.png";
import video2 from "../../../assets/images/video2.png";
import landing_main from "../../../assets/images/landing-main.svg"

  class Landing extends Component{

    state={
        numbersVisible:false,
        numberValue:6456744,
        value:"",
        mob:false,
        cos:[
          {
            title:"Exim management",
            content:"Being an exim manager one manages export/import process, foreseeing movement of goods and being in touch with freight forwarder, logistics, retailers and manufaturer. Exim manager also handles documents, primary responsibilities and many more."
          },{
            title:"Freight Forwarder",
            content:"Freight forwarders are master of trade. Giving recommendation to the exporter, performing freight operation, looking over documentation. Any business that is in import-export does require freight forwarder for their unique versatility."
          },{
            title:"Merchant export/importer",
            content:"Export-import is the most effective money-making career. Know the global market and earn foreign exchange, develop country’s economy, tax concession, improve in sales and profit, increase in foreign sale and many more benefits one can get if stepped in exim world"
           }, {
            title:"Logistic manager",
            content:"As logistics manager you can organize the storage and distribution of goods. Also, to ensure that orders are carried out correctly. A logistics manager must wear a variety of hats throughout the workday."
             },
          {
            title:"In CHA",
            content:"After getting certified by exim education one can work under Custom House Agent, and with a good experience can tuen as CHA. work in shipping line, NVOCC , export sales manager and step in real organized and easy money making world ."
          }],
        cosTitle:"Exim management",
        cosContent:"Being an exim manager one manages export/import process, foreseeing movement of goods and being in touch with freight forwarder, logistics, retailers and manufaturer. Exim manager also handles documents, primary responsibilities and many more."
      }

    //"Export Import Education"

    repeat =()=>{
        setTimeout(()=>{this.setState((prevState)=>{return{value:''}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:'"'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+' M'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'a'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'k'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'i'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'n'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'g'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+' I'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'n'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'d'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'i'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'a'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+' T'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'h'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'e'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+' W'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'o'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'r'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'l'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'d'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+"'s"}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+' F'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'a'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'c'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'t'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'o'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'r'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'y'}});
        setTimeout(()=>{this.setState((prevState)=>{return{value:prevState.value+'"'}});
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},50);
},150);
}

    componentDidMount=()=>{

      window.scrollTo({top:0,behavior:"smooth"});

        this.repeat();

      if($(window).width()<=800){
         this.setState({
           mob:true
         })
      }
     Aos.init({
        duration: 1500,
        delay: 100
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

     $(window).scroll(()=>{
       console.log($(window).scrollTop());

       if($(window).scrollTop()>=1700 ){
         $(".blank__1").css({"animation":"slides 1s linear","animation-fill-mode":"forward"});
         setTimeout(()=>{
           $(".blank__1").css({"opacity":"0"})
           $(".blank__2").css({"animation":"slide-reverse 1s linear","animation-fill-mode":"forward"});
           setTimeout(()=>{
             $(".blank__2").css({"opacity":"0"})
             $(".blank__3").css({"animation":"slides 1s linear","animation-fill-mode":"forward"});
             setTimeout(()=>{
               $(".blank__3").css({"opacity":"0"})
             },1000)
           },1000)
         },1000)
       }

       if($(window).scrollTop()>=3761){
         $(".landing__6_box-certificate").css({"animation":"scale .6s linear 2","animation-fill-mode":"forward"});
       }

     })

   }

   coureseToSuccess=(num)=>{
      let newState = this.state
      newState.cosTitle = newState.cos[num].title;
      newState.cosContent = newState.cos[num].content;
      this.setState({
        ...newState
      })
   }


    render(){

        console.log()

      return (
          <div className="landing">

               {
                 // screen 1
               }
                <div data-aos="zoom-out" data-aos-once="true" className="landing__1">
                <div className="landing__1_text">
                    <div className="landing__1_text-biggest">
                       EXIM
                    </div>
                    <div className="landing__1_text-bigger">
                       EDUCATION
                    </div>
                    <div className="landing__1_text-smaller">
                      {this.state.value}
                    </div>
                    <div className="landing__1_text-smallest">
                       Study India in the global business perspective and build  an International<br/>business by educating and brushing the export-import skills of the working<br/>class.
                    </div>

                    <div className="landing__1_text-btns">
                        <button className="landing__1_text-btns--join">Join Free <span> 0</span> <i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                        {
                          // <button className="landing__1_text-btns--trial">Trail</button>
                        }
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
                      <div className="spin"><img className="landing__bar_item-svg" src={reload} alt=""/></div>
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
                             Click on the “Download” button and be part of exim world. Enjoy 2 export-import videos for free,
                              and get a peek on new terms and ways to export and import. Congratulations in advance for
                              taking the first step towards your dream :)
                        </div>
                       <button  data-aos="fade-right" className="landing__2_text-btn"><img className="landing__2_text-btn--icon" src={googleplaybadge} alt=""/></button>
                  </div>
                  <img className="landing__2_image" src={mobile} alt=""/>
              </div>
              <div className="customHr">...</div>

              {
                // 3
              }

              <div className="landing__3">
                  <h1 className="heading-primary landing__3_heading">course details</h1>
                  <div className="landing__3_box">
                      <div className="landing__3_box-text">
                          <div className="landing__3_box-text--big">ABOUT EXIM EDUCATION</div>
                          <div className="landing__3_box-text--small">
                          Exim Education is training centre of Indiaport. We provide helping hand to India’s
                           export business to ease its global trade.Exim Education has taken an initiative to
                            make people aware of various opportunities in the International market with our unique
                            way of training, the participants. Exim Education with its exclusive mastery aims to hasten
                             the globalization of India and build an International business by educating and brushing exim
                              skills of the working class.
                          </div>
                      </div>

                      <div className="landing__3_box-text">
                          <div className="landing__3_box-text--big">ADAPTIVE LEARNING</div>
                          <ul>
                            <li>
                                 <img data-aos-once="true" data-aos="fade-right" data-aos-duration="1500" src={section} alt=""/>
                                 <span>Modules 14</span>
                            </li>
                            <li>
                                 <img data-aos-once="true" data-aos="fade-right" data-aos-duration="1500" src={clock} alt=""/>
                                 <span>Duration 1 month</span>
                            </li>
                            <li>
                                 <img data-aos-once="true" data-aos="fade-right" data-aos-duration="1500" src={zoom} alt=""/>
                                 <span>Zoom call every sunday</span>
                            </li>
                            <li>
                                 <img data-aos-once="true" data-aos="fade-right" data-aos-duration="1500" src={crown} alt=""/>
                                 <span>Premium helpdesk expert</span>
                            </li>
                          </ul>
                      </div>

                      <div className="landing__3_box-text">
                          <div className="landing__3_box-text--big">COURSE FEATURES</div>
                          <ul>
                            <li>
                                 <img data-aos-once="true" data-aos="fade-right" data-aos-duration="1500" src={video} alt=""/>
                                 <span>Video tutorials</span>
                            </li>
                            <li>
                                 <img data-aos-once="true" data-aos="fade-right" data-aos-duration="1500" src={cell} alt=""/>
                                 <span>Mobile application</span>
                            </li>
                            <li>
                                 <img data-aos-once="true" data-aos="fade-right" data-aos-duration="1500" src={pdf} alt=""/>
                                 <span>Powerpoint and PDF</span>
                            </li>
                            <li>
                                 <img data-aos-once="true" data-aos="fade-right" data-aos-duration="1500" src={offline} alt=""/>
                                 <span>Offine mode</span>
                            </li>
                          </ul>
                      </div>
                      <button style={{width:"26rem"}} className="landing__1_text-btns--join landing__3_box-btn"><span> 0</span> <i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                  </div>
              </div>

              {
                // s
              }

              <div className="landing__4">
                  {this.state.mob?<img className="landing__4_background" src={sMob} alt=""/>:<img  className="landing__4_background" src={s} alt=""/>}
                  <div className="blank blank__1">0</div>
                  <div className="blank blank__2">0</div>
                  <div className="blank blank__3">0</div>
                  <div className="landing__4_1">
                      <div data-aos="fade-down" data-aos-delay="1000" className="landing__4_1-text">
                           <div className="landing__4_1-text--big heading-primary">Sign up for growth and development</div>
                           <div className="landing__4_1-text--small"></div>
                           <div className="landing__4_1-text--smaller">Download our <span>mobile application</span> and watch the first<br/>two videos for free, and get a peek on new terms<br/>and ways to export and import.</div>
                      </div>
                      <img  className="landing__4_1-image" src={s1} alt=""/>
                  </div>

                  <div className="landing__4_2">
                      <img className="landing__4_2-image" src={s2} alt=""/>
                      <div  data-aos="fade-down" data-aos-delay="1000" className="landing__4_2-text">
                           <div className="landing__4_2-text--big heading-primary">Your quality and standard of living is in your hand
</div>
                           <div className="landing__4_2-text--small">Not You & I but We be on the journey full of support and growth.</div>
                           <div className="landing__4_2-text--smaller">Your keenness to learn more and get hands in the international market can be done right by
smooth payment procedure. Quick pay and get the grip to course, live lectures, research and
get ready for growing stability </div>
                      </div>
                  </div>

                  <div className="landing__4_3">
                      <div  data-aos="fade-down" data-aos-delay="1000" className="landing__4_3-text">
                           <div className="landing__4_3-text--big heading-primary">Path to success</div>
                           <div className="landing__4_3-text--small">
</div>
                           <div className="landing__4_3-text--smaller">Learn and understand the course, get a job, be a brand and start your self-dependent journey
crossing national borders.</div>
                      </div>
                      <img  className="landing__4_3-image" src={s3} alt=""/>
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
                            <div className="digit__wrapper"><div className="landing__5_count-digit"> <FlipNumbers height={40} width={40} color="" background="" duration="5" delay="0" play perspective={500} numbers={""+value} /></div><hr/></div>

                            :<div><div className="landing__5_count-digit">0</div><hr/></div>

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
                         <div style={{color:"black"}} >Lorem ipsum dolor sit.</div>
                     </div>
                 </div>
              </div>


              {
                //colab
              }

              <div className="landing__7">
                  {this.state.mob?<img src={colabMob} alt=""/>:<img src={colab} alt=""/>}
                  <img className="landing__7_img" src={videoAfterColab} alt=""/>
              </div>

              {
                //cousre to success
              }

              <div className="landing__8">
                  <h1 className="heading-primary landing__3_heading">cousre to success</h1>
                  <div className="landing__8_bar">
                      <div onClick={()=>this.coureseToSuccess(0)} className={(this.state.cosTitle==="Exim management")?"selectedIcon landing__8_bar-box":"landing__8_bar-box" }>
                          {this.state.cosTitle==="Exim management"?<img src={whiteEM} alt=""/>:<img src={eximManagement} alt=""/>}
                          <div>Exim<br/>management</div>
                      </div>
                      <div  onClick={()=>this.coureseToSuccess(1)} className={(this.state.cosTitle==="Freight Forwarder")?"selectedIcon landing__8_bar-box":"landing__8_bar-box" }>
                          {this.state.cosTitle==="Freight Forwarder"?<img src={whiteHC} alt=""/>:<img src={humanChain} alt=""/>}
                          <div>Freight Forwarder</div>
                      </div>
                      <div onClick={()=>this.coureseToSuccess(2)} className={(this.state.cosTitle==="Merchant export/importer")?"selectedIcon landing__8_bar-box":"landing__8_bar-box" }>
                          {this.state.cosTitle==="Merchant export/importer"?<img src={whiteL} alt=""/>:<img src={lapi} alt=""/>}
                          <div>Merchant<br/>export/importer</div>
                      </div>
                      <div onClick={()=>this.coureseToSuccess(3)} className={(this.state.cosTitle==="Logistic manager")?"selectedIcon landing__8_bar-box":"landing__8_bar-box" }>
                          {this.state.cosTitle==="Logistic manager"?<img src={whiteS} alt=""/>:<img src={setting} alt=""/>}
                          <div>Logistic manager</div>
                      </div>
                      <div onClick={()=>this.coureseToSuccess(4)} className={(this.state.cosTitle==="In CHA")?"selectedIcon landing__8_bar-box":"landing__8_bar-box" }>
                          {this.state.cosTitle==="In CHA"?<img src={whiteG} alt=""/>:<img src={globe} alt=""/>}
                          <div>in CHA</div>
                      </div>
                  </div>
                  <div className="landing__8_box">
                      <div className="landing__8_box-images">
                              <img className="BUBBLE" src={this.state.cosTitle==="Exim management"?eximManagementImg:this.state.cosTitle==="Freight Forwarder"?humanChainImg:this.state.cosTitle==="Merchant export/importer"?lapiImg:this.state.cosTitle==="Logistic manager"?settingImg:globeImg} alt=""/>
                      </div>
                      <div className="landing__8_box-text">
                            <div className="landing__8_box-text--big">{this.state.cosTitle}</div>
                            <div className="landing__8_box-text--small">{this.state.cosContent}</div>
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
              <div className="customHr">...</div>


              {
                // features
              }

              <div className="landing__9">
                   <h1 className="heading-primary landing__3_heading">FEATURES</h1>
                   <div className="landing__9_box">
                        <div className="landing__9_box-1">
                            <div className="landing__9_box-1--top">
                                <h1><img className="img__1" src={videoBig} alt=""/><span>FLEXIBLE ONLINE CLASS</span></h1>
                                <div>You pick the schedule and learn accordingly.</div>
                            </div>
                            <div className="landing__9_box-1--top">
                                <h1><img className="img__2" src={pause} alt=""/><span>Pause course</span></h1>
                                <div>Busy or tired? No worries, take a break; pause the lecture and play accordingly.</div>
                            </div>
                            <div className="landing__9_box-1--top">
                                <h1><img className="img__3" src={gratuate} alt=""/><span>Mentor support</span></h1>
                                <div>: Not You & I but We be on the journey full of support and growth</div>
                            </div>
                        </div>
                        <div className="landing__9_box-1">
                            <div className="landing__9_box-1--top">
                                <h1><img className="img__4" src={tv} alt=""/><span>Exim consultancy</span></h1>
                                <div></div>
                            </div>
                            <div className="landing__9_box-1--top">
                                <h1><img className="img__5" src={crownBig} alt=""/><span>Quality Service</span></h1>
                                <div>We at EximEducation don’t compromise with our service. We provide the best of
service to our gems.</div>
                            </div>
                            <div className="landing__9_box-1--top">
                                <h1 ><img className="img__6" src={send} alt=""/><span>IndiaPort-booking platform</span></h1>
                                <div>an organised platform to book transport, manage the shipment and provide trouble-free trading.</div>
                            </div>
                        </div>
                   </div>
              </div>

              {
                // video 2
              }

              <div className="landing__10">
                 <img className="landing__10_img" src={video2} alt=""/>
                 <div className="landing__10_text">
                    <div>
                      next<br/>
                      <span>WEBINAR</span><br/>
                      sunday
                    </div>
                    <button  style={{width:"26rem"}} className="landing__1_text-btns--join landing__3_box-btn"><span> 0</span> <i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                 </div>
                  <div className="landing__10_text_1">
                     <h2>Topic</h2>
                     <div>Advance technology and<br/>government new laws applied in<br/>2020 module </div>
                     <h4>Zehann Shah</h4>
                  </div>
                  <div className="landing__10_text_2">
                      <h5>date</h5>
                      <h3>12 November, 2020</h3>
                  </div>
                  <div className="landing__10_text_3">
                      <h5>time</h5>
                      <h3>12:30 PM</h3>
                  </div>
                  <div className="landing__10_text_4">
                      <h5>mentor</h5>
                      <h3>Zehan Shah</h3>
                  </div>
                 {this.state.mob?<img  className="landing__10_orbits" src={orbitss} alt=""/>:<img className="landing__10_orbits" src={orbits} alt=""/>}
                 {this.state.mob?<img className="landing__10_play" src={whitever} alt=""/>:<img className="landing__10_play" src={whitever} alt=""/>}
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
                           Glad that I was a part of exim education. Tutors and staff are very helpful and
                        knowledgeable.

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
                           Good course- helpful tutors. Happy to be part of this institute.

                           </div>
                       </div>
                       <div className="landing__11_review">
                           <div className="landing__11_review-top">
                               <img className="landing__11_review-top--img" src={ellipse1} alt=""/>
                               <div className="landing__11_review-top--name"><strong>Jennifer Lopezx</strong><br/>Cofounder at audiable</div>
                               <div className="landing__11_review-top--rating">4.5</div>
                           </div>
                           <div  className="landing__11_review-bottom">
                           I’m glad to shift from a local market to international with your guidance and support.
Thank you for my progress.
                           </div>
                       </div>
                       <div className="landing__11_review">
                           <div className="landing__11_review-top">
                               <img className="landing__11_review-top--img" src={ellipse1} alt=""/>
                               <div className="landing__11_review-top--name"><strong>Jennifer Lopezx</strong><br/>Cofounder at audiable</div>
                               <div className="landing__11_review-top--rating">4.5</div>
                           </div>
                           <div  className="landing__11_review-bottom">
                           Exim Education provided me with full support when I planned to step in export. Thank
                           you Exim Education!
                           </div>
                       </div>
                       <div className="landing__11_review">
                           <div className="landing__11_review-top">
                               <img className="landing__11_review-top--img" src={ellipse1} alt=""/>
                               <div className="landing__11_review-top--name"><strong>Jennifer Lopezx</strong><br/>Cofounder at audiable</div>
                               <div style={{background:"yellow"}} className="landing__11_review-top--rating">4.5</div>
                           </div>
                           <div  className="landing__11_review-bottom">
                           Decent fees and great videos.

                           </div>
                       </div>
                       <div className="landing__11_review">
                           <div className="landing__11_review-top">
                               <img className="landing__11_review-top--img" src={ellipse1} alt=""/>
                               <div className="landing__11_review-top--name"><strong>Jennifer Lopezx</strong><br/>Cofounder at audiable</div>
                               <div style={{background:"yellow"}} className="landing__11_review-top--rating">4.5</div>
                           </div>
                           <div  className="landing__11_review-bottom">
                           Live sessions are very very helpful. If anyone of you is planning to step in exim world you
need to join EximEducation.
                           </div>
                       </div>
                   </div>
              </div>
          </div>

      )
    }
  }


 export default Landing;
