import React, {Component} from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import greenCall from "../../../assets/images/greenCall.svg";
import vBar from "../../../assets/images/vBar.svg";
import aboutMain from "../../../assets/images/aboutMain.svg";
import logs from "../../../assets/images/logs.svg";
import emailjs from 'emailjs-com';


  class AboutUs extends Component{

    state={
      name:"",
      email:"",
      phone:"",
      preference:"select",
      submitted:1,
    }

    onChangeHandler=(e)=>{
      e.preventDefault();
      this.setState({
        [e.target.name]:e.target.value
      })
    }

    onSubmitHandler=(e)=>{
      e.preventDefault();
       //console.log(this.state);
      this.setState({
        submitted:4,
      });


      let template="template_ep26v59";


      emailjs.sendForm('service_9wrddem', template, e.target, 'user_3C6n5XsLh20WgqpTa3412')
      .then((result) => {
         this.setState({
            name:"",
            email:"",
            phone:"",
            preference:"select",
            submitted:2,
          });
         setTimeout(()=>{this.setState({submitted:1})},5000);
      }, (error) => {
         this.setState({
             submitted:3,
          });
         setTimeout(()=>{this.setState({submitted:1})},2000);
      });


     }

     componentDidMount=()=>{
       window.scrollTo({top:0,behavior:"smooth"});
       Aos.init({
          duration: 1500,
          delay: 100,
        });
     }

    render(){

      return (
           <div data-aos="zoom-out" className="about">
              <h1 className="heading-primary landing__3_heading">Reach us</h1>

              <div className="about__1">
                  <form className="about__1_form" onSubmit={this.onSubmitHandler}>
                      <input required name="name" value={this.state.name} onChange={this.onChangeHandler} placeholder="name" type="text"/>
                      <input required name="phone" value={this.state.phone} onChange={this.onChangeHandler} placeholder="phone" type="text"/>
                      <input required name="email" value={this.state.email} onChange={this.onChangeHandler} placeholder="email" type="text"/>


                    <select required value={this.state.preference} onChange={(e)=>this.onChangeHandler(e)} name="preference" id="">
                       <option disabled value="select"  selected>select your plan</option>
                       <option value="Class Training">Class Training</option>
                       <option value="Online Training">Online Training</option>
                       <option value="Enterprises & School Training">Enterprises & School Training</option>

                    </select>


                      {this.state.submitted===1?
                      <input className="btn__buy" value="SUBMIT" type="submit"/>
                      :this.state.submitted===2?
                      <input className="btn__buy" style={{backgroundImage:"linear-gradient(90deg, rgba(75,204,51,1) 46%, rgba(22,217,54,1) 100%)"}} type="submit" disabled value="We'll connect with you soon.." />
                      :this.state.submitted===3?
                      <input className="btn__buy" style={{backgroundImage:"linear-gradient(90deg, rgba(204,51,51,1) 46%, rgba(168,13,13,1) 100%)"}} type="submit" disabled value="OOPS! Something went wrong.a1" />
                      :
                      <input className="btn__buy" type="submit" disabled value="..." />
                      }
                  </form>

                  <div className="about__1_text">
                      <div className="about__1_text-big">Talk to our <span>Experts</span></div>
                      <div className="about__1_text-small">We need a few details to reach you.<br/><span>or</span><br/>Simply call us</div>
                      <a href="tel://+918517885555" className="about__1_text-call"><img className="about__1_text-call--img1" src={greenCall} alt=""/><img src={vBar} alt=""/>+91  8517885555</a>
                  </div>
              </div>

              {
                // 2
              }

              <div className="about__2">
                  <div  className="about__2_text">
                      <div  className="about__2_text-big">
                          We  are  tech   LOGISTIC<br/>
                          start-up  powered  to<br/>
                          tranform  import<br/>
                          export
                      </div>
                      <div  className="about__2_text-small">POWERED WITH SPECIAL TEAM AND SUPPORT SYSTEM</div>
                  </div>
                  <img src={aboutMain} alt=""/>
              </div>

              {
                // 3
              }

              <h1 className="heading-primary landing__3_heading">services</h1>
              <div className="about__3">
                  <div className="about__3_row">
                     <div className="about__3_row-box">
                        <h2 className="about__3_row-box--head">ADAPTIVE LEARNING</h2>
                        <ul>
                           <li>Online freight marketplace</li>
                           <li>Custom clearance</li>
                           <li>Local transport</li>
                           <li>Break and Bulk cargo</li>
                           <li>Insurance</li>
                        </ul>
                     </div>

                     <div className="about__3_row-box">
                        <h2 className="about__3_row-box--head">updates</h2>
                        <ul>
                           <li>education</li>
                           <li>Blogs</li>
                           <li>News</li>
                           <li>Vessel Schedule</li>
                        </ul>
                     </div>


                     <div className="about__3_row-box">
                        <h2 className="about__3_row-box--head">TOOLS</h2>
                        <ul>
                           <li>Custom docs generate</li>
                           <li>Duty calculator</li>
                           <li>CBM calculator</li>
                           <li>Container Tracking</li>
                           <li>Professional quote system</li>
                        </ul>
                     </div>

                     <div className="about__3_row-box">
                        <h2 className="about__3_row-box--head">DATA</h2>
                        <ul>
                           <li>HS code finder</li>
                           <li>Export data</li>
                        </ul>
                     </div>
                  </div>
                  <div className="about__3_row">
                    <div className="about__3_row-box">
                       <h2 className="about__3_row-box--head">FREIGHT SEARCH</h2>
                       <ul>
                          <li>Online freight marketplace</li>
                          <li>Custom clearance</li>
                          <li>Local transport</li>
                          <li>Break and Bulk cargo</li>
                          <li>Insurance</li>
                       </ul>
                    </div>

                    <div className="about__3_row-box about__3_row-box-last">
                       <h2 className="about__3_row-box--head">EXTRA</h2>
                       <ul>
                          <li>POWERED WITH SPECIAL TEAM AND SUPPORT SYSTEM</li>
                       </ul>
                    </div>
                  </div>
              </div>

              {
                // logs
              }

              <div className="about__4">
                 <img className="about__4_img" src={logs} alt=""/>
                 <div><strong>EXIM</strong> logistics</div>
              </div>

              {
                // our team
              }

              <h1 className="heading-primary landing__3_heading">our team</h1>
              <div className="about__3">
                  <div className="about__3_row">
                     <div className="about__3_row-box">
                        <h2 className="about__3_row-box--head">ADAPTIVE LEARNING</h2>
                        <ul>
                           <li>Online freight marketplace</li>
                        </ul>
                     </div>

                     <div className="about__3_row-box">
                        <h2 className="about__3_row-box--head">updates</h2>
                        <ul>
                           <li>education</li>
                        </ul>
                     </div>


                     <div className="about__3_row-box">
                        <h2 className="about__3_row-box--head">TOOLS</h2>
                        <ul>
                           <li>Custom docs generate</li>
                        </ul>
                     </div>

                     <div className="about__3_row-box">
                        <h2 className="about__3_row-box--head">DATA</h2>
                        <ul>
                           <li>HS code finder</li>
                        </ul>
                     </div>
                  </div>
                  <div className="about__3_row">
                    <div className="about__3_row-box">
                       <h2 className="about__3_row-box--head">FREIGHT SEARCH</h2>
                       <ul>
                          <li>Online freight marketplace</li>
                       </ul>
                    </div>

                    <div className="about__3_row-box">
                       <h2 className="about__3_row-box--head">EXTRA</h2>
                       <ul>
                          <li>POWERED WITH SPECIAL TEAM AND SUPPORT SYSTEM</li>
                       </ul>
                    </div>

                    <div className="about__3_row-box">
                       <h2 className="about__3_row-box--head">EXTRA</h2>
                       <ul>
                          <li>POWERED WITH SPECIAL TEAM AND SUPPORT SYSTEM</li>
                       </ul>
                    </div>
                  </div>
              </div>
           </div>
      )
    }
  }


 export default AboutUs;
