import React, {Component} from "react"


  class Course extends Component{

    state={
      courses:[
        {
          title:"Parties and places involved in import/ export",
          locked:false
        },
        {
          title:"Parties and places involved in import/ export",
          locked:true
        },
        {
          title:"Parties and places involved in import/ export",
          locked:true
        },
        {
          title:"Parties and places involved in import/ export",
          locked:true
        },
        {
          title:"Parties and places involved in import/ export",
          locked:true
        },
        {
          title:"Parties and places involved in import/ export",
          locked:true
        },
        {
          title:"Parties and places involved in import/ export",
          locked:true
        },
        {
          title:"Parties and places involved in import/ export",
          locked:false
        },
        {
          title:"Parties and places involved in import/ export",
          locked:true
        },
        {
          title:"Parties and places involved in import/ export",
          locked:true
        },
        {
          title:"Parties and places involved in import/ export",
          locked:true
        },
        {
          title:"Parties and places involved in import/ export",
          locked:true
        },
        {
          title:"Parties and places involved in import/ export",
          locked:true
        },
        {
          title:"Parties and places involved in import/ export",
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
                                    <div  className="course__wrapper_box-count">{i+1}</div>
                                 </div>
                       })
                     }

                 </div>
         </div>
      )
    }
  }


 export default Course;
