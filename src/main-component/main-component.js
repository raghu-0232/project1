import React from 'react';
import Paper from '@material-ui/core/Paper';
import MainRouts from '../router/router'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './main-component-styles.css';
import Navigation from '../navigation/navigation';
export default function MainComponent() {
    return (<div className="main-content">
                <Navigation/>
                <MainRouts />
            </div>
            )
}