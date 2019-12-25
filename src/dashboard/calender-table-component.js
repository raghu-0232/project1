import React from 'react';
import Paper from '@material-ui/core/Paper';
import './add-options-component.css';
import CustomeCalenderComponent from './custome-calender-component';
import CustomeTableComponent from './custome-table-component';
import './calender-table-component.css'

export default function CalenderTableComponent() {
    return( 
                
            <Paper className="calender-table-container">
                <CustomeCalenderComponent />
                <CustomeTableComponent />
            </Paper>
               
        )
}