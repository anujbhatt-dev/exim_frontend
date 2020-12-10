import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import s from "../../../../assets/images/blog-s.svg";
import m from "../../../../assets/images/blog-m.svg";
import l from "../../../../assets/images/blog-l.svg";
import Aos from "aos"
import $ from "jquery"
import "aos/dist/aos.css"
// import s from "../../../../assets/images/arrow.svg"

 class BlogMain extends Component {

   state={
     exportCount:0,
     importCount:0,
     slide:"down",
     export:[
       [
         {
           img:"",
           title:" 1 How to Start Import Export Business in India?",
           content:"the quick, brown fox jumps over a lazy dog. djs flock by when mtv ax quiz prog. junk mtv quiz graced by fox whelps. bawds jog, flick",
           date:"12 Dec 2020"
         },
         {
           img:"",
           title:" 1 How to Start Import Export Business in India?",
           content:"the quick, brown fox jumps over a lazy dog. djs flock by when mtv ax quiz prog. junk mtv quiz graced by fox whelps. bawds jog, flick",
           date:"12 Dec 2020"
         },
         {
           img:"",
           title:" 1 How to Start Import Export Business in India?",
           content:"the quick, brown fox jumps over a lazy dog. djs flock by when mtv ax quiz prog. junk mtv quiz graced by fox whelps. bawds jog, flick",
           date:"12 Dec 2020"
         },
       ],
       [
         {
           img:"",
           title:" 2 How to Start Import Export Business in India?",
           content:"the quick, brown fox jumps over a lazy dog. djs flock by when mtv ax quiz prog. junk mtv quiz graced by fox whelps. bawds jog, flick",
           date:"12 Dec 2020"
         },
         {
           img:"",
           title:" 2 How to Start Import Export Business in India?",
           content:"the quick, brown fox jumps over a lazy dog. djs flock by when mtv ax quiz prog. junk mtv quiz graced by fox whelps. bawds jog, flick",
           date:"12 Dec 2020"
         },
         {
           img:"",
           title:" 2 How to Start Import Export Business in India?",
           content:"the quick, brown fox jumps over a lazy dog. djs flock by when mtv ax quiz prog. junk mtv quiz graced by fox whelps. bawds jog, flick",
           date:"12 Dec 2020"
         },
       ],
       [
         {
           img:"",
           title:" 3 How to Start Import Export Business in India?",
           content:"the quick, brown fox jumps over a lazy dog. djs flock by when mtv ax quiz prog. junk mtv quiz graced by fox whelps. bawds jog, flick",
           date:"12 Dec 2020"
         },
         {
           img:"",
           title:" 3 How to Start Import Export Business in India?",
           content:"the quick, brown fox jumps over a lazy dog. djs flock by when mtv ax quiz prog. junk mtv quiz graced by fox whelps. bawds jog, flick",
           date:"12 Dec 2020"
         },
         {
           img:"",
           title:" 3 How to Start Import Export Business in India?",
           content:"the quick, brown fox jumps over a lazy dog. djs flock by when mtv ax quiz prog. junk mtv quiz graced by fox whelps. bawds jog, flick",
           date:"12 Dec 2020"
         },
       ],
     ]
   }

    componentDidMount=()=>{
      Aos.init({
         duration: 1500,
         delay: 100,
       });
    }

   downArrow=(category)=>{
     if(category==="export"){
       this.setState({
         exportCount:this.state.exportCount===this.state.export.length-1?0:this.state.exportCount+1,
         slide:"up"
       })
     }else{
       this.setState({
         importCount:this.state.importCount===this.state.export.length-1?0:this.state.importCount+1,
       })
     }
   }

   upArrow=(category)=>{
     if(category==="export"){
       this.setState({
         exportCount:this.state.exportCount===0?this.state.export.length-1:this.state.exportCount-1,
         slide:"up"
       })
     }else{
       this.setState({
         importCount:this.state.importCount===0?this.state.export.length-1:this.state.importCount-1,
       })
     }
   }

   // <Link to="/blogs">more..</Link>
    render() {
        return (
          <div className="mainBlogs">
            {
              // latest
            }
            <div  className="mainBlogs__1">
               <img src={l} alt=""/>
               <div  className="mainBlogs__1_text">
                   <div className="mainBlogs__1_text-title">How to Start Import Export Business in India?</div>
                   <div  className="mainBlogs__1_text-detail">
                       <div  className="mainBlogs__1_text-detail--date">12 Dec 2020</div>
                       <div className="mainBlogs__1_text-detail--by">written by: <strong>zush</strong></div>
                   </div>
               </div>
            </div>

            {
              // first flex
            }

            <div className="mainBlogs__2">
                <div className="mainBlogs__2_flex">
                    <div className="mainBlogs__2_flex-box">
                        <img src={m} alt=""/>
                        <div className="mainBlogs__2_flex-box--title">How to Start Import Export Business in India?</div>
                        <div className="mainBlogs__2_flex-box--content">the quick, brown fox jumps over a lazy dog. djs flock by when mtv ax quiz prog. junk mtv quiz graced by fox whelps. bawds jog, flick</div>
                        <div className="mainBlogs__2_flex-box--date">10 Dec 2020</div>
                    </div>

                    <div className="mainBlogs__2_flex-box">
                        <img src={m} alt=""/>
                        <div className="mainBlogs__2_flex-box--title">How to Start Import Export Business in India?</div>
                        <div className="mainBlogs__2_flex-box--content">the quick, brown fox jumps over a lazy dog. djs flock by when mtv ax quiz prog. junk mtv quiz graced by fox whelps. bawds jog, flick</div>
                        <div className="mainBlogs__2_flex-box--date">10 Dec 2020</div>
                    </div>

                    <div className="mainBlogs__2_flex-box">
                        <img src={m} alt=""/>
                        <div className="mainBlogs__2_flex-box--title">How to Start Import Export Business in India?</div>
                        <div className="mainBlogs__2_flex-box--content">the quick, brown fox jumps over a lazy dog. djs flock by when mtv ax quiz prog. junk mtv quiz graced by fox whelps. bawds jog, flick</div>
                        <div className="mainBlogs__2_flex-box--date">10 Dec 2020</div>
                    </div>
                </div>
            </div>

            {
              //carousel
            }

            <div className="mainBlogs__3">
               <div className="mainBlogs__3_1">
                  <h1 className="heading-primary">Exports</h1>
                  <div  className="mainBlogs__3_arrow"  onClick={()=>this.upArrow("export")}><i class="fa fa-arrow-up" aria-hidden="true"></i></div>
                  <div className="mainBlogs__3_slide">

                  {this.state.export[this.state.exportCount].map((blog,i)=>{
                    return <div className="mainBlogs__3_slide-box" >
                               <div>
                                   <div className="mainBlogs__3_slide-box--title">{blog.title}</div>
                                   <div className="mainBlogs__3_slide-box--content">{blog.content}</div>
                                   <div className="mainBlogs__3_slide-bo--date">{blog.date}</div>
                               </div>
                               <img src={s} alt=""/>
                           </div>
                  })}

                  </div>
                  <div  className="mainBlogs__3_arrow"  onClick={()=>this.downArrow("export")}><i class="fa fa-arrow-down" aria-hidden="true"></i></div>
               </div>

               <div className="mainBlogs__3_1">
                  <h1 className="heading-primary">Exports</h1>
                  <div  className="mainBlogs__3_arrow"  onClick={()=>this.upArrow("import")}><i class="fa fa-arrow-up" aria-hidden="true"></i></div>
                  <div className="mainBlogs__3_slide">

                  {this.state.export[this.state.importCount].map((blog,i)=>{
                    return <div className="mainBlogs__3_slide-box">
                               <div>
                                   <div className="mainBlogs__3_slide-box--title">{blog.title}</div>
                                   <div className="mainBlogs__3_slide-box--content">{blog.content}</div>
                                   <div className="mainBlogs__3_slide-bo--date">{blog.date}</div>
                               </div>
                               <img src={s} alt=""/>
                           </div>
                  })}

                  </div>
                  <div  className="mainBlogs__3_arrow"  onClick={()=>this.downArrow("import")}><i class="fa fa-arrow-down" aria-hidden="true"></i></div>
               </div>
            </div>

            {
              //last flex
            }

            <div className="mainBlogs__2">
                <div className="mainBlogs__2_flex">
                    <div className="mainBlogs__2_flex-box">
                        <img src={m} alt=""/>
                        <div className="mainBlogs__2_flex-box--title">How to Start Import Export Business in India?</div>
                        <div className="mainBlogs__2_flex-box--content">the quick, brown fox jumps over a lazy dog. djs flock by when mtv ax quiz prog. junk mtv quiz graced by fox whelps. bawds jog, flick</div>
                        <div className="mainBlogs__2_flex-box--date">10 Dec 2020</div>
                    </div>

                    <div className="mainBlogs__2_flex-box">
                        <img src={m} alt=""/>
                        <div className="mainBlogs__2_flex-box--title">How to Start Import Export Business in India?</div>
                        <div className="mainBlogs__2_flex-box--content">the quick, brown fox jumps over a lazy dog. djs flock by when mtv ax quiz prog. junk mtv quiz graced by fox whelps. bawds jog, flick</div>
                        <div className="mainBlogs__2_flex-box--date">10 Dec 2020</div>
                    </div>

                    <div className="mainBlogs__2_flex-box">
                        <img src={m} alt=""/>
                        <div className="mainBlogs__2_flex-box--title">How to Start Import Export Business in India?</div>
                        <div className="mainBlogs__2_flex-box--content">the quick, brown fox jumps over a lazy dog. djs flock by when mtv ax quiz prog. junk mtv quiz graced by fox whelps. bawds jog, flick</div>
                        <div className="mainBlogs__2_flex-box--date">10 Dec 2020</div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default BlogMain
