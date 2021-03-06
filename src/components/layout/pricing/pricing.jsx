import React, {Component} from "react"
import tick from "../../../assets/images/tick.svg";
import send from "../../../assets/images/send2.svg";
import circleTimes from "../../../assets/images/circle-times.svg";
import circleDownArrow from "../../../assets/images/circle-downArrow.svg";
import Aos from "aos"
import "aos/dist/aos.css"
import { Link } from "react-router-dom";


  class Pricing extends Component{

    state={
      faq:[
        {
          ques:"What are the advantages of taking Export Import classes online?",
          answer:"Convenience and flexibility are the most common advantages of online classes. Taking classes online is ideal for someone who wants to continue working and keen to learn new skills",
          toggle:true
        },
        {
          ques:"How much time should I spend on one class every week?",
          answer:" The time you spend on a class can vary. No two instructors will format their classes exactly the same. Plan to spend 1 hours daily and 3 hours on Sunday.",
          toggle:false
        },
        {
          ques:"How do I interact with the professor?",
          answer:"Students and instructors communicate primarily through course sites and emails in online courses.",
          toggle:false
        },
        {
          ques:"Is there interaction with other online students?",
          answer:"Yes, students will be grouped with different different batches where they will be able to interact with there classmates.",
          toggle:false
        },
        {
          ques:"Do Students need to attend classes at specific time?",
          answer:"Students complete coursework on their own time but still need to attend weekend classes on time.",
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

    componentDidMount=()=>{
      window.scrollTo({top:0,behavior:"smooth"});
      Aos.init({
         duration: 1500,
         delay: 100,
       });
    }


    render(){

      return (
           <div data-aos="zoom-out" className="pricing">
               {
                 // head
               }
               <h1 className="heading-primary landing__3_heading">FLEXIBLE plans</h1>
               <h4>Choose a plan that works best for you<br/>or your team</h4>
               {
                 // cards
               }
               <div className="pricing__cards">
                  <div className="card">
                     <div className="card__name">Classroom Training</div>
                     <div className="card__price">₹ 27999</div>
                     <hr/>
                     <ul>
                       <li><img src={tick} alt=""/><strong>Interactive </strong>Sessions</li>
                       <li><img src={tick} alt=""/><strong>Expert </strong>Guidance</li>
                       <li><img src={tick} alt=""/>Informational Study Material</li>
                       <li><img src={tick} alt=""/>Discuss New Targeted and <br/> Marketing Opportunities</li>
                       <li><img src={tick} alt=""/>Group Activities</li>
                       <li><img src={tick} alt=""/><strong>Practicle </strong>Training</li>
                       <li><img src={tick} alt=""/>Weekend Classes</li>
                       <li><img src={tick} alt=""/><strong>Guest Lecture</strong></li>
                     </ul>
                    <a href="https://rzp.io/l/0CL6lTmO"  rel="noreferrer" target="_blank"> <button  className="btn__buy">Buy Now <img src={send} alt=""/></button></a>
                  </div>

                  <div className="card black">
                     <div className="card__name">ONLINE TRAINING</div>
                     <h3>Most Popular</h3>
                     <div className="card__price">₹ 9999</div>
                     <hr/>
                     <ul>
                     <li><img src={tick} alt=""/>Weekend Live Classes</li>
                         <li><img src={tick} alt=""/><strong>Premium Support</strong></li>
                         <li><img src={tick} alt=""/><strong>Interactive</strong> Sessions</li>
                         <li><img src={tick} alt=""/><strong>Expert</strong> Guidance</li>
                         <li><img src={tick} alt=""/>Informational Study Material</li>
                         <li><img src={tick} alt=""/>Discuss New Targeted and <br/> Marketing Opportunities</li>
                         <li><img src={tick} alt=""/><strong>Certificate</strong></li>
                         <li><img src={tick} alt=""/><strong>Guest Lecture</strong></li>
                         <li><img src={tick} alt=""/><strong>Mobile App</strong> - Learn on the go</li>
                     </ul>
                     <a  rel="noreferrer" href="https://rzp.io/l/zmgRkFiRcE" target="_blank"> <button className="btn__buy">Buy Now <img src={send} alt=""/></button></a>
                  </div>

                  <div className="card">
                     <div className="card__name">Enterprises & School<br/>TRAINING</div>
                     <div className="card__price"></div>
                     <hr/>
                     <ul>
                     <li><img src={tick} alt=""/>Professional webinar,<br/> seminar and workshop </li>
                       <li><img src={tick} alt=""/>Courses for students from <br/> class 9th to class 12th</li>
                       <li><img src={tick} alt=""/>Dedicated customer service <br/> manager</li>
                       <li><img src={tick} alt=""/>Curated learning paths</li>
                       <li><img src={tick} alt=""/>Business consultency</li>
                       </ul>

                    <Link to="about"><button className="btn__buy">Contact Us <img src={send} alt=""/></button></Link>
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
                                <div style={{display:faq.toggle?"block":"none"}} className="faq__box_answer">{faq.answer}</div>
                         </div>
                })}
               </div>
           </div>
      )
    }
  }


 export default Pricing;
