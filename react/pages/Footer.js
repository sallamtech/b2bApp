import React from 'react';
//import { Table } from 'react-bootstrap';
import {Form, FormControl, FormGroup, InputGroup, ControlLabel, Button, Table, Carousel, Jumbotron, Panel, Col, DropdownButton, MenuItem, } from 'react-bootstrap';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class Footer extends React.Component {
    render() {
    
        return (
            <footer>
			<div class="w3-agileits-footer-top">
			<div class="container">
			
			<div class="wthree-foo-grids">
						<div class="col-md-3 wthree-footer-grid">
							<h4 class="footer-head">Get started</h4>
							<ul>
								<li><a href="#"><i class="fa fa-long-arrow-right" aria-hidden="true"></i>Home</a></li>						
								<li><a href="#Sign up"><i class="fa fa-long-arrow-right" aria-hidden="true"></i>Sign up</a></li>
								<li><a href="#downloads"><i class="fa fa-long-arrow-right" aria-hidden="true"></i>Downloads</a></li>
							</ul>
						</div>
						<div class="col-md-3 wthree-footer-grid">
							<h4 class="footer-head">About us</h4>
							<ul>
								<li><a href="#company-information"><i class="fa fa-long-arrow-right" aria-hidden="true"></i>Company Information</a></li>						
								<li><a href="#contact"><i class="fa fa-long-arrow-right" aria-hidden="true"></i>Contact us</a></li>
								<li><a href="#reviews"><i class="fa fa-long-arrow-right" aria-hidden="true"></i>Reviews</a></li>
							</ul>
						</div>
						<div class="col-md-3 wthree-footer-grid">
							<h4 class="footer-head">Customer Services</h4>
							<ul>
								<li><a href="#faq"><i class="fa fa-long-arrow-right" aria-hidden="true"></i>FAQ</a></li>	
								<li><a href="#help"><i class="fa fa-long-arrow-right" aria-hidden="true"></i>Help desk</a></li>
								<li><a href="#forums"><i class="fa fa-long-arrow-right" aria-hidden="true"></i>Forums</a></li>	
							</ul>
						</div>
						<div class="col-md-3 wthree-footer-grid">
							<h4 class="footer-head">Legal</h4>
							<ul>
								<li><a href="#terms"><i class="fa fa-long-arrow-right" aria-hidden="true"></i>Terms of Service</a></li>	
								<li><a href="#terms"><i class="fa fa-long-arrow-right" aria-hidden="true"></i>Terms of Use</a></li>
								<li><a href="#privacy"><i class="fa fa-long-arrow-right" aria-hidden="true"></i>Privacy Policy</a></li>	
							</ul>
						</div>
						<div class="clearfix"></div>
					</div>	
			</div>
		</div>
		<div class="agileits-footer-bottom text-center">
			<div class="container">
			
				<div class="w3-footer-social-icons">
					<ul>
						<li><a class="facebook" href="#"><i class="fa fa-facebook" aria-hidden="true"></i><span>Facebook</span></a></li>
						<li><a class="twitter" href="#"><i class="fa fa-twitter" aria-hidden="true"></i><span>Twitter</span></a></li>
						<li><a class="googleplus" href="#"><i class="fa fa-google-plus" aria-hidden="true"></i><span>Google+</span></a></li>
					</ul>
				</div>
				<div class="copyrights">
					<p> © 2017 Copyright Text</p>
				</div>
				<div class="clearfix"></div>
				</div>
				</div>
		</footer>
        );
    }
}

export default Footer;