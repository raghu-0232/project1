import React from 'react';
function viewEmployee(params) {
    console.log("From view employee", params)
}

export const  ActiveEmployeeHeaders = [
    { headerName: "Emp ID", field: "employee_id", minWidth:100, width:100 },
    { headerName: "Name", field: "name", minWidth:200, width:200  },
    { headerName: "Email", field: "email", minWidth:200 , width:200},
    { headerName: "Phone", field: "phone", minWidth:100, width:100 },
    { headerName: "Address", minWidth:200, cellRenderer: (params)=> {
            console.log("cellRender params", params)
            if(params.data.address){
                return `<div>
                    <span>${params.data.address.street},</span>
                    <span>${params.data.address.city},</span>
                    <span>${params.data.address.country},</span>
                    <span>${params.data.address.zipcode}</span>
                </div>`
            }
        }

    },
    { headerName: "Ratings", field: "ratings", minWidth:100, width:100 },
    { headerName: "Total Shifts", field: "totalShifts", minWidth:100, width:100 },
    { headerName: "Options", field: "", minWidth:100, width:100 },    
];

export const  AwaitingApprovalsHeaders = [
    { headerName: "Emp ID", field: "employee_id", minWidth:100, width:100 },
    { headerName: "Name", field: "name", minWidth:200, width:200  },
    { headerName: "Email", field: "email", minWidth:200 , width:200},
    { headerName: "Role", field: "role", minWidth:200 , width:200},

    { headerName: "Phone", field: "phone", minWidth:100, width:100 },
    { headerName: "Address", minWidth:200, cellRenderer: (params)=> {
            console.log("cellRender params", params)
            if(params.data.address){
                return `<div>
                    <span>${params.data.address.street},</span>
                    <span>${params.data.address.city},</span>
                    <span>${params.data.address.country},</span>
                    <span>${params.data.address.zipcode}</span>
                </div>`
            }
        }

    },
];

export const  InActiveEmployeeHeaders = [
    { headerName: "Emp ID", field: "employee_id", minWidth:100, width:100 },
    { headerName: "Name", field: "name", minWidth:200, width:200  },
    { headerName: "Email", field: "email", minWidth:200 , width:200},
    { headerName: "Role", field: "role", minWidth:200 , width:200},

    { headerName: "Phone", field: "phone", minWidth:100, width:100 },
    { headerName: "Address", minWidth:200, cellRenderer: (params)=> {
            console.log("cellRender params", params)
            if(params.data.address){
                return `<div>
                    <span>${params.data.address.street},</span>
                    <span>${params.data.address.city},</span>
                    <span>${params.data.address.country},</span>
                    <span>${params.data.address.zipcode}</span>
                </div>`
            }
        }

    },
];

export const data = {
    "status": true,
    "message": "members",
    "response": [
        {
            "id": "4753617a-cb1a-4d47-98b4-ed85c0d380bd",
            "name": "testing user",
            "email": null,
            "phone": "999999999",
            "address": null,
            "ratings": null,
            "options": null,
            "employee_id": null
        },
        {
            "id": "0463924a-50c3-4557-90cb-3f5f3bbe7cb5",
            "name": null,
            "email": null,
            "phone": "8886344114",
            "address": {
                "id": "f3d6a7f8-0a69-4345-8b5d-1967859dc19b",
                "gender": "male",
                "street": 'jublee',
                "apartment_number": null,
                "city": 'hyd',
                "zipcode": 500071,
                "country": "india",
                "date_of_birth": "0012-11-12T00:00:00.000Z",
                "work_distance": "123",
                "email": "d.usmanazat@gmail.com",
                "name": "asdfg",
                "ssn_number": "12345",
                "latitude": null,
                "longitude": null,
                "member_id": "0463924a-50c3-4557-90cb-3f5f3bbe7cb5",
                "created_at": "2019-12-21T09:11:51.714Z",
                "updated_at": "2019-12-21T09:11:51.714Z",
                "is_verified": false
            },
            "ratings": null,
            "options": null,
            "employee_id": {
                "id": "f3d6a7f8-0a69-4345-8b5d-1967859dc19b",
                "gender": "male",
                "street": null,
                "apartment_number": null,
                "city": null,
                "zipcode": null,
                "country": null,
                "date_of_birth": "0012-11-12T00:00:00.000Z",
                "work_distance": "123",
                "email": "d.usmanazat@gmail.com",
                "name": "asdfg",
                "ssn_number": "12345",
                "latitude": null,
                "longitude": null,
                "member_id": "0463924a-50c3-4557-90cb-3f5f3bbe7cb5",
                "created_at": "2019-12-21T09:11:51.714Z",
                "updated_at": "2019-12-21T09:11:51.714Z",
                "is_verified": false
            }
        }
    ],
    "total_records": 2
}