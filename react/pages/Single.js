import React from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import {SideNavItem, SideNav, Navbar, Icon, Button, Dropdown, NavItem, Collection, CollectionItem, Badge, Card, CardTitle, Col, Row, CardPanel, Carousel} from 'react-materialize';
import ProductBox from '../components/product/ProductBox';

class Single extends React.Component {

    render() {
    
        return (
            <div className="Single">
                
                <Row>
                    <Col s={12} m={5}>
                        <h4>Item Details</h4>
                    </Col>
                </Row>
                
                <Row>
                    
                    <Col s={12} m={5}>
                    
                        <Card className='white' textClassName='black-text' title='Iphone 7'>
                            <span>Min Price: <strong>$300</strong></span><br/>
                            <span>Max Price: <strong>$800</strong></span><br/>
                            <span>New York<strong> 22 minutes ago</strong></span><br/>
                        </Card>
                    
                    </Col>
                    
                    <Col s={12} m={7}>
                    
                        <Carousel options={{ indicators: true }} images={[
                            'http://materializecss.com/images/yuna.jpg',
                            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBT0QipkXJK-XJfeV-WqoYKjOSCM8Z1-4stPzfQ3beCCLFwOMn'
                        ]} />
                        
                        <CardPanel className='white' textClassName='black-text'>
                            <h5>3 items by <strong>Example Store</strong></h5>
                        </CardPanel>
                        
                        <Card className='white' textClassName='black-text' title='Iphone 7' actions={[<a href='#'>View</a>]}>
                            <span>Min Price: <strong>$300</strong></span><br/>
                            <span>Max Price: <strong>$800</strong></span><br/>
                        </Card>
                        
                        <Card className='white' textClassName='black-text' title='Iphone 7' actions={[<a href='#'>View</a>]}>
                            <span>Min Price: <strong>$300</strong></span><br/>
                            <span>Max Price: <strong>$800</strong></span><br/>
                        </Card>
                        
                        <Card className='white' textClassName='black-text' title='Iphone 7' actions={[<a href='#'>View</a>]}>
                            <span>Min Price: <strong>$300</strong></span><br/>
                            <span>Max Price: <strong>$800</strong></span><br/>
                        </Card>
                        
                    </Col>

                </Row>

            </div>
        );
    }
} 

export default Single;