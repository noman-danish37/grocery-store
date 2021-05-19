import React from 'react'
import LocationSearchModal from '../geo-location/geo-location';
import './about.css';

function About() {
    return (
        <div className="about">
        <h1 className="title"><a href="About-Us">About-Us</a></h1>
         <p className="about-content">This page is created to ensure the safety of the people in the time of covid-19</p>
         <p className="about-content">This would allow the people to stay at home and order all the required essential household items by staying inside their homes</p>
         <p className="about-content">On every transaction &#x20B9;5 would be used to help the needy in this covid crisis. </p>
         <p className="about-content">This is our location given below:-</p>
         
         
        <LocationSearchModal />
        <div className="later=topics">
            <h2>This site would constantly be developed.</h2>
            <h3>We would later on add features like advance routing,and more dynamic contents.</h3>
        </div>
        <h2 className="h2">Stay-Home & Stay-Safe.</h2>
        <h3 className="h3">Thank you</h3>
        
        </div>
    )
}

export default About
