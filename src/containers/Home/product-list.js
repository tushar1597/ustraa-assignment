import React, { Component, Fragment } from "react";
// import {  } from '../constants/constants';
// import axios from 'axios';
import './home.css'
import { connect } from 'react-redux';
import { Switch, Redirect, withRouter } from 'react-router';
import Header from "../../components/Header/header";
import { Link } from 'react-router-dom';
import Footer from "../../components/Footer/footer";
import ScrollableTab from "../../components/Tabs/scrollable-tab";

class ProductList extends Component {
    componentDidUpdate(prev_props){
        
    }
    componentDidMount() {
      
    }
    
    render() {
        return(
            <Fragment>
                <div className="prd-lst-container">
                    <div className="prd-lst-row">
                         <div className="prd-lst-col">
                            <div className="crd-sc-1">
                                <Link to="/" className="crd-lnk">
                                    <img className="crd-img" src={"https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/c/h/chrome_1__1.jpg"}/>
                                </Link>
                            </div>
                            <div className="crd-sc-2">
                                <p className="crd-nm">{"Ustraa Chrome - Lithium Powered Beard Trimmer"}</p>
                                <div className="crd-prc-sc">
                                    <p className="crd-prc">₹ 1999</p>
                                    <p className="crd-prc-fk">₹ 2499</p>
                                </div>
                                <button className="crd-btn">Add to cart</button>
                            </div>
                         </div>
                         <div className="prd-lst-col">

                         </div>
                         <div className="prd-lst-col">

                         </div>
                         <div className="prd-lst-col">

                         </div>
                         <div className="prd-lst-col">

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
    // setIsLoggedIn,
    // getSellerUserAPI
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductList));
