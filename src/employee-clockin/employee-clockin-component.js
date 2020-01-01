import React from 'react';
import {Paper} from '@material-ui/core';
import './employee-clockin-component.css'
import EmployeeClockinButtonsComponent from './employee-clockin-butttons-component';
import {ClockInTableHeaders} from './table-headers/table-headers';
import {data} from './table-headers/table-headers';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { AgGridReact } from 'ag-grid-react';

export default function EmployeeClockInComponent(){
    return( 
    <div className="employee-clockin-container">
        <div className="title"> 
            <span> Clockin List </span> 
            <EmployeeClockinButtonsComponent />
        </div>
        <div className="ag-theme-balham" style={ {height: '200px', width: '100%'} }>
        <AgGridReact
            columnDefs={ClockInTableHeaders}
            rowData={data.response}
            pagination={true}
            >
            
        </AgGridReact>
      </div>
        
    </div>
    )
 }