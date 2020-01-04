import React from 'react';
import DashboardComponent from './dashboard-component';
import ShiftsOrdersComponent from '../shifts-orders/shifts-orders.component'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import './add-options-component.css';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export default function AddOptionsComponents() {
    return( 
                
                <List className="add-options-container">
                    <Paper>
                    <ListItem> 
                        {/* <ListItemIcon>
                           
                        </ListItemIcon> */}
                        <ListItemText primary="Add Shift Order" /> 
                    </ListItem>
                    </Paper>
                    <Paper>
                    <ListItem> 
                        {/* <ListItemIcon>
                          
                        </ListItemIcon> */}
                        <ListItemText primary=" Add Employees" /> 
                    </ListItem>
                    </Paper>
                    <Paper>
                    <ListItem> 
                        {/* <ListItemIcon>
                           
                        </ListItemIcon> */}
                        <ListItemText primary="Add Company" /> 
                    </ListItem>
                    </Paper>
                    
                </List>
               
        )
 }