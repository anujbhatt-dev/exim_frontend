import React, { Component } from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import Spinner from "../../../../UI/spinner/spinner"
import m from "../../../../assets/images/blog-m.svg";
import l from "../../../../assets/images/blog-l.svg";


class Blogs extends Component {


    state={
        data:[],
       // categories:[],
        page:1,
        perPage:9,
        loading:true,
        totalPages:1,
     //  tags:[],
        total:0,
    }


    componentDidMount=()=>{
window.scrollTo({top:0,behavior:"smooth"});
        console.log(this.props.match.params.id);

       this.setState({selectedCategory:this.props.match.params.id,loading:true})

    }

    componentDidUpdate=()=>{

      window.scrollTo({top:100,behavior:"smooth"})


        if(this.state.selectedCategory!== this.props.match.params.id)
        this.setState({selectedCategory:this.props.match.params.id,page:1,loading:true})


        if(this.state.loading)
       {

      //  if(this.state.selectedCategory===undefined)
            axios.get("https://newsrvices.com/wp-json/wp/v2/posts?page="+this.state.page+"&per_page="+this.state.perPage).
        then(res=>{

          this.setState({selectedCategory:this.props.match.params.id,data:res.data,loading:false,totalPages:+res.headers["x-wp-totalpages"],total:+res.headers["x-wp-total"]});
        })

    //     else
    //     axios.get("https://newsrvices.com/wp-json/wp/v2/posts?page="+this.state.page+"&per_page="+this.state.perPage+"&categories="+this.props.match.params.id).
    // then(res=>{

    //   this.setState({selectedCategory:this.props.match.params.id,data:res.data,loading:false,totalPages:+res.headers["x-wp-totalpages"],total:+res.headers["x-wp-total"]});
    // })

    }
    }

    pageHandler=(val)=>{
        this.setState((state)=>{return {
            page:state.page+val,
            loading:true,
        }})

    }


    render() {
        if(this.state.data.length===0 || this.state.loading){
          return <>
                    <div className="blogs__big">
                        <img src={l} alt=""/>
                        <div><strong>Exim</strong>Blogs</div>
                    </div>
                   <Spinner/>
                   <div className="pagination">
                   {this.state.page===1?
                     <p  className="pagination__btn pagination__btn--back">-</p>:
                 <button  className="pagination__btn pagination__btn--back" onClick={()=>this.pageHandler(-1)} disabled={this.state.page===1}>{"<"}</button>
               }
                       <span>{this.state.page}/{this.state.totalPages}</span>

                       {this.state.totalPages===this.state.page?
                         <p  className="pagination__btn pagination__btn--back">-</p>:
                         <button className="pagination__btn pagination__btn--forw" onClick={()=>this.pageHandler(1)} disabled={this.state.totalPages===this.state.page} >{">"}</button>
                       }


                       <select className="pagination__select" onChange={(e)=>{
                           this.setState({
                                    perPage:e.target.value,
                                    loading:true,
                                })}}
                                value={this.state.perPage}
                         >
                           <option selected value="9">9</option>
                           <option value="12">12</option>
                           <option  value="15">15</option>
                       </select>
                   </div>
                 </>
        }





        return <div className="blogs">
                 <div className="blogs__big">
                     <img src={l} alt=""/>
                     <div><strong>Exim</strong>Blogs</div>
                 </div>
                <h1 className="heading-primary">blogs : <span>{this.state.total}</span></h1>
                <div className="blogs__flex">
                  {this.state.data.map(blog=>{
                      console.log(blog["jetpack_featured_media_url"]);
                      return (
                        <div  className="blogs__flex_box">
                            {blog["jetpack_featured_media_url"]===""?<img  className="blogs__flex_box-img" src= {m}   alt=""/>:<img  className="blogs__flex_box-img" src= {blog["jetpack_featured_media_url"]}   alt=""/>}
                            <h1  className="blogs__flex_box-title">{blog.title.rendered}</h1>
                            <td className="blogs__flex_box-content" dangerouslySetInnerHTML={{__html:(blog.excerpt.rendered.substring(0,200))}} />
                            {
                              // {blog.content.rendered.substring(0,200)}
                            }
                            <div className="blogs__flex_box-date">{blog.date.substring(0,blog.date.indexOf("T"))}</div>

                            <Link to={"/blogs/"+blog.id}>go...</Link>
                        </div>
                  )})}
                </div>

                <div className="pagination">
                {this.state.page===1?
                  <p  className="pagination__btn pagination__btn--back">-</p>:
                  <button
                     className="pagination__btn pagination__btn--back" onClick={()=>this.pageHandler(-1)} disabled={this.state.page===1}>
                     {"<"}
                     </button>}
                    <span>{this.state.page}/{this.state.totalPages}</span>
                    {this.state.totalPages===this.state.page?
                      <p  className="pagination__btn pagination__btn--back">-</p>:
                      <button className="pagination__btn pagination__btn--forw" onClick={()=>this.pageHandler(1)} disabled={this.state.totalPages===this.state.page} >{">"}</button>
                    }

                    <select className="pagination__select" onChange={(e)=>{
                        this.setState({
                                 perPage:e.target.value,
                                 loading:true,
                             })}}
                         value={this.state.perPage}
                     >
                        <option selected value="9">9</option>
                        <option value="12">12</option>
                        <option  value="15">15</option>
                    </select>
                </div>
              </div>

    }
}


export default  withRouter(Blogs);
