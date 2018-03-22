import React from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import {Collection, CollectionItem, Badge, Tabs, Tab, Collapsible, CollapsibleItem, Icon, Input, Modal, Button, Card, CardTitle, Col, Row, CardPanel, Carousel, Slider, Slide, Autocomplete, Chip, Tag} from 'react-materialize';
import HomeProducts from "../components/home/HomeProducts";
import ActiveProducts from "../components/home/ActiveProducts";
import Header from "../components/home/Header";
import SearchForm from '../components/home/SearchForm';
import HomeTabs from '../components/home/HomeTabs';
import Home from '../components/home/Home';


class HomePage extends React.Component {

  

    render() {
    
        return (
            <div className="page">
                <Row>
                    
                  <SearchForm/>
                  
                  <Header/>
                  
                  <HomeTabs/>
                  
                  <Home/>
                    
                    <Col s={12} m={12}>
                        
                        <ActiveProducts/>
                        
                    </Col>
                    
                    
                    
                </Row>
                
                
                
            </div>
        );
    }
} 

export default HomePage;