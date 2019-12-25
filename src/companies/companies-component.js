


import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import CompanyButtonsComponent from './company-buttons-component';
import CompaniesList from './companies-list-component';
import {CompanyTableHeaders} from './company-table-headers';
import {data} from './company-table-headers';
import CompanyViewDialogue from './company-view-dialogue';
import   './companies-component.css'

export default class  CompaniesComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showCompanyView: false,
            selectedCompany: null
        }
    }
    viewCompany = (params) =>{
        this.setState({showCompanyView: true, selectedCompany: params})
    }
    onClose = () => {
        this.setState({showCompanyView: false, selectedCompany: null})
    }
    viewHeader = { headerName: "View", 
                        cellRendererFramework: (params)=> {
                            return <button onClick={ (e) => this.viewCompany(params) }> view </button>
                        },
                        minWidth:100,
                        width:100
                    }
    render() {
        return ( 
            <div className="companies-container">
            <div className="title"> 
                <span> Companies </span> 
                <span> Dashboard > Companies</span>
            </div>
            <div className="companies-list-container">
                <div>
                    <CompanyButtonsComponent />
                    <CompaniesList tableHeaders={[...CompanyTableHeaders, this.viewHeader ]} rowData={data.response} viewHandler={this.viewCompany}/>
                    {this.state.showCompanyView? <CompanyViewDialogue data={this.state.selectedCompany} onClose={this.onClose}/> : "" }
                </div>
            </div>
            </div>
        )

    }    
}