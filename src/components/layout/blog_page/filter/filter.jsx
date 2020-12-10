// import React, { Component } from 'react'
// import axios from 'axios'
// import { Link, withRouter } from 'react-router-dom'


//  class Filter extends Component {

//     state={
      
//         categories:[],
//         tags:[],
//     }

    
//     componentDidMount=()=>{

//          axios.get("https://newsrvices.com/wp-json/wp/v2/categories").
//          then(res=>{
//            this.setState({categories:res.data});
//          })
//           axios.get("https://newsrvices.com/wp-json/wp/v2/tags").
//          then(res=>{
//            this.setState({tags:res.data});
//          })
//      }
 
//     render() {
//         return (
//             <div>
//                 Categories
//                  <Link  to={"/blogs/category/"}>All</Link>
//                 {this.state.categories.map(category=><Link to={"/blogs/category/"+category.id}>{category.name}</Link>)}

// <br/>
//                Tags
//                 {this.state.tags.map(category=><Link to={"/blogs/tag/"+category.id}>{category.name}</Link>)}
//             </div>
//         )
//     }
// }


// export default Filter;