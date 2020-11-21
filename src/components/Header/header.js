import React, { Component, Fragment } from "react";
// import {  } from '../constants/constants';
// import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Switch, Redirect, withRouter } from 'react-router';
import MenuIcon from '@material-ui/icons/Menu';
// import FullScreenLoader from '../components/loader/full-screen-loader';
// import Sidepanel from './sidepanel/sidepanel';
// import SignInPage from './sign-in-page';
// import {setIsLoggedIn, getSellerUserAPI} from '../actions/util.action';
// import { STORAGEFUNCTIONS } from '../utils/functions'; 
import './header.css'

class Header extends Component {
    componentDidUpdate(prev_props){
        
    }
    componentDidMount() {
      
    }
    
    render() {
        return(
            <Fragment>
                <div className="ust-hdr-wr">
                <div className="ust-hdr">
                    <MenuIcon className="mn-icn"/>
                    <span className="ust-icn" className="ust-logo"></span>
                    <form className="srch-fm">
                    <input className="srch-inp" placeholder={"Search a Product"}/>
                    </form>
                    <div className="rgt-sec"></div>    
                </div>
                </div>
                <div className="shd-div"></div>
                <div className="ust-bnr">
                <div className="ust-row">
                    <div className="bnr-col"><Link className="bnr-lnk" to="/"><img className="bnr-img" src="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/icon_2_1_.png"/>Sale</Link></div>
                    <div className="bnr-col"><Link className="bnr-lnk" to="/"><img className="bnr-img" src="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/Growth-Oil.png"/>Beard</Link></div>
                    <div className="bnr-col"><Link className="bnr-lnk" to="/"><img className="bnr-img" src="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/vitaliser.png"/>Hair Growth</Link></div>
                    <div className="bnr-col"><Link className="bnr-lnk" to="/"><img className="bnr-img" src="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/Bath_Body.png"/>Soaps</Link></div>
                    <div className="bnr-col"><Link className="bnr-lnk" to="/"><img className="bnr-img" src="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/Face-Scrub---De-Tan-_New-Packging_.png"/>De Tan</Link></div>
                    <div className="bnr-col"><Link className="bnr-lnk" to="/"><img className="bnr-img" src="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/gift_3.png"/>Gift Packs</Link></div>
                    <div className="bnr-col"><Link className="bnr-lnk" to="/"><img className="bnr-img" src="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/FaceWash.png"/>Face Wash</Link></div>
                    <div className="bnr-col"><Link className="bnr-lnk" to="/"><img className="bnr-img" src="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/Lip_Balm_option2_1.png"/>Winter Care</Link></div>
                    <div className="bnr-col"><Link className="bnr-lnk" to="/"><img className="bnr-img" src="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/300/icon_2_1_.png"/>More Categories</Link></div>
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
)(Header));
