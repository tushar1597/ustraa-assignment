import React, { Component, Fragment } from "react";
// import {  } from '../constants/constants';
// import axios from 'axios';
import { connect } from 'react-redux';
import { Switch, Redirect, withRouter } from 'react-router';
import './footer.css'
import { Link } from "react-router-dom";
// import FullScreenLoader from '../components/loader/full-screen-loader';
// import Sidepanel from './sidepanel/sidepanel';
// import SignInPage from './sign-in-page';
// import {setIsLoggedIn, getSellerUserAPI} from '../actions/util.action';
// import { STORAGEFUNCTIONS } from '../utils/functions'; 

class Footer extends Component {
    componentDidUpdate(prev_props){
        
    }
    componentDidMount() {
      
    }
    
    render() {
        return(
            <Fragment>
            <div className="uts-ft-wr">
                <div className="uts-ft">
                <div className="ft-rw-1">
                    <img className="ft-logo" src=""/>
                    <p className="rw-1-txt">
                    Ustraa is a range of grooming products, for men. Helping our Bros look their best since 2015.</p>
                </div>
                <div className="ft-rw-2">
                    <div className="ft-row">
                        <div className="ft-col">
                            <div className="ft-col-ct">
                                <p className="ft-col-hd">
                                    Company 
                                </p>
                                <Link to="/" className="ft-lnk">About Us</Link>
                                <Link to="/" className="ft-lnk">Brand Protection</Link>
                                <Link to="/" className="ft-lnk">Privacy Policy</Link>
                                <Link to="/" className="ft-lnk">Terms of use</Link>
                                <Link to="/" className="ft-lnk">sulphates and Parabens</Link>
                                <Link to="/" className="ft-lnk">Ustraa-Grooming tips</Link>
                                <Link to="/" className="ft-lnk">Intern with us</Link>
                                <Link to="/" className="ft-lnk">We are hiring</Link>
                            </div>
                        </div>
                        <div className="ft-col">
                        <div className="ft-col-ct">
                                <p className="ft-col-hd">
                                    General Info 
                                </p>
                                <Link to="/" className="ft-lnk">Subscription plans</Link>
                                <Link to="/" className="ft-lnk">Subscription cancellation policy</Link>
                                <Link to="/" className="ft-lnk">contact us</Link>
                                <Link to="/" className="ft-lnk">warranty</Link>
                                <Link to="/" className="ft-lnk">replacement and refund</Link>
                                <Link to="/" className="ft-lnk">FAQs</Link>
                                <Link to="/" className="ft-lnk">Next day delivery</Link>
                                <Link to="/" className="ft-lnk">shipping and handling</Link>
                            </div>
                        </div>
                        <div className="ft-col">
                        <div className="ft-col-ct">
                                <p className="ft-col-hd">
                                    Order Related Enquires
                                </p>
                                <p className="ft-txt">Email: help@ustraa.com</p>
                                <p className="ft-txt">Call: 18001036121 | 18004198407</p>
                            </div>
                            <div className="ft-col-ct">
                                <p className="ft-col-hd ft-col-hd-2">
                                    Trade Related Enquires
                                </p>
                                <p className="ft-txt">surabh@happilymarried.com</p>
                            </div>
                        </div>
                        <div className="ft-col">
                            <div className="ft-card">

                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="ft-hm-sc">
                    <div className="ft-hm-sc-ct">
                        <p className="ft-hm-1">
                Happily Unmarried is India's coolest youth lifestyle brand. We are irreverent, desi, fun and forever young.
                <br/> © {(new Date()).getFullYear()} Happily Unmarried. All Rights Reserved CIN/LLPIN: U51909DL2007PTC167121
                        </p>
                       <div className="ft-hm-2">
                           <p className="ft-hm-txt">Do checkout our women’s range</p>
                           <img className="hm-logo" src={""}/>
                       </div>
                    </div>
                </div>
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
    
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Footer));
