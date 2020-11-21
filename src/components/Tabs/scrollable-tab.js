import React, { Component, Fragment } from "react";
// import {  } from '../constants/constants';
// import axios from 'axios';
import './tabs.css'
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Redirect, withRouter } from 'react-router';
// import FullScreenLoader from '../components/loader/full-screen-loader';
// import Sidepanel from './sidepanel/sidepanel';
// import SignInPage from './sign-in-page';
// import {setIsLoggedIn, getSellerUserAPI} from '../actions/util.action';
// import { STORAGEFUNCTIONS } from '../utils/functions'; 

const TABS = [
    {text: "sale"},
    {text: "essentials"},
    {text: "gifts for men"},
    {text: "cologne"},
    {text: "trimmer"},
    {text: "face & body"},
    {text: "beard"},
    {text: "hair"},
    {text: "skin"},
]

class ScrollableTab extends Component {
    componentDidUpdate(prev_props){
        
    }
    componentDidMount() {
        // let at = STORAGEFUNCTIONS.getAt();
        // let st = STORAGEFUNCTIONS.getSt();
        // if(at && st){
        //     this.props.getSellerUserAPI(st);
        //     // this.props.setIsLoggedIn(true);
        // } else {
        //     this.props.setIsLoggedIn(false);
        // }
    }
    
    render() {
        return(
            <Fragment>
                <div className="scr-tb-container">
                    {
                        TABS.map(({text},index)=>{
                            return(
                               <button className="tb-btn" key={"scr-tb-btn-"+index}>{text}</button>            
                            );
                        })         
                    }
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => (
    {
        // fs_loading : state.util.fs_loading,
        // is_lg_in : state.util.is_lg_in,
    })

const mapDispatchToProps = {
    // setIsLoggedIn,
    // getSellerUserAPI
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(ScrollableTab));
