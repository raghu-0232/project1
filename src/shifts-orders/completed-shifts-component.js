import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
// import ActiveEmployessButtonsComponent from './active-employees-buttons-component';
// import EmployeeList from './employee-list';
// import {ActiveEmployeeHeaders} from './table-headers/employees-headers';
// import {data} from './table-headers/employees-headers';


import CompletedShiftsButtonsComponent from './completed-shifts-buttons-component';
import ShiftsOrdersTableComponent from './active-shifts-table-component';
import {CompletedShiftsHeaders} from './table-headers/table-headers';
import ShiftViewDialogue from './shift-view-dialogue-component';


export default class  CompletedComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showShiftVieww: false,
            selectedShift: null
        }
    }
    viewShift = (params) =>{
        this.setState({showShiftVieww: true, selectedShift: params.data})
    }
    setDataForClientsInfo =(data)=>{
        this.setState({clientsData: data})
    }
    onClose = () => {
        this.setState({showShiftVieww: false, selectedShift: null})
    }
    viewHeader = { headerName: "View", 
                        cellRendererFramework: (params)=> {
                            return <button onClick={ (e) => this.viewShift(params) }> view </button>
                        },
                        minWidth:100,
                        width:100
                    }
    render() {
        return ( 
            <Paper className="active-employees-container">
                <div>
                    <CompletedShiftsButtonsComponent />
                    <ShiftsOrdersTableComponent tableHeaders={[...CompletedShiftsHeaders, this.viewHeader ]} viewHandler={this.viewShift} setDataForClientsInfo={this.setDataForClientsInfo}/>
                    {this.state.showShiftVieww? <ShiftViewDialogue clientsData={this.state.clientsData} data={this.state.selectedShift} type="completed-shift" onClose={this.onClose}/> : "" }  
                </div>
            </Paper>
        )

    }  
}