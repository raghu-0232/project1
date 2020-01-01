import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import './completed-shifts-buttons-component.css';
import ListItemText from '@material-ui/core/ListItemText';

import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Link from '@material-ui/core/Link';

import 'date-fns';

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default class CompletedShiftsButtonsComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            searchVal:"",
            todayOrTomorrow: "today",
            drapDownVal: "allreports",
            openModel :false,
            date: new Date('2014-08-18T21:11:54')
        }
        
    }
    handleDateChange = date => {
        this.setState({date: date});
    };
    handleClickOpen = ()=> {
        this.setState({openModel: true})
    }
    handleClose = ()=> {
        this.setState({openModel: false});
    }
    handleDropdownChange = val => {
        this.setState({drapDownVal: val})
    }
    handleTodayOrTomorrow = (val) => {
        this.setState( {todayOrTomorrow: val});
    }
    hanldeSearch = ()=> {
        console.log("serach val")
    }
    handleSearchVal = (e) => {
        this.setState({searchVal: e.target.value});
    }
    render(){
        return( 
            <Paper >
                <Box display="flex" className="completed-shifts-buttons-container" justifyContent="space-between">
                    <div className="calender-controls">
                    <FormControl className="select-dropdown-conatainer">
                            <InputLabel id="select-label">Type</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={this.state.drapDownVal}
                            onChange={this.handleDropdownChange}
                            >
                            <MenuItem value={"active"}>Active</MenuItem>
                            <MenuItem value={"inactive"}>Inactive</MenuItem>
                            </Select>
                        </FormControl>
                        
                           
                    </div>
                    <div className="other-controls">
                        <span className="last-updated-section"> Last updted on september 11 </span>
                        <InputBase
                            placeholder="Search"
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
            </Paper>
        )
    }
    
}