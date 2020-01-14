import { AgGridReact } from 'ag-grid-react';
import React, { Component } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import AssignComponent from './assign-component'

class ShiftsOrdersTableComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			columnDefs: props.tableHeaders,
			rowData: props.rowData,
			openDialogue: false,
			assignData: {}
		}
		// this.assignHeader = this.assignHeader.bind(this);
	}

    onClose = () => {
        this.setState({ openDialogue: false, assignData: {} })
	}
	
	assignHandler = (params) => {
		console.log("assign handler", params.data)
		this.setState({ openDialogue: true, assignData: params.data })
	}
	assignHeader = {
		headerName: "Assign",
		cellRendererFramework: (params) => {
			return <button onClick={(e) => this.assignHandler(params)}> Assign </button>
		},
		minWidth: 100,
		width: 100
	}
	render() {
		const { tableHeaders } = this.props;
		return (
			<div className="ag-theme-balham" style={{ height: '200px', width: '100%' }}>
				<AgGridReact
					columnDefs={[...tableHeaders,this.assignHeader]}
					rowData={this.props.rowData}
					pagination={true}
				>
				</AgGridReact>
				<AssignComponent onClose={this.onClose} assignData={this.state.assignData} openDialogue={this.state.openDialogue} />
			</div>
		);
	}
}

export default ShiftsOrdersTableComponent;