import { AgGridReact } from 'ag-grid-react';
import React, {Component} from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class CustomeTableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        { headerName: "Assigned", field: "assigned", minWidth:300 },
        { headerName: "Total", field: "total", minWidth:300  },
        { headerName: "Unassigned Employees", field: "unassignedEmployees", minWidth:300 }],
      rowData: [
        { assigned: 11, total: 21, unassignedEmployees: 33 },
        { assigned: 9, total: 27, unassignedEmployees: 33 },
        { assigned: 13, total: 22, unassignedEmployees: 33 },
        { assigned: 16, total: 28, unassignedEmployees: 33 },
        ]
    }
  }

  render() {
    return (
      <div className="ag-theme-balham" style={ {height: '200px', width: '90%'} }>
        <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}>
        </AgGridReact>
      </div>
    );
  }
}

export default CustomeTableComponent;