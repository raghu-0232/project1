import React from 'react';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Box';
import './company-view-header-component.css'

export default function CompanyViewHeaderComponent(props) {
    const getSection= (name, value) => {
        return (<div className = "each-section">
                    <div className="each-section-name">{name}</div>
                    <div className="each-section-value">{value}</div>
                </div>)
    }
    const data = props.data.response || {};

    let business_name = data.business_name || "";
    let business_category = data.business_category || "";
    let email = data.email || ""
    let location = data.location || ""
    let phone = data.phone || ""
    let title = data.title || ""

    return( 
      
            <Paper className="company-view-header-container">
                <Box display="flex">
                    <div className="column-2">
                         <Avatar alt="Image comes here" src="/static/images/avatar/1.jpg" />
                    </div>
                    <div>
                        <div>Indiana Jones</div>
                        <div>Rating</div>
                    </div>
                    <div className="column-3">
                        <div>
                            <Box display="flex" justifyContent="space-between">
                                {getSection("Email Address", email)}
                                {getSection("Phone number", phone)}
                                {getSection("Location", location)}
                            </Box>
                        </div>
                        <div>
                            <Box display="flex" justifyContent="space-between">
                            {getSection("Title", title)}
                            </Box>
                        </div>
                    </div>
               </Box>

            </Paper>
        )
}