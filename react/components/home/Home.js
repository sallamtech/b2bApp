import React, { Component } from 'react';
import axios from 'axios';
import {Icon, Input, Button, Col, Row, CardPanel, Slider, Tabs, Tab, CardTitle, Card} from 'react-materialize';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    document.getElementById("demo").innerHTML = 'Your favorite flavor is: ' + this.state.value;
    event.preventDefault();
  }

  render() {
    
    return (
      <div className=''>
      
       <Col s={12} m={12}>
       
        <div class="card center">
        <h4>ELECTRONICS</h4>
        <div class="col s12 m12">
          <div class="card horizontal cardit">
            <div class="card-image col s12 m6 hide-on-small-only">
              <img class="col s12 m12" src="http://anscomputerscny.com/images/ascollage.png"/>
            </div>
            <div class="card-stacked col s12 m6">
              <div class="card-content">
              
              <div class="row">
                <div class="center col s12 m4">
                <p>TVs</p>
                  <div class="cardSS-image">
                    <img class="col s12 m12" src="http://images.samsung.com/is/image/samsung/my-full-hd-k6300-ua49k6300akxxm-001-front-black?$PD_GALLERY_L_JPG$"/>
                  </div>
               
                </div>
                
                 <div class="col s12 m4">
                <p class='center'>Mobile Phones</p>
                  <div class="cardSS-image">
                    <img class="col s12 m12"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-bAuaYAvLkYNmSGJIIOlTd-TpUY3BerJDm9cuPmaxB5mdtjNOSA"/>
                  </div>
               
                </div>
                
                 <div class="col s12 m4">
                <p class='center'>Tablets</p>
                  <div class="cards-image">
                    <img class="col s12 m12"  src="https://image.freepik.com/free-icon/big-tablet_318-10958.jpg"/>
                     <a class="btn-floating halfway-fab waves-effect waves-light grey darken-4"><i class="material-icons">list</i></a>
                  </div>
                </div>
                
            </div>
            <div class="row hide-on-small-only">
              <div class="col s12 m4">
                <p class='center'>iPads</p>
                  <div class="cardSS-image">
                    <img class="col s12 m12"  src="https://www.shareicon.net/download/2015/09/28/108533_mobile_512x512.png"/>
                  </div>
               
                </div>
                <div class="center col s12 m4">
                <p>Computers</p>
                  <div class="cardSS-image">
                    <img class="col s12 m12" src="https://cdn2.iconfinder.com/data/icons/ourea-icons/256/Computer_256x256-32.png"/>
                  </div>
                </div>
                
                
                 <div class="col s12 m4">
                <p class='center'>iPhones</p>
                  <div class="cards-image">
                    <img class="col s12 m12"  src="https://cdn2.iconfinder.com/data/icons/modern-future-technology/128/mobile-phone-512.png"/>
                     <a class="btn-floating halfway-fab waves-effect waves-light grey darken-4"><i class="material-icons">list</i></a>
                  </div>
                  
                  
                </div>
                
            </div>
                
              </div>
            
            </div>
          </div>
        </div>
            
        </div>
                         
        
      </Col>
      
      </div>
    );
  }
}

export default Home;