import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import DashboardComponent from '../dashboard/dashboard-component';
import ShiftsOrdersComponent from '../shifts-orders/shifts-orders.component';
import EmployeesComponent from '../employess/employees-component';
import CompaniesComponent from '../employess/employees-component';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import './navigation-component.css';
 

export default function Navigation() {
    return( 
                <Paper className="navigation-container">
                <List className="navbar-nav mr-auto">
                    <ListItem><Link to={'/'} className="nav-link"> Dashboard </Link> <span> > </span></ListItem>
                    <ListItem><Link to={'/shiftsorders'} className="nav-link">Shifts/Orders</Link> <span> > </span></ListItem>
                    <ListItem><Link to={'/employees'} className="nav-link">Employees</Link> <span> > </span> </ListItem>
                    <ListItem><Link to={'/companies'} className="nav-link">Compinies</Link> <span> > </span></ListItem>
                    <ListItem><Link to={'/clockin'} className="nav-link">Emp Clockin</Link> <span> > </span></ListItem>
                    <ListItem><Link to={'/employees'} className="nav-link">Reports</Link><span> > </span> </ListItem>
                </List>
                </Paper>
        )
 }