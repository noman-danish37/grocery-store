import React, { Component } from 'react'
import './HomePage.css'
import Directory from './directory';
import { FooterContainer} from './footer';
import { Link } from "react-router-dom";
import About from './about';

export default class HomePage extends Component {
    render() {
        return (
          <div> 
            <div className="header">
                <div className="header-inputs">
                    <span className="input">
                    <Link className="link" to= '/shop'>Fruits</Link></span>
                </div>
                <div className="header-inputs">
                    <span className="input"><Link className="link" to= '/shop'>Veggies</Link></span>
                </div>
                <div className="header-inputs">
                    <span className="input"><Link className="link" to= '/shop'>Dairy</Link></span>
                </div>
                <div className="header-inputs">
                    <span className="input"><Link className="link" to= '/shop'>Biscuits&Chocolates</Link></span>
                </div>
                <div className="header-inputs">
                    <span className="input"><Link className="link" to= '/shop'>Electronics</Link></span>
                </div>
                <div className="header-inputs">
                    <span className="input"><Link className="link" to= '/shop'>Kitchen-Appliances</Link></span>
                </div>
            </div>
            <div className="hp-centre">
                <div className="hp-centre-p1">
                    <img className="centre-pic" src="/pics/pic1.jpg" />
                </div>
            </div>
           
            <Directory />
           
            <About />
          </div>  
          
        );
    }
  
}
