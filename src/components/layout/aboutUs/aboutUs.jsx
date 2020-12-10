import React, {Component} from "react"
import greenCall from "../../../assets/images/greenCall.svg";
import vBar from "../../../assets/images/vBar.svg";
import aboutMain from "../../../assets/images/aboutMain.svg";
import logs from "../../../assets/images/logs.svg";

  class AboutUs extends Component{

    state={
      name:"",
      email:"",
      mobile:"",
      pref:""
    }

    onChangeHandler=(e)=>{
      e.preventDefault();
      this.setState({
        [e.target.name]:e.target.value
      })
    }

    onSubmitHandler=(e)=>{
      e.preventDefault();
       console.log(this.state);
      this.setState({
        name:"",
        email:"",
        mobile:"",
        pref:""
      })
    }

    render(){

      return (
           <div className="about">
              <h1 className="heading-primary landing__3_heading">Reach us</h1>
              <h4>Choose a plan that works best for you<br/>or your team</h4>
              <div className="about__1">
                  <form className="about__1_form" onSubmit={this.onSubmitHandler}>
                      <input name="name" value={this.state.name} onChange={this.onChangeHandler} placeholder="name" type="text"/>
                      <input name="mobile" value={this.state.mobile} onChange={this.onChangeHandler} placeholder="mobile" type="text"/>
                      <input name="email" value={this.state.email} onChange={this.onChangeHandler} placeholder="email" type="text"/>
                      <input name="pref" value={this.state.pref} onChange={this.onChangeHandler} placeholder="plan preference" type="text"/>
                      <input className="btn__buy" placeholder="SUBMIT" type="submit"/>
                  </form>

                  <div className="about__1_text">
                      <div className="about__1_text-big">Talk to our <span>Experts</span></div>
                      <div className="about__1_text-small">We need a few details to reach you.<br/><span>or</span><br/>Simply call us</div>
                      <div className="about__1_text-call"><img src={greenCall} alt=""/><img src={vBar} alt=""/>+91  8517885555</div>
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
                 <img src={logs} alt=""/>
                 <div><strong>EXIM</strong> LOGISTICS</div>
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