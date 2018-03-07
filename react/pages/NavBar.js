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
              <Navbar className="blue-grey darken-4" brand='logo' right>
            	<NavItem href='/' right><Icon>search</Icon></NavItem>
            	<NavItem href='#dashboard'><Icon>view_module</Icon></NavItem>
            	<NavItem href='/'><Icon>refresh</Icon></NavItem>
            	<NavItem href='#profile'><Icon>more_vert</Icon></NavItem>
            </Navbar>
            </div>
        );
    }
}

export default NavBar;