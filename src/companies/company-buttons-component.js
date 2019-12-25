import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import './company-buttons-component.css';

export default function CompanyButtonsComponent() {
    return( 
        <Paper >
            <Box display="flex" className="company-buttons-container">
                <div>
                    <span className="section-title"> Companies </span> <TextField id="standard-search" label="Search field" type="search" />
                </div>
                <Box display="flex" className="company-buttons">
                    <Button variant="contained" color="primary">
                        + Add Company
                    </Button>
                   
                    <Button variant="contained" color="primary">
                        + Add Bulk Companies
                    </Button>
                </Box>
            </Box>
        </Paper>
    )
}