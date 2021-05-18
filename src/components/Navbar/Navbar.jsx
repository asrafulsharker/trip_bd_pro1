import React, { Component ,useState} from 'react';
import {MenuItems} from './MenuItems';
import {Button} from './Button';
import auth from '../Auth/Auth1';
import './Navbar.scss'
import Logo from '../../images/logo.png';
class Navbar extends React.Component{
    state ={clicked: false}

    handleClick=()=>{
        this.setState({clicked : !this.state.clicked})
    }

    render(){
        return(
            <nav className="NavbarItems">
                {/* <h1 className="navbar-logo">React</h1> */}
                <img className="navbar-logo" src={Logo} alt="logo"/>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index)=>{
                        return(
                            <li key={index} onClick={this.handleClick}> 
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a> 
                            </li>
                        )
                    })}
                </ul>
                <button className="signin" ><a href="#auth">Sign In</a></button>
                <button className="signup">Sign Up</button>
            </nav>
        )
    }
}


export default Navbar;