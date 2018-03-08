import React from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import {Table, Input, Collapsible, CollapsibleItem, Tabs, Tab, SideNavItem, SideNav, Navbar, Icon, Button, Dropdown, NavItem, Collection, CollectionItem, Badge, Card, CardTitle, Col, Row, CardPanel, Carousel, Slider, Slide, Modal, Chip, Tag} from 'react-materialize';
import ProductBox from '../components/product/ProductBox';

class Account extends React.Component {

    render() {
    
        return (
            <div className="Account">
                
                <Row>
                
                    <Col s={12} m={12}>
                        
                        <CardPanel className='white' textClassName='black-text'>
                            <h5><strong>Account</strong></h5>
                        </CardPanel>
                        
                        <Tabs className='z-depth-1'>
                            <Tab title="Your Listings">
                                
                                <Collapsible popout defaultActiveKey={0}>
                                  <CollapsibleItem header='Iphone 7'>
                                    <span>December 19, 2017<br/><a href="#"><strong>ACTIVE</strong></a>&nbsp;-&nbsp;<a href="#">Edit</a>&nbsp;-&nbsp;<a href="#">Delete</a></span>
                                  </CollapsibleItem>
                                  <CollapsibleItem header='Iphone 7'>
                                    <span>December 19, 2017<br/><a href="#"><strong>ACTIVE</strong></a>&nbsp;-&nbsp;<a href="#">Edit</a>&nbsp;-&nbsp;<a href="#">Delete</a></span>
                                  </CollapsibleItem>
                                  <CollapsibleItem header='Iphone 7'>
                                    <span>December 19, 2017<br/><a href="#"><strong>ACTIVE</strong></a>&nbsp;-&nbsp;<a href="#">Edit</a>&nbsp;-&nbsp;<a href="#">Delete</a></span>
                                  </CollapsibleItem>
                                </Collapsible>
                            
                            </Tab>
                            <Tab title="Seller Profile" active>
                            <br/>
                                <form s={6} xs={6} onSubmit={this.handleSubmit}>  
                                <Row>
                                    <Input s={4} label="Your full name" />
                                    <Input type="email" label="Email" s={4} />
                                    <Input s={4} label="Phone" validate type='tel'></Input>
                                      
                                      <Input s={4} label="Street" />
                                      <Input s={4} label="City" />
                                      <Input s={4} type='select' label="State" defaultValue='AL'>
                                        <option value="AL">Alabama</option>
                                      	<option value="AK">Alaska</option>
                                      	<option value="AZ">Arizona</option>
                                      	<option value="AR">Arkansas</option>
                                      	<option value="CA">California</option>
                                      	<option value="CO">Colorado</option>
                                      	<option value="CT">Connecticut</option>
                                      	<option value="DE">Delaware</option>
                                      	<option value="DC">District Of Columbia</option>
                                      	<option value="FL">Florida</option>
                                      	<option value="GA">Georgia</option>
                                      	<option value="HI">Hawaii</option>
                                      	<option value="ID">Idaho</option>
                                      	<option value="IL">Illinois</option>
                                      	<option value="IN">Indiana</option>
                                      	<option value="IA">Iowa</option>
                                      	<option value="KS">Kansas</option>
                                      	<option value="KY">Kentucky</option>
                                      	<option value="LA">Louisiana</option>
                                      	<option value="ME">Maine</option>
                                      	<option value="MD">Maryland</option>
                                      	<option value="MA">Massachusetts</option>
                                      	<option value="MI">Michigan</option>
                                      	<option value="MN">Minnesota</option>
                                      	<option value="MS">Mississippi</option>
                                      	<option value="MO">Missouri</option>
                                      	<option value="MT">Montana</option>
                                      	<option value="NE">Nebraska</option>
                                      	<option value="NV">Nevada</option>
                                      	<option value="NH">New Hampshire</option>
                                      	<option value="NJ">New Jersey</option>
                                      	<option value="NM">New Mexico</option>
                                      	<option value="NY">New York</option>
                                      	<option value="NC">North Carolina</option>
                                      	<option value="ND">North Dakota</option>
                                      	<option value="OH">Ohio</option>
                                      	<option value="OK">Oklahoma</option>
                                      	<option value="OR">Oregon</option>
                                      	<option value="PA">Pennsylvania</option>
                                      	<option value="RI">Rhode Island</option>
                                      	<option value="SC">South Carolina</option>
                                      	<option value="SD">South Dakota</option>
                                      	<option value="TN">Tennessee</option>
                                      	<option value="TX">Texas</option>
                                      	<option value="UT">Utah</option>
                                      	<option value="VT">Vermont</option>
                                      	<option value="VA">Virginia</option>
                                      	<option value="WA">Washington</option>
                                      	<option value="WV">West Virginia</option>
                                      	<option value="WI">Wisconsin</option>
                                      	<option value="WY">Wyoming</option>
                                      </Input>
                                      
                                    <Input type="password" label="Old Password" s={4} />
                                    <Input type="password" label="New Password" s={4} />
                                    <Input type="password" label="Retype New Password" s={4} />
                                </Row>
                                <Button class="blue" waves='light' type="submit">Update Changes</Button>
                                </form>
                            </Tab>
                            <Tab title="Favorite Ads">
                                <CardPanel className='white' textClassName='black-text'>
                                    <span>No results found for your query.</span>
                                </CardPanel>
                            </Tab>
                            <Tab title="Sale Order">
                                <Collection>
                                  <CollectionItem href='#order-detail'>Order No. #4<br/><strong>PROCESSING</strong></CollectionItem>
                                  <CollectionItem href='#order-detail'>Order No. #3<br/><strong>PROCESSING</strong></CollectionItem>
                                  <CollectionItem href='#order-detail'>Order No. #2<br/><strong>ON HOLD</strong></CollectionItem>
                                  <CollectionItem href='#order-detail'>Order No. #1<br/><strong>ON HOLD</strong></CollectionItem>
                                </Collection>
                            </Tab>
                            <Tab title="Purchase Order">
                                <Collection>
                                  <CollectionItem href='#order-detail'>Order No. 5<br/><strong>ON HOLD</strong></CollectionItem>
                                  <CollectionItem href='#order-detail'>Order No. 3<br/><strong>PROCESSING</strong></CollectionItem>
                                  <CollectionItem href='#order-detail'>Order No. 2<br/><strong>ON HOLD</strong></CollectionItem>
                                  <CollectionItem href='#order-detail'>Order No. 1<br/><strong>ON HOLD</strong></CollectionItem>
                                </Collection>
                            </Tab>
                            <Tab title="Transactions">
                                <form s={6} xs={6} onSubmit={this.handleSubmit}>  
                                <Row>
                                    
                                    <Input label='Start date:' name='on' type='date' onChange={function(e, value) {}} />
                                    <Input label='End date:' name='on' type='date' onChange={function(e, value) {}} />
                                    <br/><Button class="blue" waves='light' type="submit">View</Button>
                                    
                                    <Table>
                                      <thead>
                                        <tr>
                                          <th data-field="date">Date</th>
                                          <th data-field="sale">Sale</th>
                                          <th data-field="earning">Earning</th>
                                        </tr>
                                      </thead>
                                    
                                      <tbody>
                                        <tr>
                                          <td>2018-03-07</td>
                                          <td>1</td>
                                          <td>Processing : $40.00</td>
                                        </tr>
                                        <tr>
                                          <td>2017-12-20</td>
                                          <td>2</td>
                                          <td>Processing : $40.00</td>
                                        </tr>
                                        <tr>
                                          <td>2017-10-05</td>
                                          <td>2</td>
                                          <td>On hold : $4.00</td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                
                                </Row>
                                
                                </form>
                            </Tab>
                        </Tabs>
                        
                    </Col>
                    
                </Row>

            </div>
        );
    }
} 

export default Account;