import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import './employee-clockin-butttons-component.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


export default class EmployeeClockinButtonsComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            drapDownVal: "active",
            searchVal:"",
            startDate: new Date(),
            endDate:new Date()
        }
    }
    handleClickOpen = ()=> {
        
    }
    handleDropdownChange = ()=> {

    }
    handleSearchVal = ()=> {

    }
    handleDateChange = () => {

    }
    handleExportToExcel = () => {

    }
    handleLogClockin = ()=> {

    }
    render(){
        return( 
            <Paper className="employee-clockin-buttons-container">
                
                    <Box display="flex" justifyContent="space-between"  className="empoyee-clockin-buttons">
                        <div className="flex-item">
                            <span className="field-label"> Company Nmae</span>
                            <FormControl className="select-dropdown-conatainer">
                                <InputLabel id="select-label">Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={this.state.drapDownVal}
                                    onChange={this.handleDropdownChange}
                                >
                                    <MenuItem value={""}>Select Company Name</MenuItem>
                                    <MenuItem value={"active"}>Active</MenuItem>
                                    <MenuItem value={"inactive"}>Inactive</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="flex-item">
                            <span className="field-label"> Event Nmae</span>
                            <FormControl className="select-dropdown-conatainer">
                                <InputLabel id="select-label">Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={this.state.drapDownVal}
                                    onChange={this.handleDropdownChange}
                                >
                                    <MenuItem value={""}>Select Event Name</MenuItem>
                                    <MenuItem value={"active"}>Active</MenuItem>
                                    <MenuItem value={"inactive"}>Inactive</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="flex-item">
                            
                        <InputBase
                            placeholder="Search by order Id"
                            className="search-field"
                            value={this.state.searchVal}
                            onChange={this.handleSearchVal}
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="submit"  aria-label="search" onClick={this.hanldeSearch}>
                            <SearchIcon />
                        </IconButton>
                        </div>
                    </Box>

                    <Box justifyContent="space-between" display="flex" className="empoyee-clockin-buttons">
                        <div className="flex-item">
                            <span className="field-label"> Start Date</span>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    autoOk
                                    id="date-picker-inline"
                                    label="Date picker inline"
                                    value={this.state.startDate}
                                    onChange={this.handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                                </MuiPickersUtilsProvider>
                        </div>
                        <div className="flex-item">
                            <span className="field-label"> End Date</span>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    autoOk
                                    id="date-picker-inline"
                                    label="Date picker inline"
                                    value={this.state.endDate}
                                    onChange={this.handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                                </MuiPickersUtilsProvider>
                        </div>
                        <div className="flex-item">
                            
                            <Button variant="contained" className="export-excel" color="primary" onClick={this.handleExportToExcel}>
                                Export to Excel
                            </Button>
                            <Button variant="contained" className="log-clockin" color="primary" onClick={this.handleLogClockin}>
                               + Log Clockin
                            </Button>
                        </div>
                    </Box>
                
            </Paper>
        )
    }
    
}