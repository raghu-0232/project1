import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import DashboardComponent from '../dashboard/dashboard-component';
import ShiftsOrdersComponent from '../shifts-orders/shifts-orders.component';
import EmployeesComponent from '../employess/employees-component';
import CompaniesComponent from '../employess/employees-component';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import './navigation-component.css';

const StyledNav = styled.div`
        height:95vh;
        width:20%;
        display:inline-block;
        background-color: #fff;
        border-radius:9px;
        box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
        .MuiPaper-elevation1{
            box-shadow:none;
        }
        .MuiPaper-root{
            background-color:transparent;
        }
        .MuiListItem-gutters{
            display:block;
            padding:0px;
            a{
                display:block;
                padding: 15px 15px 15px 15px;
                text-decoration: none;
                color:#4B5660;
                font-size:14px;
                font-weight:600;
                border-left:#fff solid 5px;
                position: relative;
                &:before{
                    content: '';
                    position: absolute;
                    border-style: solid;
                    border-width: 4px 0 4px 5px;
                    border-color: transparent transparent transparent #333333;
                    right: 20px;
                    top: 40%;
                }
                &:hover{
                    background: #F5F7FA;
                    border-left:#ED3B41 solid 5px;
                }
                &.active{
                    background: #F5F7FA;
                    border-left:#ED3B41 solid 5px;
                }
            }
        }
`;
 

export default function Navigation() {
    return( 
        <StyledNav>
            <Paper square={true}>
                <List className="navbar-nav mr-auto">
                    <ListItem><Link to={'/'} className="nav-link"> Dashboard </Link> </ListItem>
                    <ListItem><Link to={'/shiftsorders'} className="nav-link">Shifts/Orders</Link> </ListItem>
                    <ListItem><Link to={'/employees'} className="nav-link">Employees</Link>  </ListItem>
                    <ListItem><Link to={'/companies'} className="nav-link">Compinies</Link> </ListItem>
                    <ListItem><Link to={'/employeeclockin'} className="nav-link">Emp Clockin</Link> </ListItem>
                    <ListItem><Link to={'/employees'} className="nav-link">Reports</Link> </ListItem>
                </List>
            </Paper>
        </StyledNav>
        )
 }