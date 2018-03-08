import React from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import {Autocomplete, Input, SideNavItem, SideNav, Navbar, Icon, Button, Dropdown, NavItem, Collection, CollectionItem, Badge, Card, CardTitle, Col, Row, CardPanel, Carousel, Slider, Slide, Modal, Chip, Tag} from 'react-materialize';
import ProductBox from '../components/product/ProductBox';

class Businesses extends React.Component {

    render() {
    
        return (
            <div className="Businesses">
                
                <Row>
                
                    <Col s={12} m={12}>

                        <CardPanel className='white' textClassName='black-text'>
                            <h5>5 Businesses</h5>
                        </CardPanel>
                    
                    </Col>
                    
             
                    <Col s={12} m={12}>
                        
                        <Autocomplete
                            title='Enter a business name...'
                            data={
                              {
                                'Example Store': 'http://materializecss.com/images/yuna.jpg'
                              }
                            }
                          />
                          

                    </Col>
                    
                </Row>
                
                <Row>

                    <Col s={12} m={3}>
                        
                        <Card className='white' textClassName='black-text' title=''>
                            <Chip>
                              <a href='#profile'><img src='http://materializecss.com/images/yuna.jpg' alt='Contact Person' />
                              Example Store</a>
                            </Chip>
                            <br/>
                            <span><strong>New York</strong></span><br/>
                                <span>Joined on October 4, 2017</span><br/>
                        </Card>
                        
                    </Col>
                    
                    <Col s={12} m={3}>
                        
                        <Card className='white' textClassName='black-text' title=''>
                            <Chip>
                              <a href='#profile'><img src='http://materializecss.com/images/yuna.jpg' alt='Contact Person' />
                              Example Store</a>
                            </Chip>
                            <br/>
                            <span><strong>New York</strong></span><br/>
                                <span>Joined on October 4, 2017</span><br/>
                        </Card>
                        
                    </Col>
                    
                    <Col s={12} m={3}>
                        
                        <Card className='white' textClassName='black-text' title=''>
                            <Chip>
                              <a href='#profile'><img src='http://materializecss.com/images/yuna.jpg' alt='Contact Person' />
                              Example Store</a>
                            </Chip>
                            <br/>
                            <span><strong>New York</strong></span><br/>
                                <span>Joined on October 4, 2017</span><br/>
                        </Card>
                        
                    </Col>
                    
                    <Col s={12} m={3}>
                        
                        <Card className='white' textClassName='black-text' title=''>
                            <Chip>
                              <a href='#profile'><img src='http://materializecss.com/images/yuna.jpg' alt='Contact Person' />
                              Example Store</a>
                            </Chip>
                            <br/>
                            <span><strong>New York</strong></span><br/>
                                <span>Joined on October 4, 2017</span><br/>
                        </Card>
                        
                    </Col>
                    
                    <Col s={12} m={3}>
                        
                        <Card className='white' textClassName='black-text' title=''>
                            <Chip>
                              <a href='#profile'><img src='http://materializecss.com/images/yuna.jpg' alt='Contact Person' />
                              Example Store</a>
                            </Chip>
                            <br/>
                            <span><strong>New York</strong></span><br/>
                                <span>Joined on October 4, 2017</span><br/>
                        </Card>
                        
                    </Col>
            
                    
                </Row>

            </div>
        );
    }
} 

export default Businesses;