import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import './active-employees-buttons-component.css';
import AddEmployeeDailog from './add-employee-dailog';

export default class ActiveEmployessButtonsComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            openModel :false
        }
    }
    handleClickOpen = ()=> {
        this.setState({openModel: true})
    }
    handleClose = ()=> {
        this.setState({openModel: false});
    }
    render(){
        return( 
            <Paper >
                <Box display="flex" className="active-employees-buttons-container">
                    <div>
                        <span className="section-title"> Employees </span> <TextField id="standard-search" label="Search field" type="search" />
                    </div>
                    <Box display="flex" className="empoyee-buttons">
                    <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                                + Add New
                            </Button>
                           
                            <AddEmployeeDailog onClose={this.handleClose} open={this.state.openModel}/>

                        <Button variant="contained" color="primary">
                        + Add Temporary Employees
                        </Button>
                        <Button variant="contained" color="primary">
                            + Add Bulk Employees
                        </Button>
                    </Box>
                </Box>
            </Paper>
        )
    }
    
}