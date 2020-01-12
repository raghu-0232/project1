import React from 'react';
import Paper from '@material-ui/core/Paper';
import './assign-component.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import EachClientComponent from './each-client-component';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import FaceIcon from '@material-ui/icons/Face';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

export default class AssignComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
            open: props.openDialogue,
			currentTab: "inhouse_members",
			selectedList : []
		}
	}

	handleChange = (e) => {
		
	}
	assignEmployees = (e) => {
		
	}
	handleClose = () => {
		this.setState({ open: true });
		this.props.onClose();
    };
    setTab = (type) => {
        this.setState({ currentTab: type });
    }
	render() {
		return (
			<div>
				<Dialog className="dialogue-container" open={this.props.openDialogue}>
				<Toolbar >
					<IconButton className="dialogue-close" edge="start" color="inherit" onClick={this.handleClose} aria-label="close">
					<CloseIcon />
					</IconButton>
				</Toolbar>
            
					<DialogContent>
						<List className="navbar-nav mr-auto">
							<Box display="flex" p={1} justifyContent="space-between" className="employee-nav-links" bgcolor="background.paper">
								<ListItem onClick={()=> {this.setTab("nearByEmployees")} }>Nearby Employees</ListItem>
								<ListItem onClick={()=> {this.setTab("assigned_members")} }>Previously Worked Employees</ListItem>
								<ListItem onClick={()=> {this.setTab("inhouse_members")} }>InHouseEmployees</ListItem>
								{/* <ListItem onClick={()=> {this.setTab("applied_members")} }>Applied Employees</ListItem> */}
							</Box>
						</List>
						<Box>
							{/* {
								this.props.assignData[this.state.currentTab].map( item => {
									return (
										<Chip className="each-notification" icon={<FaceIcon />} label="Deletable primary notification. for more details please contact in person" onDelete={this.handleDelete} color="" >
										<div> hello</div>
			
										</Chip>
									)
								} ) 
							} */}
                           {/* <Chip className="each-notification" icon={<FaceIcon />} label="Deletable primary notification. for more details please contact in person" onDelete={this.handleDelete} color="" >
								<div> hello</div>

								</Chip><Chip className="each-notification" icon={<FaceIcon />} label="Deletable primary notification. for more details please contact in person" onDelete={this.handleDelete} color="" >
								<div> hello</div>
							</Chip> */}
							<Box display="flex" className="all-employee-sections-container" justifyContent="space-between">
								<Box display="flex" className="each-employee-section" justifyContent="space-between">
									<FaceIcon />
									<div>
										{"name"}
										{"Role"}
									</div>
									<div>
									<Checkbox
										
										onChange={this.handleChange}
										value="primary"
										inputProps={{ 'aria-label': 'primary checkbox' }}
									/>
									</div>
								</Box>
								<Box display="flex" className="each-employee-section" justifyContent="space-between">
									<FaceIcon />
									<div>
										{"name"}
										{"Role"}
									</div>
									<div>
									<Checkbox
										onChange={this.handleChange}
										value="primary"
										inputProps={{ 'aria-label': 'primary checkbox' }}
									/>
									</div>
								</Box>
								<Box display="flex" className="each-employee-section" justifyContent="space-between">
									<FaceIcon />
									<div>
										{"name"}
										{"Role"}
									</div>
									<div>
									<Checkbox
										onChange={this.handleChange}
										value="primary"
										inputProps={{ 'aria-label': 'primary checkbox' }}
									/>
									</div>
								</Box>
								<Box display="flex" className="each-employee-section" justifyContent="space-between">
									<FaceIcon />
									<div>
										{"name"}
										{"Role"}
									</div>
									<div>
									<Checkbox
										onChange={this.handleChange}
										value="primary"
										inputProps={{ 'aria-label': 'primary checkbox' }}
									/>
									</div>
								</Box>
								<Box display="flex" className="each-employee-section" justifyContent="space-between">
									<FaceIcon />
									<div>
										{"name"}
										{"Role"}
									</div>
									<div>
									<Checkbox
										onChange={this.handleChange}
										value="primary"
										inputProps={{ 'aria-label': 'primary checkbox' }}
									/>
									</div>
								</Box>
							</Box>
						</Box>
						<Button variant="contained" className="company-view-actions-save" color="primary" onClick={this.assignEmployees}> Assign </Button>
                        <Button variant="contained" className="company-view-actions-cancel" onClick={this.handleClose}>  Cancel </Button>
					</DialogContent>
				</Dialog>
			</div>
		)
	}
}
