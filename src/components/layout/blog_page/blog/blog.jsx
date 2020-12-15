import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom';
import ReactWhatsapp from 'react-whatsapp';
import download from "../../../../assets/images/download.svg";
import facebook from "../../../../assets/images/facebook.svg";
import whatsapp from "../../../../assets/images/whatsapp.svg";
import insta from "../../../../assets/images/insta.svg";
import twitter from "../../../../assets/images/twitter.svg";
import call from "../../../../assets/images/call.svg";
import m from "../../../../assets/images/blog-m.svg";

import Spinner from "../../../../UI/spinner/spinner"
import l from "../../../../assets/images/blog-l.svg";
import axios from 'axios';
import blogs from '../blogs/blogs';


 class Blog extends Component {


    state={
        blog:null,
        blogs1:undefined
    }

    componentDidMount=()=>{
      window.scrollTo({top:0,behavior:"smooth"});

        axios.get("https://newsrvices.com/wp-json/wp/v2/posts/"+this.props.match.params["id"]).
        then(res=>{
           this.setState({blog:res.data});

          if(res.data.categories.length)
           axios.get("https://newsrvices.com/wp-json/wp/v2/posts?categories="+res.data.categories[0]+"&per_page=3&page=1").
           then(res1=>this.setState({blogs1:res1.data}))
          else
          this.setState({blogs1:[]})
          }

        );
    }


    render() {
        if(this.state.blog===null){
          return <Spinner/>
        }
        return (
            <div className="blog">
                {this.state.blog!==null?
                  <div className="blog__box">
                      {this.state.blog["jetpack_featured_media_url"]===""?<img src={l} alt=""/>:<img src={this.state.blog["jetpack_featured_media_url"]} alt=""/>}
                      <div className="blog__box_flex">
                      <Link to={"/blogs"}>Exim Blogs</Link>
                      {this.state.blog.date.substring(0,this.state.blog.date.indexOf("T"))}
                      </div>
                      <h1 className="blog__box_title">{this.state.blog.title.rendered}</h1>
                      <td dangerouslySetInnerHTML={{__html:this.state.blog.content.rendered}} />
                      <Link to={"/blogs"}>Exim Blogs</Link>
                      <div  className="blog__box_social">
                         <a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a>
                         <a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a>
                         <a href=""><ReactWhatsapp element="a" number="+918517885555" message="message" >
                           <i class="fa fa-whatsapp" aria-hidden="true"></i>
                         </ReactWhatsapp></a>
                         <a href="tel://+918517885555"><i class="fa fa-phone" aria-hidden="true"></i></a>
                         <a href="https://www.linkedin.com/company/eduports"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                         <a href="https://instagram.com/eximeducation.com_"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                      </div>

                     {!this.state.blogs1?<Spinner/>:<div className="mainBlogs__2">
                              <div className="mainBlogs__2_flex blog__box_row">


                          {this.state.blogs1?this.state.blogs1.map(blog=> <div className="mainBlogs__2_flex-box">
                                  <Link className="link" to={"/blogs/"+blog.id}>go...</Link>
                                  {blog["jetpack_featured_media_url"]===""?<img className="blog__box_row-img" src={m} alt=""/>:<img  className="blog__box_row-img" src={blog["jetpack_featured_media_url"]} alt=""/>}
                                  <div className="mainBlogs__2_flex-box--title">{blog.title.rendered.substring(0,70)}..</div>
                                  <div className="mainBlogs__2_flex-box--content">
                                  <td dangerouslySetInnerHTML={{__html:(blog.excerpt.rendered.substring(0,100))}} />...
                                  </div>
                                  <div className="mainBlogs__2_flex-box--date">{blog.date.substring(0,blog.date.indexOf("T"))}</div>
                              </div>):null}
                          </div>
                      </div>}
                  </div>
                    :null}
            </div>
        )
    }
}


export default withRouter( Blog);
