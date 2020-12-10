import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import s from "../../../../assets/images/blog-s.svg";
import m from "../../../../assets/images/blog-m.svg";
import l from "../../../../assets/images/blog-l.svg";
import Aos from "aos"
import $ from "jquery"
import "aos/dist/aos.css"
import axios from 'axios';
import blogs from '../blogs/blogs';
 class BlogMain extends Component {

   state={
     exportCount:0,
     importCount:0,
     slide:"down",
     blogs1:[],
     blogs2:[],
     mainBlog:undefined,
     category1:[ ],
     category2:[],
     
   }

    componentDidMount=()=>{

      Aos.init({
         duration: 1500,
         delay: 100,
       });


       axios.get("https://newsrvices.com/wp-json/wp/v2/posts?page="+1+"&per_page="+1).
        then(res=>{
          this.setState({mainBlog:res.data});
          // alert(this.state.mainBlog);
        })

        
       axios.get("https://newsrvices.com/wp-json/wp/v2/posts?page="+1+"&per_page="+3).
       then(res=>{

         this.setState({blogs1:res.data});
       })

       
       axios.get("https://newsrvices.com/wp-json/wp/v2/posts?page="+1+"&per_page="+3).
        then(res=>{

          this.setState({blogs2:res.data});
        })


        axios.get("https://newsrvices.com/wp-json/wp/v2/posts?categories="+38).
        then(res=>{
          this.setState({category1:res.data});
        })
        

        axios.get("https://newsrvices.com/wp-json/wp/v2/posts?categories="+38).
        then(res=>{
          this.setState({category2:res.data});
        })
    
    
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

   //
    render() {

      console.log(this.state.mainBlog)

        return (
          <div className="mainBlogs">
            {
              // latest
            }
           
           {this.state.mainBlog?
           <div  className="mainBlogs__1">
               <img src={l} alt=""/>
               <div  className="mainBlogs__1_text">
          <div className="mainBlogs__1_text-title">
          <div className="mainBlogs__2_flex-box--title">{this.state.mainBlog[0].title.rendered}</div>

          <td className="blogs__flex_box-content" dangerouslySetInnerHTML={{__html:(this.state.mainBlog[0].excerpt.rendered.substring(0,100))}} />....
            </div>
                   <div  className="mainBlogs__1_text-detail">
                       <div  className="mainBlogs__1_text-detail--date">12 Dec 2020</div>
                       <div className="mainBlogs__1_text-detail--by">written by: <strong>zush</strong></div>
                   </div>
               </div>
            </div>:null}

            {
              // first flex
            }

            <div className="mainBlogs__2">
                <div className="mainBlogs__2_flex">


                {this.state.blogs1.length>1?this.state.blogs1.map(blog=> <div className="mainBlogs__2_flex-box">
                        <img src={m} alt=""/>
                        <div className="mainBlogs__2_flex-box--title">{blog.title.rendered.substring(0,100)}..</div>
                        <div className="mainBlogs__2_flex-box--content">
                        <td dangerouslySetInnerHTML={{__html:(blog.excerpt.rendered.substring(0,100))}} />..
                        </div>
                        <div className="mainBlogs__2_flex-box--date">10 Dec 2020</div>
                    </div>):null}

                    {/* <div className="mainBlogs__2_flex-box">
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
                    </div> */}
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

                  {this.state.category2.map((blog,i)=>{
                    return <div className="mainBlogs__3_slide-box" >
                              <div>
                                   <div className="mainBlogs__3_slide-box--title">{blog.title.rendered}</div>
                                   <div className="mainBlogs__3_slide-box--content">{123123}</div>
                                   <div className="mainBlogs__3_slide-bo--date">{"date"}</div>
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

                  {this.state.category1.map((blog,i)=>{
                    return <div className="mainBlogs__3_slide-box">
                               <div>
                                   <div className="mainBlogs__3_slide-box--title">{blog.title.rendered}</div>
                                   <div className="mainBlogs__3_slide-box--content">{123123}</div>
                                   <div className="mainBlogs__3_slide-bo--date">{"date"}</div>
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


                {this.state.blogs2.length>1?this.state.blogs2.map(blog=> <div className="mainBlogs__2_flex-box">
                        <img src={m} alt=""/>
                        <div className="mainBlogs__2_flex-box--title">{blog.title.rendered.substring(0,100)}..</div>
                        <div className="mainBlogs__2_flex-box--content">
                        <td dangerouslySetInnerHTML={{__html:(blog.excerpt.rendered.substring(0,100))}} />...
                        </div>
                        <div className="mainBlogs__2_flex-box--date">10 Dec 2020</div>
                    </div>):null}
                </div>
            </div>

            <Link to="/blogs">more..</Link>
        </div>
        )
    }
}
export default BlogMain
