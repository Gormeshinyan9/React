import React, { Component } from 'react'
import Input from '@material-ui/core/Input';
import './App.css'

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
         backgroundColor: '',
         color: ''
        }
        localStorage.setItem('key','value')
    }

    colorchange  =(e) => {
        this.setState({
            color:e.target.value,
        })
    }

    bgchange  =(e) => {
        this.setState({
            backgroundColor:e.target.value,
        })
    } 
    
    render() {
        return(
            <>
            <div></div>
                <div className="div">
                    <input placeholder="Change Text Color"  onChange={this.colorchange}/>
                    <input placeholder="Change BG Color" onChange={this.bgchange} />
                </div>
                <span className="span" style={{
                    color:this.state.color,
                    backgroundColor:this.state.backgroundColor
                }} >
                    HELLO WORLD!...
                </span>
            </>
            
        )
    }
    
}

export default Main