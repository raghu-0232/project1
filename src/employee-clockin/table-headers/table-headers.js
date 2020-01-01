
export const  ClockInTableHeaders = [
    { headerName: "S. No", field: "", minWidth:100, width:100 },
    { headerName: "company", field: "company", minWidth:200, width:200  },
    { headerName: "Event Name", field: "eventName", minWidth:200 , width:200},
    { headerName: "start Date", field: "startDate", minWidth:100, width:100 },
    
    { headerName: "time", field: "time", minWidth:100, width:100 },
    { headerName: "Clockin", field: "clockIn", minWidth:100, width:100 },
    { headerName: "Clockout", field: "clockOut", minWidth:100, width:100 },    
    { headerName: "Breakin", field: "breakIn", minWidth:100, width:100 },    
    { headerName: "Breakout", field: "breakOut", minWidth:100, width:100 },    
];




export const data = {
    "status": true,
    "message": "members",
    "response": [
        {
            "company": "abc",
            "eventName": "testing user",
            "startDate": null,
            "time": "999999999",
            "clockIn": null,
            "clockOut": null,
            "breakIn": null,
            "breakOut": null,
        },
        {
            "company": "abc",
            "eventName": "testing user",
            "startDate": null,
            "time": "999999999",
            "clockIn": null,
            "clockOut": null,
            "breakIn": null,
            "breakOut": null,
        }
    ],
    "total_records": 2
}