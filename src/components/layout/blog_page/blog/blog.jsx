import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import axios from 'axios';


 class Blog extends Component {


    state={
        blog:null,
    }

    componentDidMount=()=>{
        axios.get("https://newsrvices.com/wp-json/wp/v2/posts/"+this.props.match.params["id"]).
        then(res=> this.setState({blog:res.data})

        );
    }


    render() {
       console.log(this.state.blog);

        return (
            <div className="blog">
                {this.state.blog!==null?
                  <div className="blog__box">
                      <h1 className="blog__box_title">{this.state.blog.title.rendered}</h1>
                      <td dangerouslySetInnerHTML={{__html:this.state.blog.content.rendered}} />
                  </div>
                    :null}
            </div>
        )
    }
}


export default withRouter( Blog);