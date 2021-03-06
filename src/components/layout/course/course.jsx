import React, {Component} from "react"
import lock from "../../../assets/images/lock.svg";
import full from "../../../assets/images/full.svg";
import half from "../../../assets/images/half.svg";
import file from "../../../assets/images/file.svg";
import Aos from "aos"
import "aos/dist/aos.css"

  class Course extends Component{

    state={
      courses:[
        {
          title:"Parties and places involved in import/ export",
          // lessons:"14 Lesson /50 mins",
          locked:false
        },
        {
          title:"Types of Transportation, Container and packaging",
          // lessons:"14 Lesson /50 mins",
          locked:true
        },
        {
          title:"Basic Registration for Exim",
          // lessons:"14 Lesson /50 mins",
          locked:true
        },
        {
          title:"Basic Terms",
          // lessons:"14 Lesson /50 mins",
          locked:true
        },
        {
          title:"Incoterms",
          // lessons:"14 Lesson /50 mins",
          locked:true
        },
        {
          title:"Export Incentives",
          // lessons:"14 Lesson /50 mins",
          locked:true
        },
        {
          title:"Risk management and insurance",
          // lessons:"14 Lesson /50 mins",
          locked:true
        },
        {
          title:"Documents",
          // lessons:"14 Lesson /50 mins",
          locked:true
        },
        {
          title:" Export Procedure",
          // lessons:"14 Lesson /50 mins",
          locked:true
        },
        {
          title:"Modes of Payment",
          // lessons:"14 Lesson /50 mins",
          locked:true
        },
        {
          title:" Special shipments",
          // lessons:"14 Lesson /50 mins",
          locked:true
        },
        {
          title:"Exporting Terms",
          // lessons:"14 Lesson /50 mins",
          locked:true
        },
        {
          title:"Sterilization",
          // lessons:"14 Lesson /50 mins",
          locked:true
        },
        {
          title:". Other Documents",
          // lessons:"14 Lesson /50 mins",
          locked:true
        },
      ]
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
         <div data-aos="zoom-out" className="course">
                 <h1 className="heading-primary landing__3_heading">Import & Export Course Details/Exim Course Details</h1>
                 <div  className="course__btnWrap">
                     <a rel="noreferrer" href="http://eximeducation.com/course/pdf/Course_01.pdf" target="_blank" className="course__btnWrap_btn"><span>Detailed</span><img src={file} alt=""/></a>
                 </div>
                 <div className="course__wrapper">
                     {
                       this.state.courses.map((course,i)=>{
                         return <div  className="course__wrapper_box">
                                    <img className="course__wrapper_box-img" src={course.locked?full:half} alt=""/>
                                    <div  className="course__wrapper_box-count">{i+1}</div>
                                    <div style={!course.locked?{color:"#0062FF"}:null} className="course__wrapper_box-title">
                                        {course.title}
                                    </div>
                                    <div className="course__wrapper_box-lock">
                                         {course.locked?<img className="small-lock" src={lock} alt=""/>:null}
                                         <div style={course.locked?{color:"grey",display:"block"}:null}>{course.lessons}</div>
                                    </div>
                                 </div>
                       })
                     }

                 </div>
         </div>
      )
    }
  }


 export default Course;
