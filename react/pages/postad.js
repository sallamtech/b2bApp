import React from 'react';
//import { Table } from 'react-bootstrap';
import {Form, FormControl, Button, Table, Carousel, Jumbotron} from 'react-bootstrap';

class postad extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('The ad titled '+ this.state.value +' was submitted: ');
    event.preventDefault();
  }
    
    render() {
        return (
        <div class="submit-ad main-grid-border">
		<div class="container">
			<h2 class="w3-head">Post an Ad</h2>
			<div class="post-ad-form">
				<form onSubmit={this.handleSubmit}>
					<label>Select Category <span>*</span></label>
					<select class="">
					  <option>Select Category</option>
					  <option>Mobiles</option>
					  <option>Electronics and Appliances</option>
					  <option>Cars</option>
					  <option>Bikes</option>
					  <option>Furniture</option>
					  <option>Pets</option>
					  <option>Books, Sports and hobbies</option>
					  <option>Fashion</option>
					  <option>Kids</option>
					  <option>Services</option>
					  <option>Real, Estate</option>
					</select>
					<div class="clearfix"></div>
					<label>Ad Title <span>*</span></label>
					<input type="text" class="phone" placeholder="" value={this.state.value} onChange={this.handleChange}/>
					<div class="clearfix"></div>
					<label>Ad Description <span>*</span></label>
					<textarea class="mess" placeholder="Write few lines about your ad"></textarea>
					<div class="clearfix"></div>
					<div class="upload-ad-photos">
				<label>Photos for your ad :</label>	
					<div class="photos-upload-view">
						<form id="upload" action="#" method="POST" enctype="multipart/form-data">

						<input type="hidden" id="MAX_FILE_SIZE" name="MAX_FILE_SIZE" value="300000" />

						<div>
							<input type="file" id="fileselect" name="fileselect[]" multiple="multiple" />
							<div id="filedrag">or drop files here</div>
						</div>


						</form>

						</div>
					<div class="clearfix"></div>
						<script src="js/filedrag.js"></script>
				</div>
					<div class="personal-details">
					<form>
						<label>Your Name <span>*</span></label>
						<input type="text" class="name" placeholder=""/>
						<div class="clearfix"></div>
						<label>Your Mobile No <span>*</span></label>
						<input type="text" class="phone" placeholder=""/>
						<div class="clearfix"></div>
						<label>Your Email Address<span>*</span></label>
						<input type="text" class="email" placeholder=""/>
						<div class="clearfix"></div>
						<p class="post-terms">By clicking <strong>post Button</strong> you accept our <a href="#terms" target="_blank">Terms of Use </a> and <a href="#privacy" target="_blank">Privacy Policy</a></p>
					<input type="submit" value="Post"/>					
					<div class="clearfix"></div>
					</form>
					</div>
				</form>
			</div>
		</div>	
	</div>
        )
    }
}

export default postad;