import React, { Component } from 'react';
import './Logo.css'

class Logo extends Component {
    
    handleClick = () => {
        // const {match, history}=this.props
        // history.push(`${match.url}`)
        if(window.scrollY !== 0) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
    
    render() {                
        return (
            <div className="logo" onClick={this.handleClick}>
                <img src="https://about.canva.com/wp-content/uploads/sites/3/2016/08/Band-Logo.png" alt="logo" style={{width:"80px"}}/>
            </div>
        );
    }
}

export default Logo;