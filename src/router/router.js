import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import DashboardComponent from '../dashboard/dashboard-component';
import ShiftsOrdersComponent from '../shifts-orders/shifts-orders.component'
import EmployeesComponent from '../employess/employees-component';
import CompaniesComponent from '../companies/companies-component';


import Paper from '@material-ui/core/Paper';

export default function MainRoutes() {
    return( 
       
          <Switch>
              <Route exact path='/' component={DashboardComponent} />
              <Route path='/shiftsorders' component={ShiftsOrdersComponent} />
              <Route path='/employees' component={EmployeesComponent} />
              <Route path='/companies' component={CompaniesComponent} />
          </Switch>
       )
}