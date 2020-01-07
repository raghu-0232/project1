import React from 'react';
import Paper from '@material-ui/core/Paper';
import CompanyViewHeaderComponent from './company-view-header-component';
import CompanyViewBodyComponent from './company-view-body-component';
import './company-view-component.css';
import {getCompanyViewData} from './actions/company-actions'

import  { useState, useEffect } from 'react';

export default function CompanyViewComponent(props) {
    const [data, setData] = useState(0);
    useEffect(() => {
        // Update the document title using the browser API
        getCompanyViewData(props.data.id).then( viewData => {
            setData(viewData.data)
        });
    }, []);
    return( 
            <Paper className="company-view-container">
                <CompanyViewHeaderComponent data={data}/>
                <CompanyViewBodyComponent data={data}/>
            </Paper>
        )
}