import React, { Component } from 'react'
import axios from 'axios';


const custom_style ={
  color : 'black',
  background : 'Yellow'
}
class ListData extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        heading : "",
        message : "",
        sendOff : "",
        count : 0
      }
    }
    componentDidMount()
    {
        //ikada axios code rasam anuko, it gets executed as soon as the component gets mounted.
    }
    buttonClicked = ()=>
    {
        axios.get("https://api.chucknorris.io/jokes/random")
        .then((success)=>{
            var text = success.data.value
            if(text.indexOf("Chuck Norris's") > -1)
            {
              text = text.replaceAll("Chuck Norris's","Kowshik's")
            }
            else if(text.indexOf("Chuck Norris") > -1)
            {
              text = text.replaceAll("Chuck Norris","Kowshik")
            }
            text.charAt(0).replace("",text.charAt(0).toUpperCase())
            this.setState({
                heading : "The joke you got is",
                message : text,
                sendOff : "Hope, Kowshik made your day."
            })
        })
        .catch(()=>
        {

            this.setState({
                message : "something fishy"
            })
            console.log("something error");
        })
        this.setState({
          count : this.state.count+1
        })
    }
  render() {
    if(this.state.count === 0)
    {
      return (
        <div>
          <h3>{this.state.heading}</h3>
          <h2>{this.state.message}</h2> 
          <h3>{this.state.sendOff}</h3>
          <button onClick={this.buttonClicked} style={custom_style}>Click here to get the joke</button>
        </div>
      )
    }
    else
    {
      return (
        <div>
          <h3>{this.state.heading}</h3>
          <h2>{this.state.message}</h2> 
          <h3>{this.state.sendOff}</h3>
          <button onClick={this.buttonClicked} style={custom_style}>Click here to get another joke</button>

        </div>
      )
    }
  }
}

export default ListData