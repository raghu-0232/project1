import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import EmployeesNavComponent from './employees-nav-component'
import styled from 'styled-components';
import   './employees-component.css'

const EmpContainer = styled.div`
    width:100%;
    display:inline-block;
    margin-left: 20px;
`;

export default function EmployessComponent() {
    return( 
        <EmpContainer>
        <div className="title"> 
            <span> Employees </span> 
            <span> Dashboard > Employees</span>
        </div>
        
        <EmployeesNavComponent />
    </EmpContainer>
        )
}