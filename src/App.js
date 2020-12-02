import React from "react"
import "./App.scss";
import Layout from "./components/layout/layout"
import {BrowserRouter} from "react-router-dom"
import ReactGa from 'react-ga'

class App extends React.Component {

  render(){

    return (
      <div className="App">
           <BrowserRouter>
              <Layout/>
           </BrowserRouter>
      </div>
    );
  }
}

export default App;
