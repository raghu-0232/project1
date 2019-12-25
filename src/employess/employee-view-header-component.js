import React from 'react';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Box';

import './employee-view-header-component.css'

export default function EmployeeViewHeaderComponent(props) {
    const getSection= (name, value) => {
        return (<div className = "each-section">
                    <div className="each-section-name">{name}</div>
                    <div className="each-section-value">{value}</div>
                </div>)
    }
    return( 
            <Paper className="employee-view-header-container">
                <Box display="flex">
                    <div className="column-2">
                         <Avatar alt="Image comes here" src="/static/images/avatar/1.jpg" />
                         
                    </div>
                    <div>
                        <div>Indiana Jones</div>
                        <div>Rating</div>
                    </div>
                    <div className="column-3">
                        <div>
                            <Box display="flex" justifyContent="space-between">
                                
                                    {getSection("Email Address", props.employeeData.email)}
                                    {getSection("Phone number", props.employeeData.phone)}
                                    {getSection("Location", props.employeeData.location)}
                                
                            </Box>
                        </div>
                        <div>
                            <Box display="flex" justifyContent="space-between">
                            {getSection("Gender",props.employeeData.gender)}
                            {getSection("SSN", props.employeeData.ssn_number)}
                            {getSection("Date of Joining", props.employeeData.date_of_joining)}
                    
                            </Box>
                        </div>
                    </div>
                    
                   
               </Box>

            </Paper>
        )
}