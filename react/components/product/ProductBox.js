import React, { Component } from 'react';
import axios from 'axios';
import {Table, Button} from 'react-materialize';
import ProductCreateForm from './ProductForm';
import ProductList from './ProductList';

// Import React Table
import ReactTable from "react-table";
import matchSorter from 'match-sorter';

class ProductBox extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      data: [
          {productName: 'Iphone 7', category: 'Phone', minPrice: '300', maxPrice: '800', displayStatus: 'Display', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '34', maxPrice: '200', displayStatus: 'Display', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '300', maxPrice: '800', displayStatus: 'Display', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '300', maxPrice: '800', displayStatus: 'Display', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '300', maxPrice: '800', displayStatus: 'Display', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '100', maxPrice: '900', displayStatus: 'Hide', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '200', maxPrice: '1000', displayStatus: 'Hide', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '500', maxPrice: '4500', displayStatus: 'Hide', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '400', maxPrice: '800', displayStatus: 'Hide', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '300', maxPrice: '800', displayStatus: 'Hide', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '300', maxPrice: '800', displayStatus: 'Hide', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '300', maxPrice: '800', displayStatus: 'Hide', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '300', maxPrice: '800', displayStatus: 'Display', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '300', maxPrice: '800', displayStatus: 'Display', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '300', maxPrice: '800', displayStatus: 'Display', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '300', maxPrice: '800', displayStatus: 'Display', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '300', maxPrice: '800', displayStatus: 'Display', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '300', maxPrice: '800', displayStatus: 'Hide', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 7', category: 'Phone', minPrice: '300', maxPrice: '800', displayStatus: 'Hide', descriptions: 'this is a really good product man.'},
          {productName: 'Iphone 5', category: 'Phone', minPrice: '200', maxPrice: '500', displayStatus: 'Hide', descriptions: 'Nice phone man.'}
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
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "Product Name",
                  id: "productName",
                  accessor: d => d.productName,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["productName"] }),
                  filterAll: true
                },
                {
                  Header: "Product Category",
                  id: "category",
                  accessor: d => d.category,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["category"] }),
                  filterAll: true
                }
              ]
            },
            {
              Header: "Price",
              columns: [
                {
                  Header: "Min Price",
                  id: "minPrice",
                  accessor: d => d.minPrice,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["minPrice"] }),
                  filterAll: true
                },
                 {
                  Header: "Max Price",
                  id: "maxPrice",
                  accessor: d => d.maxPrice,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["maxPrice"] }),
                  filterAll: true
                },
                {
                  Header: "Display Status",
                  accessor: "displayStatus",
                  id: "displayStatus",
                  //Cell: ({ value }) => (value >= 21 ? value : value),
                  filterMethod: (filter, row) => {
                    if (filter.value === "all") {
                      return true;
                    }else{
                        return row[filter.id] === filter.value;
                    }
                   
                    //return row[filter.id] < 21;
                  },
                  Filter: ({ filter, onChange }) =>
                    <select
                      type='select'
                      onChange={event => onChange(event.target.value)}
                      style={{ width: "100%", display: "inline"}}
                      value={filter ? filter.value : "all"}
                    >
                      <option value="all">Show All</option>
                      <option value="Display">On Display</option>
                      <option value="Hide">Hide</option>
                    </select>
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      {/* <ProductList data={ this.state.data }/>*/}

      </div>
    );
  }
}

export default ProductBox;