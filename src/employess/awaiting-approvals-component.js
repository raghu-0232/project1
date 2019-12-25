import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import EmployeeList from './employee-list';
import {AwaitingApprovalsHeaders} from './table-headers/employees-headers';
import {data} from './table-headers/employees-headers';
import EmployeeViewDialogue from './employee-view-dialogue';
export default class  AwaitingApprovalsEmployessComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showEmployeeView: false,
            selectedEmployee: null
        }
    }
    viewEmployee = (params) =>{
        this.setState({showEmployeeView: true, selectedEmployee: params})
    }
    onClose = () => {
        this.setState({showEmployeeView: false, selectedEmployee: null})
    }
    viewEmployeeHeader = { headerName: "View", 
                        cellRendererFramework: (params)=> {
                            return <button onClick={ (e) => this.viewEmployee(params) }> view </button>
                        },
                        minWidth:100,
                        width:100
                    }
    render() {
        return ( 
            <Paper className="awaiting-employees-container">
                <div>
                    
                    <EmployeeList tableHeaders={[...AwaitingApprovalsHeaders, this.viewEmployeeHeader ]} rowData={data.response} viewHandler={this.viewEmployee}/>
                    {this.state.showEmployeeView? <EmployeeViewDialogue data={this.state.selectedEmployee} onClose={this.onClose}/> : "" }
                </div>
            </Paper>
        )

    }    
}