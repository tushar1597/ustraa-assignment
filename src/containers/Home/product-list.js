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
import StarRateIcon from '@material-ui/icons/StarRate';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Button from '@material-ui/core/Button';
import {setToShowLength} from '../../actions/product.action';

class ProductList extends Component {
    componentDidUpdate(prev_props){
     console.log(this.props.prd_lst);   
    }
    componentDidMount() {
        if(window.innerWidth > 500 && window.innerWidth < 799){
            this.props.setToShowLength(2);
        }
    }
    
    render() {
        return(
            <Fragment>
                <div className="prd-lst-container">
                    <div className={this.props.vw_all ? "prd-lst-row" : "prd-lst-row prd-lst-row-fl"}>
                        {
                            !this.props.pr_loading && this.props.prd_lst && this.props.prd_lst.length && this.props.prd_lst.map ? this.props.prd_lst.map(({name,price,rating,url,final_price,id,image_urls,is_in_stock,weight,weight_unit,how_to_use_video},index)=>{
                                if(!this.props.vw_all && index > this.props.to_shw_lgth -1){
                                    return;
                                }
                                return(
                                    <div className="prd-lst-col">
                                        <div className={rating ? "str-sc mb" : "hide"}>
                                        <p className="str-rtg">{rating}</p><StarRateIcon className="str-icn"/>
                                        </div>
                            <div className="crd-sc-1">
                            <div className={rating ? "str-sc wb" : "hide"}>
                                        <p className="str-rtg">{rating}</p><StarRateIcon className="str-icn"/>
                                        </div>
                            <div className={how_to_use_video && how_to_use_video.video_url ? "htu-sc wb" : 'hide'}>
                                            <YouTubeIcon className="htu-icn"/><p className="htu-txt">How to use</p>
                                        </div>
                                <Link to="/" className="crd-lnk">
                                    <img className="crd-img" src={image_urls && image_urls.x300 ? image_urls.x300 : ""}/>
                                </Link>
                            </div>
                            <div className="crd-sc-2">
                            <div className={how_to_use_video && how_to_use_video.video_url ? "htu-sc mb" : 'hide'}>
                                            <YouTubeIcon className="htu-icn"/><p className="htu-txt">How to use</p>
                                        </div>
                                <p className="crd-nm">{name}</p>
                                <div className="crd-prc-sc">
                                    <p className="crd-prc">₹ {final_price}</p>
                                <p className="crd-prc-fk">₹ {price}</p>
                                <p className="crd-wt">{'(' + weight + ' ' + weight_unit+ ')'}</p>
                                </div>
                                <Button className={is_in_stock ? "crd-btn" : "crd-btn crd-btn-ds"}>{is_in_stock ? "Add to cart" : "Out of Stock"}</Button>
                            </div>
                         </div>
                                );
                            }) :
                            [1,2,3].map(({},index)=>{
                                if(index > this.props.to_shw_lgth -1){
                                    return;
                                }
                                return(<div className="prd-lst-col">
                          
                                <div className="crd-sc-1 crd-sc-1-ss">
                
                                </div>
                                <div className="crd-sc-2">
                                    <div className="crd-dm-1"></div>
                                    <div className="crd-dm-2"></div>
                                </div>
                             </div>)
                            })                                
            
                        }
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => (
    {
        prd_lst: state.product.prd_lst,
        to_shw_lgth: state.product.to_shw_lgth,
        vw_all: state.product.vw_all,
        pr_loading: state.product.pr_loading,
        // fs_loading : state.util.fs_loading,
        // is_lg_in : state.util.is_lg_in,
    })

const mapDispatchToProps = {
    // setIsLoggedIn,
    // getSellerUserAPI
    setToShowLength,
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductList));
