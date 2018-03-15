import React from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import {NavItem, Navbar, Icon} from 'react-materialize';

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
            <div className="nav" id="main-nav">
              <Navbar className="blue-grey darken-4" brand='Logo' right>
            	<NavItem href='#cart'><Icon>shopping_cart</Icon></NavItem>
            	<NavItem href='#account'><Icon>account_circle</Icon></NavItem>
            	<NavItem href='#dashboard'><Icon>dashboard</Icon></NavItem>
            </Navbar>
            </div>
        );
    }
}

export default NavBar;