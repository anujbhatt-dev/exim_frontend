import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import axios from 'axios';


 class Blog extends Component {


    state={
        blog:null,
    }

    componentDidMount=()=>{
        axios.get("http://127.0.0.1/wordpress/wp-json/wp/v2/posts?include="+this.props.match.params["id"]).
        then(res=> this.setState({blog:res.data[0]})
        
        );
    }


    render() {
        
        return (
            <div>
                {this.state.blog!==null?<><h1>{this.state.blog.title.rendered}</h1>
                    <td dangerouslySetInnerHTML={{__html:this.state.blog.content.rendered}} />
                    </>
                    :null}
            </div>
        )
    }
}


export default withRouter( Blog);