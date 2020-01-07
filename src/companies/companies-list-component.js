import { AgGridReact } from 'ag-grid-react';
import React, {Component} from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import {getCompanies} from './actions/company-actions'
class CompaniesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: props.tableHeaders,
      rowData:[]
    }
    
  }

  componentDidMount(){
    getCompanies().then( (response)=> {
      this.setState({ rowData: response.data.response})
  } ).catch((error)=> {
      console.log("error fomr axios", error)
  });
  }

  render() {
   
      
    return (
      <div className="ag-theme-balham" style={ {height: '200px', width: '100%'} }>
        <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            pagination={true}
            >
            
        </AgGridReact>
      </div>
    );
  }
}

export default CompaniesList;