import React, { Component, Fragment } from "react";
// import {  } from '../constants/constants';
// import axios from 'axios';
import './tabs.css'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Redirect, withRouter } from 'react-router';
import HorizontalScrollbar from "../Scrollbar/horizontal-scrollbar";
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
        console.log(this.props);       
    }
    componentDidMount() {
     
    }
    
    render() {
        return(
            <Fragment>
                <HorizontalScrollbar isHover={true}>
                <div className="scr-tb-container">
                    {
                        this.props.items ? this.props.items.map(({category_id,category_name,category_image},index)=>{
                            return(
                               <Button style={{backgroundImage: "url(" + category_image + ")"}} className={"tb-btn"} key={"scr-tb-btn-"+index} onClick={()=>this.props.onClick(category_id)}>
                                   <span className={this.props.active == category_id ? "act-tb" : "hide"}></span>
                                   {category_name}</Button>            
                            );
                        }) : null        
                    }
                    <button className={"tb-btn tb-vw-btn"} >
                        {"View All"}</button>
                </div>
                </HorizontalScrollbar>
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
