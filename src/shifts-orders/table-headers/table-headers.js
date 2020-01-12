
export const  ActiveShiftsHeaders = [
    { headerName: "S.no",  minWidth:100, width:100,cellRenderer: (params)=> {
        return `<div>
                    <span>${params.rowIndex +1 }</span>
                </div>`
    }},
    { headerName: "Company Name", field: "company_name", minWidth:200, width:200  },
    { headerName: "Events/Shift Name", field: "event_name", minWidth:200 , width:200},
    { headerName: "No of Gigs", field: "gigs", minWidth:100, width:100 },
    { headerName: "start Time", field: "event_date", minWidth:100, width:100 },
    { headerName: "Satus", field: "status", minWidth:100, width:100 },
    { headerName: "Location", field: "location", minWidth:100, width:100 },    
];

export const  CompletedShiftsHeaders =[
    { headerName: "S.no",  minWidth:100, width:100, cellRenderer: (params)=> {
        return `<div>
                    <span>${params.rowIndex +1 }</span>
                </div>`
   
    }},
    { headerName: "Company Name", field: "companyName", minWidth:200, width:200  },
    { headerName: "Order Name/Event", field: "shiftName", minWidth:200 , width:200},
    { headerName: "Start Date", field: "startDate", minWidth:100, width:100 },
    { headerName: "time", field: "time", minWidth:100, width:100 },
    { headerName: "amount", field: "amount", minWidth:100, width:100 },
    { headerName: "Payment Status", field: "paymentStatus", minWidth:100, width:100 },    
];

export const  shiftViewTableHeaders =[
    { headerName: "Requirement",  field:'role', minWidth:100, width:100 },
    { headerName: "People needed", field: "count", minWidth:200, width:200  },
    { headerName: "Start time", field: "start_time", minWidth:200 , width:200},
    { headerName: "End Time", field: "end_time", minWidth:100, width:100 },
    { headerName: "Price/Person", field: "price", minWidth:100, width:100 },
    { headerName: "Total", field: "total", minWidth:100, width:100 },
];
export const  CompletedshiftViewTableHeaders =[
    { headerName: "S.no",  field:'requirement', minWidth:100, width:100 },
    { headerName: "Employee Name", field: "peopleNeeded", minWidth:200, width:200  },
    { headerName: "Role", field: "clockIn", minWidth:200 , width:200},
    { headerName: "Clockin", field: "clockOut", minWidth:100, width:100 },
    { headerName: "Clockout", field: "price", minWidth:100, width:100 },
    { headerName: "Break-in", field: "total", minWidth:100, width:100 },
    { headerName: "Break-out", field: "total", minWidth:100, width:100 },
    { headerName: "Break-time", field: "total", minWidth:100, width:100 },

];
export const  GenerateInvoiceHeaders =[
    { headerName: "S.no",  minWidth:100, width:100, cellRenderer: (params)=> {
        return `<div>
                    <span>${params.rowIndex +1 }</span>
                </div>`
   
    }},
    { headerName: "Employee Name", field: "peopleNeeded", minWidth:200, width:200  },
    { headerName: "Employee Name", field: "employeeName", minWidth:200 , width:200},
    { headerName: "Role", field: "role", minWidth:100, width:100 },
    { headerName: "Clockin", field: "clockin", minWidth:100, width:100 },
    { headerName: "Clockout", field: "clockout", minWidth:100, width:100 },
    { headerName: "Break-in", field: "breakin", minWidth:100, width:100 },
    { headerName: "Break-out", field: "breakout", minWidth:100, width:100 },
    { headerName: "Break-time", field: "total", minWidth:100, width:100 },
    { headerName: "work-hours", field: "work_hours", minWidth:100, width:100 },
    { headerName: "Over-time", field: "over_time", minWidth:100, width:100 },
    { headerName: "Per/Hr", field: "perhr", minWidth:100, width:100 },
    { headerName: "Total", field: "total", minWidth:100, width:100 },


];

export const CompletedShiftViewTableData = {
    "status": true,
    "message": "members",
    "response": [
        {
            "employeeName": "barback",
            "role":5,
            "clockIn": "21:Sep'19 | 09:90 PM",
            "clockOut": "21:Sep'19 | 09:90 PM",
            "breakIn": "$20",
            "breakOut": "$12.00",
            "breakTime": "$12.00",
        },
        {
            "employeeName": "barback",
            "role":5,
            "clockIn": "21:Sep'19 | 09:90 PM",
            "clockOut": "21:Sep'19 | 09:90 PM",
            "breakIn": "$20",
            "breakOut": "$12.00",
            "breakTime": "$12.00",
        },
       
    ],
    "total_records": 2
}

export const ShiftViewTableData = {
    "status": true,
    "message": "members",
    "response": [
        {
            "requirement": "barback",
            "peopleNeeded":5,
            "clockIn": "21:Sep'19 | 09:90 PM",
            "clockOut": "21:Sep'19 | 09:90 PM",
            "price": "$20",
            "total": "$12.00",
            
        },
        {
            "requirement": "barback",
            "peopleNeeded":5,
            "clockIn": "21:Sep'19 | 09:90 PM",
            "clockOut": "21:Sep'19 | 09:90 PM",
            "price": "$20",
            "total": "$12.00",
            
        },
       
    ],
    "total_records": 2
}
export const CompletedShiftsData = {
    "status": true,
    "message": "members",
    "response": [
        {
            "id": "4753617a-cb1a-4d47-98b4-ed85c0d380bd",
            "companyName": "testing user",
            "shiftName": null,
            "startDate": "999999999",
            "time": null,
            "amount": null,
            "paymentStatus": null
        },
        {
            "id": "4753617a-cb1a-4d47-98b4-ed85c0d380bd",
            "companyName": "testing user",
            "shiftName": null,
            "startDate": "999999999",
            "time": null,
            "amount": null,
            "paymentStatus": null
        }
       
    ],
    "total_records": 2
}
export const ActiveShiftsData = {
    "status": true,
    "message": "members",
    "response": [
        {
            "id": "4753617a-cb1a-4d47-98b4-ed85c0d380bd",
            "companyName": "testing user",
            "shiftName": null,
            "noOfGigs": "999999999",
            "startTime": null,
            "status": null,
            "location": null
        },
        {
            "id": "4753617a-cb1a-4d47-98b4-ed85c0d380bd",
            "companyName": "testing user",
            "shiftName": null,
            "noOfGigs": "999999999",
            "startTime": null,
            "status": null,
            "location": null
        }
       
    ],
    "total_records": 2
}