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
                        
            <div class="row hide-on-small-only">
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s2">
                     <select class="browser-default">
                        <option value="" disabled selected>All</option>
                        <option value='1'>Computer</option>
                        <option value='2'>Phone</option>
                        <option value='3'>Book</option>
                        <option value='4'>Fasion</option>
                      </select>
                    </div>
                    <div class="input-field col s9">
                      <input id="last_name" type="text" class="validate" placeholder='Search ...' />
                    </div>
                    
                     <br/>
                  <Button className='light-blue darken-4 col s1' s={1} waves='light'><Icon>search</Icon></Button>
                    
                  </div>
                </form>
              </div>
    
                </Col>
            </div>
        );
    }
}

export default SearchForm;