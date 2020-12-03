import React, { Component } from 'react'


class ContactUs extends Component {

    state={
        name:"",
        mobile:"",
        email:"",
        preference:"",
    }

    onChangeHandler=(e)=>{
          this.setState({
             [e.target.name]:e.target.value,
         });
 }

 onSubmitHandler=(e)=>{
     e.preventDefault();
     console.log(this.state);
     alert("API call to PHP");
 }

    render() {
        return (
            <div>
                <form onSubmit={(e)=>this.onSubmitHandler(e)}>
                    <input required onChange={(e)=>this.onChangeHandler(e)} type="text" name="name" value={this.state.name} id=""/>
                    <input onChange={(e)=>this.onChangeHandler(e)} type="number" name="mobile" value={this.state.mobile} id=""/>
                    <input onChange={(e)=>this.onChangeHandler(e)} type="email" name="email" value={this.state.email} id=""/>
                    
                    <select required name="preference" onChange={(e)=>this.onChangeHandler(e)}>
                        <option disabled selected value hidden>Select Your Preference</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    
                    <input type="submit" value="submit"/>
                    </form>
            </div>
        )
    }
}


export default ContactUs;