import React from 'react';
//import { Table } from 'react-bootstrap';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';

class HomePage extends React.Component {
    render() {
    
        return (
            <div className="page">
                <h3 class="center">Redesigning site with React Materialize.</h3>
                <h3 class="center">Don't Worry</h3>
            </div>
        );
    }
} 

export default HomePage;