import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import './record-payment-component.css'
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Toolbar from '@material-ui/core/Toolbar';
import { DatePicker } from "@material-ui/pickers";
import 'date-fns';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
export default class RecordPaymentComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            open: props.openDialogue,
            selectedList : [],
            paymentDate: new Date(),
            payedThrough: "",
            amount: ""
		}
    }
    handleChange = (value)=> {
        console.log("checked", value)
    }
    savePaymentInfo = (e)=> {
       // this.setState()
    }
    handleClose = () => {
		this.setState({ open: true });
		this.props.onClose();
    };
    payedThroughHandler = (e) => {
        this.setState({payedThrough: e.target.value})
    }
    handleDateChange = (date) => {
        this.setState({paymentDate:date})
    }
    amounthHandler = (e)=> {
        this.setState({amount: e.target.value})
    }
    render(){
        return( 
            <Dialog className="dialogue-container" open={this.props.openDialogue}>
				<Toolbar >
                   
					<IconButton className="dialogue-close" edge="start" color="inherit" onClick={this.handleClose} aria-label="close">
					<CloseIcon />
					</IconButton>
                    
				</Toolbar>
                <div> Payment info</div>
					<DialogContent>
						<div calssName="field-label"> Paid Through</div>
						<InputBase
                            placeholder="Payed through mode"
                            className="payed-through-field"
                            value={this.state.payedThrough}
                            onChange={this.payedThroughHandler}
                        />
                        <div calssName="field-label"> Amount</div>
						<InputBase
                            placeholder="Enter Amount"
                            className="enter-amount-field"
                            value={this.state.amount}
                            onChange={this.amounthHandler}
                        />
                         <div calssName="field-label"> Date of payment</div>
                         <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    autoOk
                                    id="date-picker-inline"
                                    label="Date picker inline"
                                    value={this.state.paymentDate}
                                    onChange={this.handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                                </MuiPickersUtilsProvider>
                        <div>
						<Button variant="contained" className="payment-view-actions-save" color="primary" onClick={this.savePaymentInfo}> Assign </Button>
                        <Button variant="contained" className="payment-view-actions-cancel" onClick={this.handleClose}>  Cancel </Button>
                        </div>
                    </DialogContent>
				</Dialog>
        )
    }
}    