import React from 'react';
import Box from '@material-ui/core/Box';
import './company-view-body-component.css'
export default function CompanyViewBodyComponent(props) {
    getSelection= (name, value)=> {
        return <Box display="flex" className="each-section">
                    <div className="each-section-name">{name}</div>
                    <div className="each-section-value">{value}</div>
                </Box>
    }
    const data = props.data;
    return( 
            <div className="company-view-body-container">
                {getSelection("Roles:", data.roles.toString())}
                {getSelection("Skill level:", "adspicing edit")}
                {getSelection("Personal Information: ", "adspicing edit")}
                {getSelection("Date of Birth:", data.date_of_birth)}
                {getSelection("Marriage Status:", data.marriage_status)}
                {getSelection("Home Address:", `${data.address.apartment_number},${data.address.street},${data.address.city},${data.address.zipcode},${data.address.country}`)}
                {getSelection("Availability", data.availability)}
                {getSelection("Dress Code", data.dress_code)}
                {getSelection("Educational Qualifications", data.education)}
                {getSelection("Work experience", data.work_experience)}
                
            </div>
        )
}

