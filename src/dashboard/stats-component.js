import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import './stats-components.css'

const StyledStats = styled.ul`
    list-style:none;
    margin:0px;
    padding:0px;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    border-radius:9px;
    li{
        display:inline-block;
        position: relative;
        padding:20px;
        &.one{
            background:#ED3E43;
            color:#fff;
            border-radius:9px 0px 0px 9px;
            &:after{
                content: " ";
                position: absolute;
                display: block;
                width: 20%;
                height: 100%;
                top: 0;
                z-index: 1;
                background: #ED3E43;
                transform-origin: bottom left;
                transform: skew(-15deg, 0deg);
                right:0;
            }
        }
    }
`;
export default function Stats() {
    return( 
        <StyledStats>
            <li className="one">Legendary.<br />Stats</li>
            <li>Active Shifts<br /><strong>Stats</strong></li>
            <li>Active Shifts<br /><strong>Stats</strong></li>
            <li>Active Shifts<br /><strong>Stats</strong></li>
            <li>Active Shifts<br /><strong>Stats</strong></li>
            <li>Active Shifts<br /><strong>Stats</strong></li>
            <li>Active Shifts<br /><strong>Stats</strong></li>
        </StyledStats>
                // <Box display="flex" p={1} justifyContent="space-between" className="stats-container" bgcolor="background.paper">
                //     <div>
                //         <div>Legendary.</div>
                //         <div>Stats</div>
                //     </div>
                //     <div>
                //         <div>Total No. of Shifts</div>
                //         <div>54</div>
                //     </div>
                //     <div>
                //         <div>Active Shifts</div>
                //         <div>54</div>
                //     </div>
                //     <div>
                //         <div>Pending Shifts</div>
                //         <div>54</div>
                //     </div>
                //     <div>
                //         <div>Ongoing Shifts</div>
                //         <div>54</div>
                //     </div>
                //     <div>
                //         <div>Companies</div>
                //         <div>54</div>
                //     </div>
                //     <div>
                //         <div>Employees</div>
                //         <div>54</div>
                //     </div>
                // </Box>
        )
 }