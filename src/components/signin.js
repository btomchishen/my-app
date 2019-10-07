import React from 'react'
import Form2 from '..//form2'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class SignIn extends React.Component{
    render(){
        return(
            <div className="App">
                
        <img src={require("..//img/register.jpg")} />
        <Form2 />            
      </div>
        )
    }
}

export default SignIn