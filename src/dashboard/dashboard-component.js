import React from 'react';
import Stats from './stats-component'
import {Paper} from '@material-ui/core';
import './dashboard-component.css'
import AddOptionsComponents from './add-options-component';
import CalenderTableComponent from './calender-table-component'
export default function DashboardComponent(){
    return( 
    <div className="dashboard-container">
        <div className="title"> 
            <span> Dashboard  hello</span> 
            <span> An overview of your activity</span>
        </div>
        <Stats />
        <AddOptionsComponents />
        <CalenderTableComponent />
    </div>
    )
 }