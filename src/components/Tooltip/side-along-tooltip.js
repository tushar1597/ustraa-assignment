import React, { Component, Fragment } from "react";
import './tooltip.css'
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Redirect, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SideAlongTooltip extends Component {
    componentDidUpdate(prev_props){
        
    }
    componentDidMount() {
        window.addEventListener('scroll',(e)=>{
            let elem = document.querySelector('.nh-container');
            if(window.scrollY > 60 && elem){
                elem.style.width = "30px";
                elem.textContent = this.props.shortText;
            }else if(elem){
                elem.style.width = "60px";
                elem.textContent = this.props.longText;
            }
        })
    }
    
    render() {
        return(
            <Fragment>
        <Link className="nh-container" to={this.props.to}>{this.props.longText}</Link>
            </Fragment>
        );
    }
}

SideAlongTooltip.propTypes = {
    to: PropTypes.string.isRequired,
    longText: PropTypes.string.isRequired,
    shortText: PropTypes.string.isRequired,
}

export default SideAlongTooltip;