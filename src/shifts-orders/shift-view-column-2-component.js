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
var data = {"status":true,"message":"success","response":{"id":"0463924a-50c3-4557-90cb-3f5f3bbe7cb5","roles":["chef","waiter","cloth"],"skill":[{"id":1,"member_id":"0463924a-50c3-4557-90cb-3f5f3bbe7cb5","role_id":"4125b615-b729-4387-ada1-d53e66a2307e","level":"beginner","experience":6,"created_at":"2019-12-19T19:14:35.382Z","updated_at":"2019-12-19T19:14:35.382Z"},{"id":2,"member_id":"0463924a-50c3-4557-90cb-3f5f3bbe7cb5","role_id":"a1984bcd-2f33-4f61-8a16-e5d84b8fff8d","level":"beginner","experience":6,"created_at":"2019-12-21T09:10:30.167Z","updated_at":"2019-12-21T09:10:30.167Z"},{"id":3,"member_id":"0463924a-50c3-4557-90cb-3f5f3bbe7cb5","role_id":"45dd1a3c-088a-470f-843c-ee700f492a48","level":"pro","experience":15,"created_at":"2019-12-21T09:10:30.238Z","updated_at":"2019-12-21T09:10:30.238Z"}],"date_of_birth":"0012-11-12T00:00:00.000Z","information":{"id":"f3d6a7f8-0a69-4345-8b5d-1967859dc19b","gender":"male","street":null,"apartment_number":null,"city":null,"zipcode":null,"country":null,"date_of_birth":"0012-11-12T00:00:00.000Z","work_distance":"123","email":"d.usmanazat@gmail.com","name":"asdfg","ssn_number":"12345","latitude":null,"longitude":null,"member_id":"0463924a-50c3-4557-90cb-3f5f3bbe7cb5","created_at":"2019-12-21T09:11:51.714Z","updated_at":"2019-12-21T09:11:51.714Z","is_verified":false},"marriage_status":null,"availability":null,"dress_code":null,"education":null,"work_experience":null,"address":{"id":"f3d6a7f8-0a69-4345-8b5d-1967859dc19b","gender":"male","street":null,"apartment_number":null,"city":null,"zipcode":null,"country":null,"date_of_birth":"0012-11-12T00:00:00.000Z","work_distance":"123","email":"d.usmanazat@gmail.com","name":"asdfg","ssn_number":"12345","latitude":null,"longitude":null,"member_id":"0463924a-50c3-4557-90cb-3f5f3bbe7cb5","created_at":"2019-12-21T09:11:51.714Z","updated_at":"2019-12-21T09:11:51.714Z","is_verified":false},"email":null,"phone":null,"location":null,"ssn_number":"12345","gender":"male","date_of_joining":null},"total_records":0}
export default function ShiftViewColumn2Component(props) {
   const handleClickOpen = () => {

    }
    return( 
            <Paper className="shift-view-column-2-container">
                {props.type === "completed-shift" ? <CompletedShiftViewButtonsComponent /> : 
                    <ShiftViewButtonsComponent />
                }
                <ShiftsViewColumn2HeaderComponent  type={props.type}/>
                {props.type === "completed-shift" ?
                <ShiftsOrdersTableComponent tableHeaders={CompletedshiftViewTableHeaders} rowData={CompletedShiftViewTableData.response} />
                                 : 
                 <ShiftsOrdersTableComponent tableHeaders={shiftViewTableHeaders} rowData={ShiftViewTableData.response} />

                }

                {props.type === "completed-shift" && (
                    <div className="completed-shifts-view-buttons-sec-2">
                        <Button className="completed-shift-send-invoice" variant="contained" color="primary"  onClick={handleClickOpen}>
                            Edit Invinvoice
                        </Button>
                        <Button className="completed-shift-record-payment-button" variant="contained" color="primary"  onClick={handleClickOpen}>
                            Download PDF
                        </Button>
                        <Button className="completed-shift-download-timesheet-button" variant="contained" color="primary" onClick={handleClickOpen}>
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
            {props.type !== "completed-shift" && <ShiftsViewNotificationsComponent /> }
            </Paper>
        )
}