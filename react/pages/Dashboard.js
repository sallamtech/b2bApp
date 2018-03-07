import React from 'react';
//import { Table } from 'react-bootstrap';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import {SideNavItem, SideNav, Navbar, Icon, Button, Dropdown, NavItem, Collection, CollectionItem, Badge} from 'react-materialize';
import DashNav from './DashboardNav';


class Dashboard extends React.Component {
    
      constructor(props) {
        super(props);
        
      }
      
    
    render() {
    
        return (
            
            <div className="Dashboard">
            
            <DashNav/>
            
            </div>
        );
    }
} 

export default Dashboard;