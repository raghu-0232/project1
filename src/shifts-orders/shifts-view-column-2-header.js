import React from 'react';
import './shifts-view-column-2-header.css'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


export default class ShiftsViewColumn2HeaderComponent extends React.Component{
    handleClickOpen = ()=>{

    }
    render(){
      const  data = this.props.data;
       const shift_id = data.shift_id || ""
       const event_name = data.event_name || ""
       const locations = data.locations || ""
       const contact_name = data.contact_name || ""
       const contact_phone = data.contact_phone || ""
    return( 
            <div className="shifts-view-column-2-header-container">
                <div className="column-2-header-buttons"> 
                    {
                        this.props.type === "completed-shift" ? <span> Payment Status : Paid </span> : 
                    <div>
                        <Button className="column-2-header-edit-button" variant="contained" color="primary"  onClick={this.handleClickOpen}>
                            Edit
                        </Button>
                        <Button className="column-2-header-attachment-button" variant="contained" color="primary"  onClick={this.handleClickOpen}>
                            Attachment
                        </Button>
                    </div>
                 }
                </div>
                <div className="shift-id-and-more-details">
                  <div className="shift-id"> Shift ID: {shift_id }</div>
                  <h3 className="shift-id">{event_name }</h3>
                </div>
                <Box display="flex" justifyContent="space-between">
                    <div>
                        <div>Client Location: {locations }</div>
                        <div>Road no: 456, Read cross road</div>
                        <div>Duratoin : 11/01/2019 - 15/10/2019</div>
                    </div>
                    <div>
                        <div> Superior Details</div>
                        <div> {contact_name }</div>
                        <div> {contact_phone }</div>

                    </div>
                </Box>
            </div>)
    }
 }