import React, {Component} from "react"
import lock from "../../../assets/images/lock.svg";
import full from "../../../assets/images/full.svg";
import half from "../../../assets/images/half.svg";


  class Course extends Component{

    state={
      courses:[
        {
          title:"Parties and places involved in import/ export",
          lessons:"14 Lesson /50 mins",
          locked:false
        },
        {
          title:"Parties and places involved in import/ export",
          lessons:"14 Lesson /50 mins",
          locked:true
        },
        {
          title:"Parties and places involved in import/ export",
          lessons:"14 Lesson /50 mins",
          locked:true
        },
        {
          title:"Parties and places involved in import/ export",
          lessons:"14 Lesson /50 mins",
          locked:true
        },
        {
          title:"Parties and places involved in import/ export",
          lessons:"14 Lesson /50 mins",
          locked:true
        },
        {
          title:"Parties and places involved in import/ export",
          lessons:"14 Lesson /50 mins",
          locked:true
        },
        {
          title:"Parties and places involved in import/ export",
          lessons:"14 Lesson /50 mins",
          locked:true
        },
        {
          title:"Parties and places involved in import/ export",
          lessons:"14 Lesson /50 mins",
          locked:true
        },
        {
          title:"Parties and places involved in import/ export",
          lessons:"14 Lesson /50 mins",
          locked:true
        },
        {
          title:"Parties and places involved in import/ export",
          lessons:"14 Lesson /50 mins",
          locked:true
        },
        {
          title:"Parties and places involved in import/ export",
          lessons:"14 Lesson /50 mins",
          locked:true
        },
        {
          title:"Parties and places involved in import/ export",
          lessons:"14 Lesson /50 mins",
          locked:true
        },
        {
          title:"Parties and places involved in import/ export",
          lessons:"14 Lesson /50 mins",
          locked:true
        },
        {
          title:"Parties and places involved in import/ export",
          lessons:"14 Lesson /50 mins",
          locked:true
        },
      ]
    }

    render(){

      return (
         <div className="course">
                 <h1 className="heading-primary landing__3_heading">Module 14</h1>
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
                                         {course.locked?<img src={lock} alt=""/>:null}
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
