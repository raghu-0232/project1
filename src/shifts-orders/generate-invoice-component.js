import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import './generate-invoice-component.css'
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
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import {GenerateInvoiceHeaders} from './table-headers/table-headers'


export default class GenerateInvoiceComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            open: props.openDialogue,
            poNumber: "",
            shiftNumber:"",
            dueDate: new Date(),
            cafteriaCode: "",
            invoiceDate: new Date(),
            orderName: "",
            invoiceNumber: "",
            poNumber: ""
		}
    }
    handleChange = (e)=> {
       this.setState({ [e.target.id]: e.target.value})
    }
    savePaymentInfo = (e)=> {
       // this.setState()
    }
    handleClose = () => {
		this.setState({ open: true });
		this.props.onClose();
    };
    
    handleDueDateChange = (date) => {
        this.setState({dueDate:date})
    }
    handleInvoiceDateChange = (date) => {
        this.setState({invoiceDate:date})
    }
    
    render(){
        return( 
            <Dialog className="dialogue-container generate-invoice-dialogue" fullScreen open={this.props.openDialogue}>
				<Toolbar >
                   
					<IconButton className="dialogue-close" edge="start" color="inherit" onClick={this.handleClose} aria-label="close">
					<CloseIcon />
					</IconButton>
                    
				</Toolbar>
                <div> Payment info</div>
					<DialogContent className="generate-invoice-dialogue-content">
						<Box display="flex" justifyContent="space-between" className="generate-invoice-header"> 
                            <div>
                                <div>Lorem Ipsum</div>
                                <h3> Client Name goes here</h3>
                                <div>ljsdf lsdfj  jsdf  </div>
                                <div>
                                    <span> ljsdf lsdfj  jsdf </span>
                                    <span>   Date : 19 Sep 2019 | 09: 00</span> 
                                </div>
                            </div>
                            <div>
                                <div> Client Tech solutions  </div> 
                                <div>Rd-456, Red cross roads, stree no : 44 </div> 
                            </div>
                           
                        </Box>
            
                        <Box display="flex"> 
                        <div className="shift-number-field-section"> 
                                <label>Shift Number</label>
                                <InputBase
                                    placeholder="Shift Number"
                                    className="shift-number-field"
                                    value={this.state.shiftNumber}
                                    id="shiftNumber"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div> 
                                <label className="date-label">Due Date</label>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    autoOk
                                    id="dueDate"
                                    label="Date picker inline"
                                    value={this.state.dueDate}
                                    onChange={this.handleDueDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                                </MuiPickersUtilsProvider>
                            </div>
                            <div className="cafteria-code-field-section"> 
                                <label>Cafteria Code</label>
                                <InputBase
                                    placeholder="Cafteria  Code"
                                    className="cafteria-code-field"
                                    value={this.state.cafteriaCode}
                                    id="cafteriaCode"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </Box>
                            <Box display="flex" className="center-section"> 
                            <div> 
                                <label className="date-label">Invoice Date</label>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    autoOk
                                    id="invoiceDate"
                                    label="Date picker inline"
                                    value={this.state.invoiceDate}
                                    onChange={this.handleInvoiceDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                                </MuiPickersUtilsProvider>
                            </div>
                            <div className="order-name-field-section"> 
                                <label>Order Name</label>
                                <InputBase
                                    placeholder="Order Name"
                                    className="order-name-field"
                                    value={this.state.orderName}
                                    id="orderName"
                                    onChange={this.handleChange}
                                />
                            </div>
                            </Box>
                            <Box display="flex"> 
                            <div> 
                                <label>Invoice Number</label>
                                <InputBase
                                    placeholder="Nnvoice Number "
                                    className="invoice-number-field"
                                    value={this.state.invoiceNumber}
                                    id="invoiceNumber"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div> 
                                <label>Po Number</label>
                                <InputBase
                                    placeholder="Po Number"
                                    className="po-number-field"
                                    value={this.state.poNumber}
                                    id="poNumber"
                                    onChange={this.handleChange}
                                />
                            </div>
                            </Box>

                        <div className="ag-theme-balham" style={{ height: '200px', width: '100%' }}>
                            <AgGridReact
                                columnDefs={GenerateInvoiceHeaders}
                                rowData={[]}
                                pagination={true}
                            >
                            </AgGridReact>
                        </div>
                        <div className="generate-invoice-buttons">
                            <Button variant="contained" className="Edit-invoice-action" color="primary" id="editInvoice" onClick={this.handleClick}> Edit Invoice </Button>
                            <Button variant="contained" className="download-pdf-action" onClick={this.handleClick}>  Download PDF </Button>
                            <Button variant="contained" className="send-invoice-action" onClick={this.handleClick}>  Send Invoice </Button>
                            <span className="generate-invoice-total"> 
                                  
                                            Total: $112
                                   
                            </span>
                        </div>
                       
                    </DialogContent>
				</Dialog>
        )
    }
}    