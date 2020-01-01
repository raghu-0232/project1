import React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import './completed-shift-view-buttons-component.css';
import ClientListComponent from './client-list-component';
import Button from '@material-ui/core/Button';

export default class CompletedShiftViewButtonsComponent extends React.Component {
    handleClickOpen = () => {

    }
    render(){

        return( 
            <Box display="flex"  className="completed-shifts-buttons-container">
                <div className="completed-shifts-view-buttons-sec-1">
                    <Button className="shift-edit" variant="contained" color="primary"  onClick={this.handleClickOpen}>
                        Edit
                    </Button>
                    
                </div>
                <div className="completed-shifts-view-buttons-sec-2">
                    <Button className="completed-shift-send-invoice" variant="contained" color="primary"  onClick={this.handleClickOpen}>
                        Send-invoice
                    </Button>
                    <Button className="completed-shift-record-payment-button" variant="contained" color="primary"  onClick={this.handleClickOpen}>
                        Record Payment
                    </Button>
                    <Button className="completed-shift-download-timesheet-button" variant="contained" color="primary" onClick={this.handleClickOpen}>
                        Download Timesheet
                    </Button>
                    <Button className="completed-shift-record-payment-button" variant="contained" color="primary"  onClick={this.handleClickOpen}>
                        Record Payment
                    </Button>
                </div>
            </Box>
                
            )
    }
}