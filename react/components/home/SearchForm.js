import React from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import {Icon, Input, Button, Col, Row} from 'react-materialize';

class SearchForm extends React.Component {
    
    constructor(props){
        super(props);

        this.state ={
          appName : 'WebSiteName',
          authenticated: true
        };
    }

    render() {
    
        return (
            <div className='container'>
            <Col s={12} m={12}>
                        
                <Row>
                  <form>
                  <Input s={1} type='select' defaultValue='all-categories'>
                    <option value='all-categories'>All</option>
                    <option value='1'>Computer</option>
                    <option value='2'>Phone</option>
                    <option value='3'>Book</option>
                    <option value='4'>Fasion</option>
                  </Input>
                  
                  <Input s={10} placeholder='Search ...' validate></Input>
                  <br/>
                  <Button className='light-blue darken-4 col s1' s={1} waves='light'><Icon>search</Icon></Button>
                  </form>
                </Row>
    
                </Col>
            </div>
        );
    }
}

export default SearchForm;