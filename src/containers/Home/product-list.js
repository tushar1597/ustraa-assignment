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
     console.log(this.props.prd_lst);   
    }
    componentDidMount() {
        
    }
    
    render() {
        return(
            <Fragment>
                <div className="prd-lst-container">
                    <div className="prd-lst-row">
                        {
                            this.props.prd_lst && this.props.prd_lst.map ? this.props.prd_lst.map(({name,price,rating,url,final_price,id,image_urls},index)=>{
                                return(
                                    <div className="prd-lst-col">
                            <div className="crd-sc-1">
                                <Link to="/" className="crd-lnk">
                                    <img className="crd-img" src={image_urls && image_urls.x300 ? image_urls.x300 : ""}/>
                                </Link>
                            </div>
                            <div className="crd-sc-2">
                                <p className="crd-nm">{name}</p>
                                <div className="crd-prc-sc">
                                    <p className="crd-prc">₹ {final_price}</p>
                                <p className="crd-prc-fk">₹ {price}</p>
                                </div>
                                <button className="crd-btn">Add to cart</button>
                            </div>
                         </div>
                                );
                            }) : null
                        }
                         
                         {/* <div className="prd-lst-col">

                         </div>
                         <div className="prd-lst-col">

                         </div>
                         <div className="prd-lst-col">

                         </div>
                         <div className="prd-lst-col">

                         </div> */}
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => (
    {
        prd_lst: state.product.prd_lst,
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
