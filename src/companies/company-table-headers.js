export const  CompanyTableHeaders = [
    { headerName: "S.no",  minWidth:100, width:100,cellRenderer: (params)=> {
            return `<div>
                        <span>${params.rowIndex +1 }</span>
                    </div>`
       
    } },
    { headerName: "Company", field: "company", minWidth:200, width:200  },
    { headerName: "Email ID", field: "email", minWidth:200 , width:200},
    { headerName: "Location", minWidth:200, cellRenderer: (params)=> {
           
            if(params.data.address){
                return `<div>
                    <span>${params.data.location.title},</span>
                    <span>${params.data.address.city},</span>
                    <span>${params.data.address.country},</span>
                    <span>${params.data.address.zipcode}</span>
                </div>`
            }
        }

    },
    { headerName: "Contact Person", field: "contact_person", minWidth:100, width:100 },
    { headerName: "Company Document", field: "company_document", minWidth:100, width:100 },
];

export const data = {
    "status": true,
    "message": "Users",
    "response": [
        {
            "id": "6a6262ac-08ac-407d-9649-4ca716c4d736",
            "email": "dnshariprasad@gmail.com",
            "company": "Hari Prasad",
            "location": {
                "id": "0bc6876b-f814-4772-9b00-83a28a882e66",
                "business_name": "Hari Prasad",
                "title": "jsjsj",
                "category_id": "33c06fec-c111-45cd-bed5-4a99266b7c54",
                "business_phone": "9637675555",
                "ein_number": "dhhd",
                "tin_number": "zhxhh",
                "user_id": "6a6262ac-08ac-407d-9649-4ca716c4d736",
                "created_at": "2019-12-24T09:46:29.621Z",
                "updated_at": "2019-12-24T09:46:29.621Z",
                "location_instruction": null,
                "is_verified": false
            },
            "contact_person": null,
            "company_document": null
        },
        {
            "id": "8828d979-4e87-4ea7-813b-c6196924cb16",
            "email": "rizu361@gmail.com",
            "company": null,
            "location": null,
            "contact_person": null,
            "company_document": null
        },
        {
            "id": "e601a095-12e0-4e01-894f-6625b13f99cb",
            "email": "t4@gmail.com",
            "company": null,
            "location": null,
            "contact_person": null,
            "company_document": null
        }
    ],
    "total_records": 3
}