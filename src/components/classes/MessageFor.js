import React, { Component } from "react"

export class MessageFor extends Component {
    state = {
        name: 'My name is......',
       
    }
    handleChange = (event) => {
        // console.log(event.target.value)
        this.setState({ name:event.target.value})
    }

   
    render () {
        return (
            <>
            <h1 style={{color: 'aqua'}}>First Message</h1>
            <h2>Message: { this.state.name}</h2>
            <input type="text" onChange={this.handleChange}/>
            </>
           
            
        )
    }
}