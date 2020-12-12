import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom';
import Spinner from "../../../../UI/spinner/spinner"
import l from "../../../../assets/images/blog-l.svg";
import axios from 'axios';


 class Blog extends Component {


    state={
        blog:null,
    }

    componentDidMount=()=>{
      window.scrollTo({top:0,behavior:"smooth"});

        axios.get("https://newsrvices.com/wp-json/wp/v2/posts/"+this.props.match.params["id"]).
        then(res=> this.setState({blog:res.data})

        );
    }


    render() {
       console.log(this.state.blog);
        if(this.state.blog===null){
          return <Spinner/>
        }
        return (
            <div className="blog">
                {this.state.blog!==null?
                  <div className="blog__box">
                      {this.state.blog["jetpack_featured_media_url"]===""?<img src={l} alt=""/>:<img src={this.state.blog["jetpack_featured_media_url"]} alt=""/>}
                      <Link to={"/blogs"}>Exim Blogs</Link>
                      {this.state.blog.date.substring(0,this.state.blog.date.indexOf("T"))}
<br/>
                      <h1 className="blog__box_title">{this.state.blog.title.rendered}</h1>
                      <td dangerouslySetInnerHTML={{__html:this.state.blog.content.rendered}} />
                  </div>
                    :null}
            </div>
        )
    }
}


export default withRouter( Blog);
