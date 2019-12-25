import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';

import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import ActiveEmployessComponent from './active-employess-component';
import AwaitingApprovalsComponent from './awaiting-approvals-component';
import InactiveEmployessComponent from './inactive-employess-component';
import './employees-nav-component.css'
export default function EmployeesNavComponent(props) {
    return( 
            <Router>
            <div className="employees-navigation-container">
                <List className="navbar-nav mr-auto">
                    <Box display="flex" p={1} justifyContent="space-between" className="employee-nav-links" bgcolor="background.paper">
                        <ListItem><Link to={'/employees/activeemployees'} className="nav-link"> Active Employees </Link></ListItem>
                        <ListItem><Link  to={'/employees/awaitingapprovals'} className="nav-link">Awaiting Approvals</Link></ListItem>
                        <ListItem><Link to={'/employees/inactiveemployess'} className="nav-link">Inactive Employees</Link></ListItem>
                    </Box>
                </List>
                
                    {/* <Route eact path='/'  component={ActiveEmployessComponent} /> */}
                    <Route path='/employees/activeemployees' component={ActiveEmployessComponent} />
                    <Route path='/employees/awaitingapprovals' component={AwaitingApprovalsComponent} />
                    <Route path='/employees/inactiveemployess' component={InactiveEmployessComponent} />
               
                    
            </div>
            </Router>
        )
 }