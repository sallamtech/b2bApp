import React, { Component } from 'react';
import axios from 'axios';
import {Table, Collection, CollectionItem, Badge, Tabs, Tab, Collapsible, CollapsibleItem, Icon, Input, Modal, Button, Card, CardTitle, Col, Row, CardPanel, Carousel, Slider, Slide, Autocomplete, Chip, Tag} from 'react-materialize';
import InfiniteScroll from 'react-infinite-scroller';
import createClass from 'create-react-class';
    
class ActiveProducts extends Component { 
render() {
    
    var filterData = [
  { name: 'Iphone 7', status: 'Featured', category: 'Phone', location: 'New York' },
  { name: 'Chromebook', status: 'Featured', category: 'Laptop', location: 'California' },
  { name: 'Galexy S9', status: 'Featured', category: 'Phone', location: 'New York' }
];
var FilterForm = createClass({
  getInitialState: function() {
    return {
      data: this.props.data,
      status: 'Featured',
      category: '',
      location: ''
    }
  },
  filterItems: function(val, type) {
     switch (type) {
      case 'status':
        this.setState({status: val});
        break;
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
    ["status", "category", "location"].forEach(function(filterBy) {
      var filterValue = state[filterBy];
      if (filterValue) {
        filteredItems = filteredItems.filter(function(item) {
          return item[filterBy] === filterValue;
        });
      }
    });
    var statusArray = this.props.data.map(function(item) { return item.status });
    var categoryArray = this.props.data.map(function(item) { return item.category });
    var locationArray = this.props.data.map(function(item) { return item.location });
    statusArray.unshift("");
    categoryArray.unshift("");
    locationArray.unshift("");
    return (
      <div>
        <FilterOptions 
            data={this.state.data} 
            statusOptions={statusArray} 
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
        
          <Input label='Browse Products' s={4} type='select' defaultValue='Featured' id="status" value={this.props.status} onChange={this.changeOption.bind(this, 'status')}>
          {this.props.statusOptions.map(function(option) {
            return ( <option key={option} value={option}>{option}</option> )
          })}
          </Input>
          <Input s={4} type='select' id="category" label='Browse Categories' value={this.props.category} onChange={this.changeOption.bind(this, 'category')}>
          {this.props.categoryOptions.map(function(option) {
            return ( <option key={option} value={option}>{option}</option> )
          })}
          </Input>
          <Input s={4} type='select' id="location" label='Browse Locations' value={this.props.location} onChange={this.changeOption.bind(this, 'location')}>
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
                                    <span>New York&nbsp;&nbsp;<strong>$300 - $800</strong><br/><br/>Apple · iPhone · iPhone 7 · iPhone 7 (Original) · iOS · 4.7 in · Fingerprint Scanner · Rear Camera: 12 MP · 4G LTE · 14 hours talk time</span>
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
