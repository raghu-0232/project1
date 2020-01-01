import React from 'react';
import './shifts-view-column-2-header.css'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


export default class ShiftsViewColumn2HeaderComponent extends React.Component{
    handleClickOpen = ()=>{

    }
    render(){
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
                  <div className="shift-id"> Shift ID: ER000-20</div>
                  <h3 className="shift-id">Client Annual Day Celebrations</h3>
                </div>
                <Box display="flex" justifyContent="space-between">
                    <div>
                        <div>Client Location: Illonous</div>
                        <div>Road no: 456, Read cross road</div>
                        <div>Duratoin : 11/01/2019 - 15/10/2019</div>
                    </div>
                    <div>
                        <div> Superior Details</div>
                        <div> Krisitana</div>
                        <div> +9453454354354</div>

                    </div>
                </Box>
            </div>)
    }
 }