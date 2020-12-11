import React, {Component} from "react"
import tick from "../../../assets/images/tick.svg";
import send from "../../../assets/images/send2.svg";
import circleTimes from "../../../assets/images/circle-times.svg";
import circleDownArrow from "../../../assets/images/circle-downArrow.svg";

  class Pricing extends Component{

    state={
      faq:[
        {
          ques:"Why quick, brown fox jumps over a lazy dog?",
          answer:"Answer to  sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
          toggle:true
        },
        {
          ques:"Why quick, brown fox jumps over a lazy dog?",
          answer:"Answer to  sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
          toggle:false
        },
        {
          ques:"Why quick, brown fox jumps over a lazy dog?",
          answer:"Answer to  sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
          toggle:false
        },
        {
          ques:"Why quick, brown fox jumps over a lazy dog?",
          answer:"Answer to  sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
          toggle:false
        },
        {
          ques:"Why quick, brown fox jumps over a lazy dog?",
          answer:"Answer to  sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et",
          toggle:false
        },
      ]
    }

    faqToggleHandler=(i)=>{
      let newState = this.state
      newState.faq[i].toggle = !newState.faq[i].toggle
      this.setState({
         faq:newState.faq
      })
    }


    render(){

      return (
           <div className="pricing">
               {
                 // head
               }
               <h1 className="heading-primary landing__3_heading">FLEXIBLE plans</h1>
               <h2 className="heading-secondary">choose your plan……</h2>
               {
                 // cards
               }
               <div className="pricing__cards">
                  <div className="card">
                     <div className="card__name">Classroom Training</div>
                     <div className="card__price">$ 299999</div>
                     <hr/>
                     <ul>
                       <li><img src={tick} alt=""/><strong>Interactive </strong>Sessions</li>
                       <li><img src={tick} alt=""/><strong>Expert </strong>Guidance</li>
                       <li><img src={tick} alt=""/>Informational study material</li>
                       <li><img src={tick} alt=""/>Group Activities</li>
                       <li><img src={tick} alt=""/><strong>Practicle </strong>training</li>
                       <li><img src={tick} alt=""/>Weekend Classes</li>
                       <li><img src={tick} alt=""/><strong>Guest Lecture</strong></li>
                       <li><img src={tick} alt=""/>Discuss new Targeted and<br/>Marketing oppotunities</li>
                     </ul>
                     <button className="btn__buy">Buy Now <img src={send} alt=""/></button>
                  </div>

                  <div className="card black">
                     <div className="card__name">ONLINE TRAINING</div>
                     <h3>Most Popular</h3>
                     <div className="card__price">$ 132456</div>
                     <hr/>
                     <ul>
                       <li><img src={tick} alt=""/><strong>Interactive </strong>Sessions</li>
                       <li><img src={tick} alt=""/><strong>Expert </strong>Guidance</li>
                       <li><img src={tick} alt=""/>Informational study material</li>
                       <li><img src={tick} alt=""/>Group Activities</li>
                       <li><img src={tick} alt=""/><strong>Practicle </strong>training</li>
                       <li><img src={tick} alt=""/>Weekend Classes</li>
                       <li><img src={tick} alt=""/><strong>Guest Lecture</strong></li>
                       <li><img src={tick} alt=""/>Discuss new Targeted and<br/>Marketing oppotunities</li>
                       <li><img src={tick} alt=""/><strong>Guest Lecture</strong></li>
                       <li><img src={tick} alt=""/>Discuss new Targeted and<br/>Marketing oppotunities</li>
                     </ul>
                     <button className="btn__buy">Buy Now <img src={send} alt=""/></button>
                  </div>

                  <div className="card">
                     <div className="card__name">Enterprises & School<br/>TRAINING</div>
                     <div className="card__price">$ 132456</div>
                     <hr/>
                     <ul>
                       <li><img src={tick} alt=""/><strong>Interactive </strong>Sessions</li>
                       <li><img src={tick} alt=""/><strong>Expert </strong>Guidance</li>
                       <li><img src={tick} alt=""/>Informational study material</li>
                       <li><img src={tick} alt=""/>Group Activities</li>
                       <li><img src={tick} alt=""/><strong>Practicle </strong>training</li>
                       <li><img src={tick} alt=""/>Weekend Classes</li>
                       <li><img src={tick} alt=""/><strong>Guest Lecture</strong></li>
                     </ul>
                     <button className="btn__buy">Buy Now <img src={send} alt=""/></button>
                  </div>
               </div>
               <div className="customHr">...</div>

               {
                 // faq
               }
               <h1 className="heading-primary landing__3_heading">FAQ</h1>
               <div className="faq">
               {this.state.faq.map((faq,i)=>{
                return  <div className="faq__box">
                                <div className="faq__box_ques">
                                    <div>{faq.ques}</div>
                                    {faq.toggle?<img className="faq__box_ques-times" onClick={()=>this.faqToggleHandler(i)} src={circleTimes} alt=""/>:<img onClick={()=>this.faqToggleHandler(i)} src={circleDownArrow}  className="faq__box_ques-downArrow" alt=""/>}
                                </div>
                                {faq.toggle?<div className="faq__box_answer">{faq.answer}</div>:null}
                         </div>
                })}
               </div>
           </div>
      )
    }
  }


 export default Pricing;
