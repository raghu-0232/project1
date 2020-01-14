
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

export const shiftViewTableData = {
    "status": true,
    "message": "job",
    "response": {
        "id": "f8cb0c1d-38a7-4228-9d5b-b221622d575f",
        "event_name": "Coock",
        "shift_id": null,
        "locations": "Paradiese,\n   Hyderabad,\n   telangana,\n   hyd",
        "contact_name": "sdfasdfasdf",
        "contact_phone": "9652003213",
        "start_time": "2019-12-29T10:51:00.000Z",
        "end_time": "2019-12-29T12:54:00.000Z",
        "role_details": [
            {
                "start_time": "2019-12-29T10:51:00.000Z",
                "end_time": "2019-12-29T12:54:00.000Z",
                "count": 1,
                "status": "active",
                "shift_id": "453031fd-d8bc-4177-b97b-66fd2ce39832",
                "role": "chef",
                "price": "$0.0",
                "total": 0,
                "benefits": "sdfasdfasdf",
                "event_details": "",
                "assigned_members": [
                    {
                        "status": "assigned",
                        "shift_application_id": "7cc4f8ce-c747-45aa-86d3-f004fbc37b0d",
                        "member_id": "18d23f1c-758e-44f6-b630-fafba248425f",
                        "name": "Kartheek",
                        "start_time": "2019-12-29T10:51:00.000Z",
                        "end_time": "2019-12-29T10:51:00.000Z",
                        "rating": null,
                        "role_name": "chef"
                    }
                ],
                "applied_members": [
                    {
                        "status": "pending",
                        "shift_application_id": "6e5ce2e7-b614-47a6-a9b9-0892c252d6ee",
                        "member_id": "3859afdd-8ea3-438a-84ff-527e31c5c003",
                        "name": "Kartheekeya",
                        "start_time": "2019-12-29T10:51:00.000Z",
                        "end_time": "2019-12-29T10:51:00.000Z",
                        "rating": null,
                        "role_name": "chef"
                    },
                    {
                        "status": "pending",
                        "shift_application_id": "7db1186b-4d46-409c-b4c3-6346949f98d0",
                        "member_id": "3859afdd-8ea3-438a-84ff-527e31c5c003",
                        "name": "Kartheekeya",
                        "start_time": "2019-12-29T10:51:00.000Z",
                        "end_time": "2019-12-29T10:51:00.000Z",
                        "rating": null,
                        "role_name": "chef"
                    },
                    {
                        "status": "pending",
                        "shift_application_id": "b26bbec1-c542-4755-953d-15b2c966f716",
                        "member_id": "3859afdd-8ea3-438a-84ff-527e31c5c003",
                        "name": "Kartheekeya",
                        "start_time": "2019-12-29T10:51:00.000Z",
                        "end_time": "2019-12-29T10:51:00.000Z",
                        "rating": null,
                        "role_name": "chef"
                    }
                ],
                "inhouse_members": [
                    {
                        "id": "0e0cbf36-d4aa-4a18-ba7d-b0841c1278c4",
                        "name": "testing user",
                        "phone": "999999999",
                        "otp": null,
                        "otp_expiry": null,
                        "login_token": null,
                        "token_generated_at": null,
                        "email": null,
                        "created_at": "2019-12-29T13:24:50.814Z",
                        "updated_at": "2019-12-29T13:24:50.814Z"
                    },
                    {
                        "id": "ad06e564-ed3a-4ccd-ba9f-19c3d7f90323",
                        "name": null,
                        "phone": "7893051914",
                        "otp": null,
                        "otp_expiry": "2020-01-12T06:03:26.174Z",
                        "login_token": "7bc3b092ac5684135ee9cc95453c311716cdb77947dac0bd",
                        "token_generated_at": "2020-01-05T06:03:25.800Z",
                        "email": null,
                        "created_at": "2019-12-29T13:26:02.838Z",
                        "updated_at": "2020-01-05T06:03:26.175Z"
                    },
                    {
                        "id": "7acbca38-a7b0-4a2d-a5e1-7846edc48ba1",
                        "name": null,
                        "phone": "9800000000",
                        "otp": null,
                        "otp_expiry": "2020-01-06T08:01:04.885Z",
                        "login_token": "33c97aa5644c5d49ded646bb0c93e44d6372e1f1a350b0e3",
                        "token_generated_at": "2019-12-30T08:00:58.479Z",
                        "email": null,
                        "created_at": "2019-12-30T06:18:29.199Z",
                        "updated_at": "2019-12-30T08:01:04.885Z"
                    },
                    {
                        "id": "49d240dd-a7f3-4d40-918a-4fae2ae772ef",
                        "name": null,
                        "phone": "9988776655",
                        "otp": null,
                        "otp_expiry": "2020-01-09T18:56:57.476Z",
                        "login_token": "c1e0b87a01b711c8de1004d8a90c5d5bac4a49b2739ee2cb",
                        "token_generated_at": "2020-01-02T18:56:57.122Z",
                        "email": null,
                        "created_at": "2020-01-02T18:52:15.345Z",
                        "updated_at": "2020-01-02T18:56:57.477Z"
                    },
                    {
                        "id": "b9268ab5-4f87-4996-ad4f-4ebb02086e23",
                        "name": null,
                        "phone": "9912199121",
                        "otp": null,
                        "otp_expiry": "2020-01-09T19:03:48.671Z",
                        "login_token": "4d541c21347ca88ef2e33b4ddcc72bb82b53489e53d2df97",
                        "token_generated_at": "2020-01-02T19:03:47.999Z",
                        "email": null,
                        "created_at": "2020-01-02T19:03:48.003Z",
                        "updated_at": "2020-01-02T19:03:48.672Z"
                    },
                    {
                        "id": "5c5fbab9-eaf3-4e29-84c9-5c81a762f8a7",
                        "name": null,
                        "phone": "9874569663",
                        "otp": null,
                        "otp_expiry": "2020-01-05T17:10:18.650Z",
                        "login_token": "0857a046acc6daf8a5d79f934b349f6a8e104789c62b8db5",
                        "token_generated_at": "2019-12-29T17:10:18.367Z",
                        "email": null,
                        "created_at": "2019-12-29T17:10:18.370Z",
                        "updated_at": "2019-12-29T17:10:18.651Z"
                    },
                    {
                        "id": "9a800b54-89cd-4f42-91dd-68e043cb150c",
                        "name": null,
                        "phone": "9988000000",
                        "otp": null,
                        "otp_expiry": "2020-01-07T06:37:48.641Z",
                        "login_token": "59c76b754eaa54aa56665e5157c156732ab1981eb6a92406",
                        "token_generated_at": "2019-12-31T06:37:42.589Z",
                        "email": null,
                        "created_at": "2019-12-31T06:37:42.591Z",
                        "updated_at": "2019-12-31T06:37:48.642Z"
                    },
                    {
                        "id": "3859afdd-8ea3-438a-84ff-527e31c5c003",
                        "name": null,
                        "phone": "9876543210",
                        "otp": null,
                        "otp_expiry": "2020-01-11T10:05:39.643Z",
                        "login_token": "ad6732dc0051097645e5a68d34951aa8aee34512edd5de6e",
                        "token_generated_at": "2020-01-04T10:05:32.710Z",
                        "email": null,
                        "created_at": "2019-12-29T14:21:02.032Z",
                        "updated_at": "2020-01-04T10:05:39.644Z"
                    },
                    {
                        "id": "b23543d3-f691-4a45-80eb-a2adb5c75f81",
                        "name": null,
                        "phone": "9999123456",
                        "otp": null,
                        "otp_expiry": "2020-01-11T16:17:25.199Z",
                        "login_token": "d27e85f3ac94c2ad998bc8f38842c6efe276f6ad89c1d0ef",
                        "token_generated_at": "2020-01-04T16:17:24.620Z",
                        "email": null,
                        "created_at": "2020-01-04T16:17:24.625Z",
                        "updated_at": "2020-01-04T16:17:25.201Z"
                    },
                    {
                        "id": "fc128643-de5d-461e-9963-3b93f2a3beff",
                        "name": null,
                        "phone": "9700715990",
                        "otp": null,
                        "otp_expiry": "2020-01-10T17:38:57.656Z",
                        "login_token": "9806cd34701f819dd938bfe2fb2a64ee6b735ab9e9e2a446",
                        "token_generated_at": "2020-01-03T17:38:56.864Z",
                        "email": null,
                        "created_at": "2019-12-29T16:31:57.084Z",
                        "updated_at": "2020-01-03T17:38:57.656Z"
                    },
                    {
                        "id": "ec256cb3-3052-49e3-b67c-cd118bd9e04a",
                        "name": null,
                        "phone": "9665447745",
                        "otp": null,
                        "otp_expiry": "2020-01-06T02:45:07.095Z",
                        "login_token": "32706932165f29cdde272d85a6b09bc3d1c4b88b84deec63",
                        "token_generated_at": "2019-12-30T02:45:06.781Z",
                        "email": null,
                        "created_at": "2019-12-30T02:45:06.787Z",
                        "updated_at": "2019-12-30T02:45:07.096Z"
                    },
                    {
                        "id": "7929dacf-7a69-4768-a87e-f8d4e4ae1c6e",
                        "name": null,
                        "phone": "9700715998",
                        "otp": null,
                        "otp_expiry": "2020-01-12T04:51:46.672Z",
                        "login_token": "a9c06c9820c1471ea2f9e745ce2f73fab8423710e3ed7454",
                        "token_generated_at": "2020-01-05T04:51:46.248Z",
                        "email": null,
                        "created_at": "2019-12-29T16:32:53.761Z",
                        "updated_at": "2020-01-05T04:51:46.673Z"
                    },
                    {
                        "id": "f657a92b-c79a-4190-aff7-7a2496f06be8",
                        "name": null,
                        "phone": "9991234561",
                        "otp": "146444",
                        "otp_expiry": "2019-12-27T09:58:16.682Z",
                        "login_token": "f30e006530a76350a0858adb4e83a876e9977dd3eb2fcb93",
                        "token_generated_at": "2020-01-03T09:58:16.680Z",
                        "email": null,
                        "created_at": "2020-01-03T09:56:58.723Z",
                        "updated_at": "2020-01-03T09:58:16.683Z"
                    },
                    {
                        "id": "18d23f1c-758e-44f6-b630-fafba248425f",
                        "name": null,
                        "phone": "9876543211",
                        "otp": null,
                        "otp_expiry": "2020-01-07T19:07:51.357Z",
                        "login_token": "7bd777c12e868072871cb3afd896567d6a5fca4071bb9a1f",
                        "token_generated_at": "2019-12-31T19:07:46.310Z",
                        "email": null,
                        "created_at": "2019-12-31T19:07:46.311Z",
                        "updated_at": "2019-12-31T19:07:51.357Z"
                    },
                    {
                        "id": "9c772b46-a0d8-443b-a7eb-6cf691beff3d",
                        "name": null,
                        "phone": "",
                        "otp": null,
                        "otp_expiry": "2020-01-12T05:38:49.872Z",
                        "login_token": "d2c1459188e0dcf84aadf4fd5dd38923acd8825c95fcdcff",
                        "token_generated_at": "2020-01-05T05:38:48.454Z",
                        "email": null,
                        "created_at": "2019-12-31T11:19:42.846Z",
                        "updated_at": "2020-01-05T05:38:49.872Z"
                    },
                    {
                        "id": "19646479-c47a-4c66-9599-916b95c48d41",
                        "name": null,
                        "phone": "8558888555",
                        "otp": "636742",
                        "otp_expiry": "2019-12-27T16:28:59.770Z",
                        "login_token": "7c064c0981c9e57adb1f4e19e7527bb6171e938bf46b8409",
                        "token_generated_at": "2020-01-03T16:28:59.768Z",
                        "email": null,
                        "created_at": "2020-01-03T16:28:13.731Z",
                        "updated_at": "2020-01-03T16:28:59.770Z"
                    }
                ]
            }
        ]
    },
    "total_records": 0
}