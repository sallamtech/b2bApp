import React, { Component } from 'react';
import axios from 'axios';
import {Table, Button} from 'react-materialize';
import OrderTable from "./OrderTable";

// Import React Table
import ReactTable from "react-table";
import matchSorter from 'match-sorter';

class Orders extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '05/07/2019', orderStatus: 'Shipped'},
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '06/07/2019', orderStatus: 'New'},
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '07/07/2019', orderStatus: 'Confirmed'},
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '08/07/2019', orderStatus: 'Confirmed'},
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '08/07/2019', orderStatus: 'Confirmed'},
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '09/07/2019', orderStatus: 'New'},
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '10/07/2019', orderStatus: 'Shipped'},
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '09/07/2019', orderStatus: 'New'},
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '03/07/2019', orderStatus: 'New'},
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '05/07/2019', orderStatus: 'Shipped'},
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '06/07/2019', orderStatus: 'Shipped'},
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '03/07/2019', orderStatus: 'Shipped'},
        ],
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
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
                  Header: "Order ID",
                  accessor: "orderId",
                  filterMethod: (filter, row) =>
                    row[filter.id].startsWith(filter.value) &&
                    row[filter.id].endsWith(filter.value)
                },
                {
                  Header: "Customer Name",
                  id: "customerName",
                  accessor: d => d.customerName,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["customerName"] }),
                  filterAll: true
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Order Date",
                  id: "orderDate",
                  accessor: d => d.orderDate,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["orderDate"] }),
                  filterAll: true
                },
                {
                  Header: "Order Status",
                  accessor: "orderStatus",
                  id: "orderStatus",
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
                      <option value="New">New Orders</option>
                      <option value="Shipped">Shipper Orders</option>
                      <option value="Confirmed">Confirmed Orders</option>
                    </select>
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}



class OrderBox extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
       data: [
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '05/07/2019', orderStatus: 'Shipped'},
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '06/07/2019', orderStatus: 'New'},
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '07/07/2019', orderStatus: 'Confirmed'},
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '08/07/2019', orderStatus: 'Confirmed'},
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '08/07/2019', orderStatus: 'Confirmed'},
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '09/07/2019', orderStatus: 'New'},
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '10/07/2019', orderStatus: 'Shipped'},
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '09/07/2019', orderStatus: 'New'},
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '03/07/2019', orderStatus: 'New'},
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '05/07/2019', orderStatus: 'Shipped'},
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '06/07/2019', orderStatus: 'Shipped'},
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '03/07/2019', orderStatus: 'Shipped'},
        ],
      authUser: null
     };
    this.pollInterval = null;
  }


  render() {
    var divStyle = {
        margin: '0 25px 0 0',
          // width: '400px'
        };
        
    
    return (
      <div className="container right" style={divStyle}>
      <h4 class=''>Orders Page</h4>
       
       <OrderTable data={this.state.data}/>
       
        {/* <ProductList data={ this.state.data }/>*/}

      </div>
    );
  }
}

export default OrderBox;