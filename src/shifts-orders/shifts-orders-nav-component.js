import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import ActiveShiftsComponent from './shifts-orders-active-shifts-component';
import CompletedComponent from './shifts-orders-completed-component';
import './shifts-orders-nav-component.css'
export default function ShiftsOrdersNavComponent(props) {
    return( 
            <Router>
                <div className="shifts-orders-navigation-container">
                    <List className="navbar-nav mr-auto">
                        <Box display="flex" p={1} justifyContent="space-between" className="shifts-orders-nav-links" bgcolor="background.paper">
                            <ListItem><Link to={'/shiftsorders/activeshifts'} className="nav-link"> Active Shifts </Link></ListItem>
                            <ListItem><Link  to={'/shiftsorders/completed'} className="nav-link">Completed Shifts</Link></ListItem>
                        </Box>
                    </List>
                        <Route path='/shiftsorders/activeshifts' component={ActiveShiftsComponent} />
                        <Route path='/shiftsorders/completed' component={CompletedComponent} />                    
                </div>
            </Router>
        )
 }