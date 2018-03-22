import React, { Component } from 'react';
import axios from 'axios';
import {Table, Collection, CollectionItem, Badge, Tabs, Tab, Collapsible, CollapsibleItem, Icon, Input, Modal, Button, Card, CardTitle, Col, Row, CardPanel, Carousel, Slider, Slide, Autocomplete, Chip, Tag} from 'react-materialize';
import InfiniteScroll from 'react-infinite-scroller';
import createClass from 'create-react-class';
    
class ActiveProducts extends Component { 



render() {
    
    var filterData = [
  { name: 'Iphone 7', category: 'Phone', location: 'New York', description: 'Apple · iPhone · iPhone 7 · iPhone 7 (Original) · iOS · 4.7 in · Fingerprint Scanner · Rear Camera: 12 MP · 4G LTE · 14 hours talk time' },
  { name: 'Samsung Chromebook', category: 'Laptop', location: 'California', description: 'Just what you need, exactly what you want Samsungs Chromebook provides the perfect balance to computing and mobility.' },
  { name: 'Apple iMac', category: 'Computer', location: 'Buffalo', description: 'A desktop experience that draws you in and keeps you there: this is the idea behind iMac. And now that idea is more powerful.' }
];
var FilterForm = createClass({
  getInitialState: function() {
    return {
      data: this.props.data,
      category: '',
      location: ''
    }
  },
  filterItems: function(val, type) {
     switch (type) {
      case 'category':
        this.setState({category: val});
        break;
      case 'location': 
        this.setState({location: val});
        break;
      default:
        break;
    }
  },
  render: function() {
    var filteredItems = this.props.data;
    var state = this.state;
    ["category", "location"].forEach(function(filterBy) {
      var filterValue = state[filterBy];
      if (filterValue) {
        filteredItems = filteredItems.filter(function(item) {
          return item[filterBy] === filterValue;
        });
      }
    });
    var categoryArray = this.props.data.map(function(item) { return item.category });
    var locationArray = this.props.data.map(function(item) { return item.location });
    categoryArray.unshift("");
    locationArray.unshift("");
    return (
      <div>
        <FilterOptions 
            data={this.state.data} 
            categoryOptions={categoryArray}
            locationOptions={locationArray}
            changeOption={this.filterItems} />
        <div className="filter-form">
          <FilterItems data={filteredItems} />
        </div>
      </div>
    )
  }
});


var FilterOptions = createClass({
  changeOption: function(type, e) {
    var val = e.target.value;
    this.props.changeOption(val, type);
  },
  render: function() {
    return (
      <div className="filter-options">
        <div className="filter-option">
                        
                        <CardPanel className='white' textClassName='black-text' filterable>
                            <Row>
                            <h5>Latest Products</h5>
        <br/>
          <Input s={6} type='select' id="category" label='BROWSE BY CATEGORY' value={this.props.category} onChange={this.changeOption.bind(this, 'category')}>
          {this.props.categoryOptions.map(function(option) {
            return ( <option key={option} value={option}>{option}</option> )
          })}
          </Input>
          <Input s={6} type='select' id="location" label='BROWSE BY LOCATION' value={this.props.location} onChange={this.changeOption.bind(this, 'location')}>
          {this.props.locationOptions.map(function(option) {
            return ( <option key={option} value={option}>{option}</option> )
          })}
          </Input>
          
          </Row>
                            
                        </CardPanel>
        </div>
      </div>

    
      
    );
  }
  
});
var FilterItems = createClass({
  render: function() {
    return (
      
      
      <div className="filter-items">
      {this.props.data.map(function(item){
        return (
          <div className="filter-item">
          
            <Col s={12} m={4}>
                                
                                <Card 
                                header=''
                                className='white' textClassName='black-text' title={item.name}>
                                <span>{item.location}</span>
                                <br/><br/>
                                <span><strong>$300 - $800</strong>
                                <br/><br/>{item.description}</span>
                                <br/><br/>
                                <Button className='light-blue darken-4' waves='light' node='a' href='#single'>View</Button>
                                <br/><br/>
                                <Modal
                                      header=''
                                      trigger={<Button className='red darken-1'>Add to cart</Button>}>
                                      <p>"iPhone 7" has been added to your cart.</p>
                                    </Modal>
                                
                                </Card>
                                
                            </Col>
          </div>
        );
      })}
      </div>
    );
  }
});

    return (
    <div>
      <FilterForm data={filterData} />
    </div>
    );
  } 
}


export default ActiveProducts;
