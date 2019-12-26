import React from 'react';
import Box from '@material-ui/core/Box';
import './company-view-body-component.css'
import Button from '@material-ui/core/Button';

export default class CompanyViewBodyComponent extends React.Component {
    constructor(props){
        super(props);
        this.state ={ 
            barTender: "",
            masterChef: "",
            manager: "",
            frontOffice: "",
            waiters : "",
            administrator: "",
            security: "",
            helpers: "",
        }
    }
    handleChange = () => {        

    }
    getSelection= (name, value)=> {
        return <Box display="flex" className="each-section">
                    <div className="each-section-name">{name}</div>
                    <div className="each-section-value">{value}</div>
                </Box>
    }
    getRoleSection =(text, name, value)=> {
        return <Box display="flex" className="each-section role-each-section">
                    <div className="each-section-name">{text}</div>
                    <div className="each-section-value"> <input name={name} value={value} onChange={this.handleChange} /> </div>
                </Box>
    }
    render(){
        const data = this.props.data;
        return( 
                <div className="company-view-body-container">
                    {this.getSelection("Business Name:","")}
                    {this.getSelection("Category of Business:", "adspicing edit")}
                    {this.getSelection("City: ", "adspicing edit")}
                    {this.getSelection("State:", "")}
                    {this.getSelection("Business Phone:", "")}
                    {/* {this.getSelection("Locations:", `${data.address.apartment_number},${data.address.street},${data.address.city},${data.address.zipcode},${data.address.country}`)} */}
                    
                    <Box display="flex" className="each-section role-sections">
                        <div className="each-section-name">Role</div>
                        <div className="each-section-value">Charges</div>
                    </Box>
                    {this.getRoleSection("Bartender:", 'barTender', "$30")}
                    {this.getRoleSection("Master Chef:", 'masterChef', "$30")}
                    {this.getRoleSection("manager:", 'manager', "$30")}
                    {this.getRoleSection("Front Office:", 'frontOffice', "$30")}
                    {this.getRoleSection("waiters:", 'waiters', "$30")}
                    {this.getRoleSection("administrator:", 'administrator', "$30")}
                    {this.getRoleSection("security:", 'security', "$30")}
                    {this.getRoleSection("helpers:", 'helpers', "$30")}
                    <div className="company-view-actions">
                        <Button variant="contained" className="company-view-actions-save" color="primary"> Save </Button>
                        <Button variant="contained" className="company-view-actions-cancel" >  Cancel </Button>
                    </div>
                </div>
            )
    }

}

