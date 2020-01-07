import React from 'react';
import Box from '@material-ui/core/Box';
import './employee-view-body-component.css'
export default function EmployeeViewBodyComponent(props) {
    getSelection= (name, value)=> {
        return <Box display="flex" className="each-section">
                    <div className="each-section-name">{name}</div>
                    <div className="each-section-value">{value}</div>
                </Box>
    }
    const data = props.employeeData;
    let roles =  data.roles || "";
    let skill =  data.skill || "";
    let date_of_birth =  data.date_of_birth || "";
    let marriage_status =  data.marriage_status || "";
    let availability =  data.availability || "";
    let dress_code =  data.dress_code || "";
    let education =  data.education || "";
    let work_experience =  data.work_experience || "";
    let information = data.information || "";
    
    return( 
            <div className="employee-view-body-container">
                {getSelection("Roles:", roles.toString())}
                {getSelection("Skill level:", skill.toString())}
                {getSelection("Personal Information: ", "")}
                {getSelection("Date of Birth:", date_of_birth)}
                {getSelection("Marriage Status:", marriage_status)}
                { !data.address && getSelection("Home Address:", "No address available")}
                { data.address && getSelection("Home Address:", `${data.address.apartment_number},${data.address.street},${data.address.city},${data.address.zipcode},${data.address.country}`)}
                {getSelection("Availability", availability)}
                {getSelection("Dress Code", dress_code)}
                {getSelection("Educational Qualifications", education)}
                {getSelection("Work experience", work_experience)}                
            </div>
        )
}

