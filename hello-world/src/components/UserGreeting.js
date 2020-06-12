import React, { Component } from 'react'

 class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggerIn: false
        }
    }
    
    render() {
        //Short Circuit Operator
        return this.state.isLoggerIn && <div>Welcome Ashmeet</div>
        
        // Ternary Conditional Operator
        // return this.state.isLoggerIn ?(
        //     <div>Welcome Ashmeet</div>
        //     ):(
        //     <div>Welcome Guest</div>
        // )
    
        //Element Variables
    //     let message
    //     if(this.state.isLoggerIn){
    //         message = <div>Welcome Ashmeet</div>
    //     }else{
    //         message = <div>Welcome Guest</div>
    //     }
    
    //If-Else
    // return <div>{message}</div>
        // if(this.state.isLoggedIn){
        //     return <div>Welcome Ashmeet</div>
        // } else{
        //     return <div>Welcome Guest</div>
        // }
        // return (
        //     <div>
        //         <div>Welcome Ashmeet</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
