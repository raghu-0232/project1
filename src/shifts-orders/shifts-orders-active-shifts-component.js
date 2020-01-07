import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import ActiveShiftsButtonsComponent from './active-shifts-buttons-component';
 import ShiftsOrdersTableComponent from './active-shifts-table-component';
import {ActiveShiftsHeaders} from './table-headers/table-headers';
 import {ActiveShiftsData} from './table-headers/table-headers';
 import ShiftViewDialogue from './shift-view-dialogue-component';
export default class  ActiveShiftsComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showShiftVieww: false,
            selectedRowData: null
        }
    }
    viewShift = (params) =>{
        this.setState({showShiftVieww: true, selectedRowData: params.data})
    }
    onClose = () => {
        this.setState({showShiftVieww: false, selectedRowData: null})
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
                     <ActiveShiftsButtonsComponent />
                    <ShiftsOrdersTableComponent tableHeaders={[...ActiveShiftsHeaders, this.viewHeader ]} rowData={ActiveShiftsData.response} viewHandler={this.viewShift}/>
                     {this.state.showShiftVieww? <ShiftViewDialogue data={this.state.selectedRowData} onClose={this.onClose}/> : "" }  
                </div>
            </Paper>
        )

    }    
}