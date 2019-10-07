import React from 'react'
import Form from '..//form'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class SignUp extends React.Component{
    render(){
        return(
            <div className="App">
                
        <img src={require("..//img/register.jpg")} />
        <Form />            
      </div>
        )
    }
}

export default SignUp