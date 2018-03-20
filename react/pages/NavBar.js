import React from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import {Badge, NavItem, Navbar, Icon, Input, Button, Col, Row, CardPanel} from 'react-materialize';
import SearchForm from '../components/home/SearchForm';

class NavBar extends React.Component {
    
    constructor(props){
        super(props);

        this.state ={
          appName : 'WebSiteName',
          authenticated: true
        };
    }

    render() {
    
        return (
            <div>
            <div className="nav" id="main-nav">
            
             <nav class="nav-extended blue-grey darken-4">
                <div class="nav-wrapper">
                 <a href="#!" class="brand-logo">Sallam Tec Group</a>
                  
                  <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
                  <ul class="right hide-on-med-and-down">
                    <NavItem href='#'><Icon>home</Icon></NavItem>
                	<NavItem href='#dashboard'><Icon>dashboard</Icon></NavItem>
                	<NavItem href='#post'><Icon>create</Icon></NavItem>
                	<NavItem href='#cart'><Icon>shopping_cart</Icon></NavItem>
                	<NavItem href='#account'><Icon>account_circle</Icon></NavItem>
                	<NavItem href='#sign-in'><Icon>power_settings_new</Icon></NavItem>
                  </ul>
                  
                  <ul class="side-nav" id="mobile-demo">
                    <NavItem href='#'><Icon>home</Icon></NavItem>
                	<NavItem href='#dashboard'><Icon>dashboard</Icon></NavItem>
                	<NavItem href='#post'><Icon>create</Icon></NavItem>
                	<NavItem href='#cart'><Icon>shopping_cart</Icon></NavItem>
                	<NavItem href='#account'><Icon>account_circle</Icon></NavItem>
                	<NavItem href='#sign-in'><Icon>power_settings_new</Icon></NavItem>
                  </ul>
                </div>
                
            </nav>
            
            </div>
          
            
            <SearchForm/>
            </div>
        );
    }
}

export default NavBar;