import React from 'react'
import Footer from '../components/containers/footer'
import './footer.css';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="/About-Us">About</Footer.Link>
                    <Footer.Link href="/login">Signin</Footer.Link>
                    <Footer.Link href="#">Feedback</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="#">Marketing</Footer.Link>
                    <Footer.Link href="#">Logistics</Footer.Link>
                    <Footer.Link href="#">Safety</Footer.Link>
                    <Footer.Link href="#">Design</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">Hyderabad</Footer.Link>
                    <Footer.Link href="#">Delhi</Footer.Link>
                    <Footer.Link href="#">Jaipur</Footer.Link>
                    <Footer.Link href="#">Mumbai</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><i className="fab fa-facebook-f"></i>Facebook</Footer.Link>
                    <Footer.Link href="#"><i className="fab fa-instagram"></i>Instagram</Footer.Link>
                    <Footer.Link href="#">Git-hub</Footer.Link>
                    <Footer.Link href="#"><i className="fab fa-twitter"></i>Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
            <div className="copyright">Copyright &copy;{new Date().getFullYear()} Danish Tech | All rights reserved | Terms of service | privacy</div>
            
        </Footer>
    )
}