import React, { Component } from 'react';
import axios from 'axios';
import {Table, Button} from 'react-materialize';
import ProductCreateForm from './ProductForm';
import ProductList from './ProductList';

// Import React Table
import ReactTable from "react-table";

class ProductBox extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      data: [
          {productName: 'Iphone 7', category: 'Phone', minPrice: '300', maxPrice: '800', displayStatus: 'On Display', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '300', maxPrice: '800', displayStatus: 'On Display', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '300', maxPrice: '800', displayStatus: 'On Display', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '300', maxPrice: '800', displayStatus: 'On Display', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '300', maxPrice: '800', displayStatus: 'On Display', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '300', maxPrice: '800', displayStatus: 'On Display', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '300', maxPrice: '800', displayStatus: 'On Display', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '300', maxPrice: '800', displayStatus: 'On Display', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '300', maxPrice: '800', displayStatus: 'On Display', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '300', maxPrice: '800', displayStatus: 'On Display', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '300', maxPrice: '800', displayStatus: 'On Display', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '300', maxPrice: '800', displayStatus: 'On Display', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '300', maxPrice: '800', displayStatus: 'On Display', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '300', maxPrice: '800', displayStatus: 'On Display', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '300', maxPrice: '800', displayStatus: 'On Display', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '300', maxPrice: '800', displayStatus: 'On Display', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '300', maxPrice: '800', displayStatus: 'On Display', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '300', maxPrice: '800', displayStatus: 'On Display', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '300', maxPrice: '800', displayStatus: 'On Display', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 5', category: 'Phone', minPrice: '200', maxPrice: '500', displayStatus: 'On Display', descriptions: 'Nice phone man.'}
        ],
      authUser: null
     };
    this.loadProductsFromServer = this.loadProductsFromServer.bind(this);
    this.handleProductSubmit = this.handleProductSubmit.bind(this);
    this.handleProductUpdate = this.handleProductUpdate.bind(this);
    this.handleProductDelete = this.handleProductDelete.bind(this);
    this.pollInterval = null;
  }

  //query to load prodcts
  loadProductsFromServer() {
    axios.get('url')
      .then(res => {
        this.setState({ data: res.data });
      })
  }

  handleProductSubmit(product) {
    let products = this.state.data;
    
    let newJobs = products.concat([product]);
    this.setState({ data: newJobs });
    axios.post('url', product)
      .catch(err => {
        console.error(err);
        this.setState({ data: products });
      });
  }

  handleProductUpdate(id, product) {
    //sends the product id and ohter info to our api
    axios.put(`${this.props.url}/${id}`, product)
      .catch(err => {
        console.log(err);
      })
  }

  handleProductDelete(id) {
    axios.delete(`${this.props.url}/${id}`)
      .then(res => {
        console.log('Product deleted');
      })
      .catch(err => {
        console.error(err);
      });
  }
  

  //when incorporating into another project
  //(with react-router for instance),
  //this will prevent error messages every 2 seconds
  //once the JobBox is unmounted
  componentWillUnmount() {
  this.pollInterval && clearInterval(this.pollInterval);
  this.pollInterval = null;
}

  render() {
    var divStyle = {
        margin: '0 25px 0 0',
          // width: '400px'
        };
        
        const { data } = this.state;
    
    return (
      <div className="center container right" style={divStyle}>
      <span className='left'>
       <ProductCreateForm onProductSubmit={ this.handleProductSubmit }/>
       </span>
       <br/>
       <br/>
       <ReactTable
          data={data}
          columns={[
           
            {
              Header: "Name",
              columns: [
                {
                  Header: "Product Name",
                  accessor: "productName"
                },
                {
                  Header: "Category",
                  accessor: "category"
                }
              ]
            },
            {
              Header: 'Price',
              columns: [
                {
                  Header: "Min Price",
                  accessor: "minPrice"
                },
                {
                  Header: "Max Price",
                  accessor: "maxPrice"
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight">
     
  </ReactTable>
       
      {/* <ProductList data={ this.state.data }/>*/}

      </div>
    );
  }
}

export default ProductBox;