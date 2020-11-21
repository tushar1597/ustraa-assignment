import React, { Component, Fragment } from "react";
// import {  } from '../constants/constants';
// import axios from 'axios';
import './landing-page.css'
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Redirect, withRouter } from 'react-router';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Home from "../Home/home";
// import FullScreenLoader from '../components/loader/full-screen-loader';
// import Sidepanel from './sidepanel/sidepanel';
// import SignInPage from './sign-in-page';
// import {setIsLoggedIn, getSellerUserAPI} from '../actions/util.action';
// import { STORAGEFUNCTIONS } from '../utils/functions'; 

class LandingPage extends Component {
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
                <Header/>
                <div className="lp-container">
                <Switch>
                <Route exact path={`/`} component={Home} />
                {/* <Route exact path={`/create-product`} component={CreateProduct} /> */}
                </Switch>
                </div>
                <Footer/>
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
)(LandingPage));
