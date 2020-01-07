import React from 'react';
import styled from 'styled-components';
import DashboardComponent from './dashboard-component';
import ShiftsOrdersComponent from '../shifts-orders/shifts-orders.component'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import './add-options-component.css';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const DashboardTabs = styled.div`
    margin: 20px -8px;
    .MuiPaper-root{
        padding: 20px;
    }
`;

export default function AddOptionsComponents() {
    return( 
        <DashboardTabs>
            <Grid container spacing={2}>
                <Grid item md={4} lg={4} xs={4} sm={4}>
                    <Paper>
                        Add Shift Order
                </Paper>
                </Grid>
                <Grid item md={4} lg={4} xs={4} sm={4}>
                    <Paper>
                        Add Employees
                </Paper>
                </Grid>
                <Grid item md={4} lg={4} xs={4} sm={4}>
                    <Paper>
                        Add Company
                </Paper>
                </Grid>
            </Grid>
        </DashboardTabs>
                // <List className="add-options-container">
                //     <Paper>
                //     <ListItem> 
                //         {/* <ListItemIcon>
                           
                //         </ListItemIcon> */}
                //         <ListItemText primary="Add Shift Order" /> 
                //     </ListItem>
                //     </Paper>
                //     <Paper>
                //     <ListItem> 
                //         {/* <ListItemIcon>
                          
                //         </ListItemIcon> */}
                //         <ListItemText primary=" Add Employees" /> 
                //     </ListItem>
                //     </Paper>
                //     <Paper>
                //     <ListItem> 
                //         {/* <ListItemIcon>
                           
                //         </ListItemIcon> */}
                //         <ListItemText primary="Add Company" /> 
                //     </ListItem>
                //     </Paper>
                    
                // </List>
               
        )
 }