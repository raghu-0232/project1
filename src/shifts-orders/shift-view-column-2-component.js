import React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import './shift-view-column-2-component.css';
import ShiftViewButtonsComponent from './shift-view-buttons-component';
import ShiftsViewColumn2HeaderComponent from './shifts-view-column-2-header';
import ShiftsOrdersTableComponent from './shifts-orders-table-component';
import {CompletedshiftViewTableHeaders, shiftViewTableHeaders} from './table-headers/table-headers';
import {CompletedShiftViewTableData, ShiftViewTableData} from './table-headers/table-headers';
import ShiftsViewNotificationsComponent from './shifts-view-notifications-component';
import CompletedShiftViewButtonsComponent from './completed-shift-view-buttons-component';
import  { useState, useEffect } from 'react';
import {getShiftViewData} from './actions/shifts-orders-actions';
import AssignComponent from './assign-component'
export default class ShiftViewColumn2Component extends React.Component {
    constructor(props){
        super(props);
        this.state = {shiftViewData : {}, rowData:[], openDialogue: false, assignData:{} }
    }
    componentDidMount() {
        
        getShiftViewData(this.props.data.id).then( res => {
            this.setState({shiftViewData: res.data.response, rowData: res.data.response.role_details});
        })

    }
    handleClickOpen = (params) => {
        
    }
    onClose =() => {
        this.setState({openDialogue: false, assignData: {}})
    }
    assignHandler = (params) =>{
        console.log("assign handler", params.data)
       this.setState({openDialogue: true, assignData: params.data})
    }
    assignHeader = { headerName: "Assign", 
                        cellRendererFramework: (params)=> {
                            return <button onClick={ (e) => this.assignHandler(params) }> Assign </button>
                        },
                        minWidth:100,
                        width:100
                    }
    render() {
        return( 
            <Paper className="shift-view-column-2-container">
                {this.props.type === "completed-shift" ? <CompletedShiftViewButtonsComponent /> : 
                    <ShiftViewButtonsComponent />
                }
                <ShiftsViewColumn2HeaderComponent  type={this.props.type} data={this.state.shiftViewData}/>
                {this.props.type === "completed-shift" ?
                <ShiftsOrdersTableComponent tableHeaders={CompletedshiftViewTableHeaders} data={this.state.shiftViewData} rowData={this.state.rowData} />
                :<ShiftsOrdersTableComponent tableHeaders={[...shiftViewTableHeaders, this.assignHeader]} rowData={this.state.rowData} />
                }

                {this.props.type === "completed-shift" && (
                    <div className="completed-shifts-view-buttons-sec-2">
                        <Button className="completed-shift-send-invoice" variant="contained" color="primary"  onClick={this.handleClickOpen}>
                            Edit Invinvoice
                        </Button>
                        <Button className="completed-shift-record-payment-button" variant="contained" color="primary"  onClick={this.handleClickOpen}>
                            Download PDF
                        </Button>
                        <Button className="completed-shift-download-timesheet-button" variant="contained" color="primary" onClick={this.handleClickOpen}>
                            Send invoce
                        </Button>
                        <span> Total : $112</span>
                    </div>
                )}
                <div className="banefits-section">
                    <div>Banefits</div>
                    <div>Free meals, Travel Allowences, Health Insurance</div>
                </div>
                <div>
                    <div>Event Details</div>
                    <Box display="flex" justifyContent="space-between" className="event-details"> 
                        <div className="event-title"> Loreamipsum </div>
                        <div className="attachment-section"> Attachment Required </div>
                     </Box>
                </div>
            {this.props.type !== "completed-shift" && <ShiftsViewNotificationsComponent /> }

                <AssignComponent onClose={this.onClose} assignData={this.state.assignData} openDialogue={this.state.openDialogue}/>

            </Paper>
        )
    }
}