import React, { Component } from 'react'
import Display from './Components/Display'
import DashBoard from './dashboard/Dashboard'

export default class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           balls: 0,
           strikes: 0
        }
      }
      handleBalls = () =>{
        this.setState(prevBalls => ({
          balls: prevBalls.balls + 1
        }))
      }
    
      handleStrikes =() =>{
        this.setState(prevStrikes =>({
          strikes: prevStrikes.strikes + 1
        }))
      }
    
      componentDidMount(){
    
      }
      componentDidUpdate(prevState,prevProps){
        if(prevProps.balls >= 4){
          this.setState({
            balls: 0
          })
        }
        if(prevProps.strikes >=3){
          this.setState({
            strikes: 0
          })
        }
    
      }
    
    render() {
      return (
        <div>
  <h1>Hello World</h1>
        <Display balls = {this.state.balls} strikes = {this.state.strikes} />
        <DashBoard handleBalls = {this.handleBalls} handleStrikes = {this.handleStrikes} />
        </div>
      )
    }
  }