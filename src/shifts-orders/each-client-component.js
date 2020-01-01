import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import './each-client-component.css'
export default class EachClientComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
           
        }
    }
    handleChange = (value)=> {
        console.log("checked", value)
    }
    render(){
        return( 
            <Box display="flex" className="each-client-container">
                <FormControlLabel
                    control={
                    <Checkbox onChange={this.handleChange('checkedA')} value="checkedA" />
                    }
                />
                <div className="number-section"> 1</div>
                <div className="client-more-info-section"> 
                    <div className="client-name-section"> Client Tech ltd</div>
                    <div className="client-desc-section"> Client Tech ltd description</div>
                    <div className="client-date-time-status"> 
                        <span className='client-date'> 10 sep 19 </span>
                        <span className='client-time'> 9:00pm </span>
                        <span className='client-status'> Activ</span>
                    </div>
                </div>
            </Box>
        )
    }
}    