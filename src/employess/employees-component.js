import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import EmployeesNavComponent from './employees-nav-component'
import   './employees-component.css'

export default function EmployessComponent() {
    return( 
        <div className="employees-container">
        <div className="title"> 
            <span> Employees </span> 
            <span> Dashboard > Employees</span>
        </div>
        
        <EmployeesNavComponent />
    </div>
        )
}