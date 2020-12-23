import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import s from "../../../../assets/images/blog-s.svg";
import m from "../../../../assets/images/blog-m.svg";
import l from "../../../../assets/images/blog-l.svg";
import sarrow from "../../../../assets/images/slide-arrow.svg";
import Aos from "aos"
import $ from "jquery"
import "aos/dist/aos.css"
import axios from 'axios';
import blogs from '../blogs/blogs';
import Spinner from "../../../../UI/spinner/spinner"

 class BlogMain extends Component {

   state={
     exportCount:1,
     importCount:1,
     slide:"down",
     blogs1:[ 
      {
        title:"",
        date:"",
        content:"",
         },
       {
          title:"",
          date:"",
          content:"",
      },


     ],
     blogs2:[],
     mainBlog:[{
      content:"",
      date:"",
      title:"",
    }],
     category1:[ ],
     category2:[],

   }

    componentDidMount=()=>{
window.scrollTo({top:0,behavior:"smooth"});
      Aos.init({
         duration: 1500,
         delay: 100,
       });


       axios.get("https://newsrvices.com/wp-json/wp/v2/posts?page="+1+"&per_page="+1).
        then(res=>{
          this.setState({mainBlog:res.data});
          // alert(this.state.mainBlog);
        })


       axios.get("https://newsrvices.com/wp-json/wp/v2/posts?page="+1+"&per_page="+4).
       then(res=>{

         this.setState({blogs1:res.data});
       })


       axios.get("https://newsrvices.com/wp-json/wp/v2/posts?page="+2+"&per_page="+4).
        then(res=>{

          this.setState({blogs2:res.data});
        })


        axios.get("https://newsrvices.com/wp-json/wp/v2/posts?categories="+38+"&per_page=3&page=1").
        then(res=>{
          this.setState({category1:res.data});
        })


        axios.get("https://newsrvices.com/wp-json/wp/v2/posts?categories="+40+"&per_page=3&page=1").
        then(res=>{
          this.setState({category2:res.data});
        })


      }

   downArrow=(category)=>{
     if(category==="export"){
       this.setState({
         exportCount:this.state.exportCount===(Math.floor(this.state.category2.length/3))-1?0:this.state.exportCount+1,
         slide:"up"
       })
     }else{
       this.setState({
         importCount:this.state.importCount===(Math.floor(this.state.category1.length/3))-1?0:this.state.importCount+1,
       })
     }
   }

   upArrow=(category)=>{
     if(category==="export"){
       this.setState({
         exportCount:this.state.exportCount===0?(Math.floor(this.state.category2.length/3))-1:this.state.exportCount-1
       })
     }else{
       this.setState({
         importCount:this.state.importCount===0?(Math.floor(this.state.category1.length/3))-1:this.state.importCount-1,
       })
     }
   }

   //
    render() {

        if(!this.state.mainBlog && this.state.category1.length===0 && this.state.category2.length===0 && this.state.blogs2.length===0 && this.state.blogs1.length===0){
          return <Spinner/>
        }

        return (
          <div className="mainBlogs">
            {
              // latest
            }

           {this.state.mainBlog?
           <div  className="mainBlogs__1">
               <Link className="link" to={"/blogs/"+this.state.mainBlog[0].id}>go...</Link>
               {this.state.mainBlog[0]["jetpack_featured_media_url"]===""?<img src={l} alt=""/>:<img src={this.state.mainBlog[0]["jetpack_featured_media_url"]} alt=""/>}
               <div  className="mainBlogs__1_text">
          <div>
                <div className="mainBlogs__1_text-title">{this.state.mainBlog[0].title.rendered}</div>
                <td className="mainBlogs__1_text-content" dangerouslySetInnerHTML={{__html:(this.state.mainBlog[0].excerpt.rendered)}} />
            </div>
                   <div  className="mainBlogs__1_text-detail">
                       <div  className="mainBlogs__1_text-detail--date">{this.state.mainBlog[0].date.substring(0,this.state.mainBlog[0].date.indexOf("T"))}</div>
                       {/* <div className="mainBlogs__1_text-detail--by">written by: <strong>zush</strong></div> */}
                   </div>
               </div>
            </div>:null}

            {
              // first flex
            }

            {this.state.blogs1.length===0?<Spinner/>:<div className="mainBlogs__2">
                <div className="mainBlogs__2_flex">


                {this.state.blogs1.length>1?this.state.blogs1.map((blog,i)=>


                  {
                    
                    if(i===0)
                    return ;
                    else
                    return( <div className="mainBlogs__2_flex-box">
                        <Link className="link" to={"/blogs/"+blog.id}>go...</Link>
                        {blog["jetpack_featured_media_url"]===""?<img src={m} alt=""/>:<img src={blog["jetpack_featured_media_url"]} alt=""/>}
                        <div className="mainBlogs__2_flex-box--title">{blog.title.rendered.substring(0,70)}..</div>
                        <div className="mainBlogs__2_flex-box--content">
                        <td dangerouslySetInnerHTML={{__html:(blog.excerpt.rendered.substring(0,100))}} />...
                        </div>
                        <div className="mainBlogs__2_flex-box--date">{blog.date.substring(0,blog.date.indexOf("T"))}</div>
                    </div>)}
                    
                    
                    ):null}

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
            </div>}

            {
              //carousel
            }

            <div className="mainBlogs__3">
               {this.state.category1.length===0?<Spinner/>:<div className="mainBlogs__3_1">
                  <h1 className="heading-primary">Exports</h1>
                  <div className="mainBlogs__3_slide">

                  {this.state.category2.map((blog,i)=>{
                      return <div className="mainBlogs__3_slide-box" >
                                <Link className="link" to={"/blogs/"+blog.id}>go...</Link>
                                <div>
                                     <div className="mainBlogs__3_slide-box--title">{blog.title.rendered.substring(0,50)}..</div>
                                     <div className="mainBlogs__3_slide-box--content">
                                     <td dangerouslySetInnerHTML={{__html:(blog.excerpt.rendered.substring(0,100))}} />...
                                     </div>
                                     <div className="mainBlogs__3_slide-box--date">{blog.date.substring(0,blog.date.indexOf("T"))}</div>
                                 </div>
                                 {blog["jetpack_featured_media_url"]===""?<img src={s} alt=""/>:<img src={blog["jetpack_featured_media_url"]} alt=""/>}
                             </div>

                })}


                  </div>
               </div>}


               {this.state.category2.length===0?<Spinner/>:<div className="mainBlogs__3_1">
                  <h1 className="heading-primary">Imports</h1>
                  <div className="mainBlogs__3_slide">

                  {this.state.category1.map((blog,i)=>{
                     return <div className="mainBlogs__3_slide-box">
                                <Link className="link" to={"/blogs/"+blog.id}>go...</Link>
                                <div>
                                    <div className="mainBlogs__3_slide-box--title">{blog.title.rendered.substring(0,50)}..</div>
                                    <div className="mainBlogs__3_slide-box--content">
                                        <td dangerouslySetInnerHTML={{__html:(blog.excerpt.rendered.substring(0,100))}} />...
                                    </div>
                                    <div className="mainBlogs__3_slide-box--date">{blog.date.substring(0,blog.date.indexOf("T"))}</div>
                                </div>
                                {blog["jetpack_featured_media_url"]===""?<img src={s} alt=""/>:<img src={blog["jetpack_featured_media_url"]} alt=""/>}
                            </div>

                  })}

                  </div>
               </div>}

            </div>

            {
              //last flex
            }

            {this.state.blogs2.length===0?
            
            <Spinner/>:
            
            <div className="mainBlogs__2">
                <div className="mainBlogs__2_flex">
                 { this.state.blogs2.map((blog,i)=> 
                  
                  
                  
                { 
                  if(i===this.state.blogs2.length-1)
                  return;
                  return( <div className="mainBlogs__2_flex-box">
                        <Link className="link" to={"/blogs/"+blog.id}>go...</Link>
                        {blog["jetpack_featured_media_url"]===""?<img src={m} alt=""/>:<img src={blog["jetpack_featured_media_url"]} alt=""/>}
                        <div className="mainBlogs__2_flex-box--title">{blog.title.rendered.substring(0,70)}..</div>
                        <div className="mainBlogs__2_flex-box--content">
                        <td dangerouslySetInnerHTML={{__html:(blog.excerpt.rendered.substring(0,100))}} />...
                        </div>
                        <div className="mainBlogs__2_flex-box--date">{blog.date.substring(0,blog.date.indexOf("T"))}</div>
                    </div>)
                    
                  }
                    
                    )}
                    
                </div>
            </div>
            
            
            }

            <Link className="more" to="/blogs">more</Link>
        </div>
        )
    }
}
export default BlogMain
