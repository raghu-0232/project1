import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import './stats-components.css'
export default function Stats() {
    return( 
                <Box display="flex" p={1} justifyContent="space-between" className="stats-container" bgcolor="background.paper">
                    <div>
                        <div>Legendary.</div>
                        <div>Stats</div>
                    </div>
                    <div>
                        <div>Total No. of Shifts</div>
                        <div>54</div>
                    </div>
                    <div>
                        <div>Active Shifts</div>
                        <div>54</div>
                    </div>
                    <div>
                        <div>Pending Shifts</div>
                        <div>54</div>
                    </div>
                    <div>
                        <div>Ongoing Shifts</div>
                        <div>54</div>
                    </div>
                    <div>
                        <div>Companies</div>
                        <div>54</div>
                    </div>
                    <div>
                        <div>Employees</div>
                        <div>54</div>
                    </div>
                </Box>
        )
 }