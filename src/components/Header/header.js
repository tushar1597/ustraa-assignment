import React, { Component, Fragment } from "react";
// import {  } from '../constants/constants';
// import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Switch, Redirect, withRouter } from 'react-router';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import UstraaLogo from '../../assets/images/ust-logo.png';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MessageIcon from '@material-ui/icons/Message';
// import FullScreenLoader from '../components/loader/full-screen-loader';
// import Sidepanel from './sidepanel/sidepanel';
// import SignInPage from './sign-in-page';
// import {setIsLoggedIn, getSellerUserAPI} from '../actions/util.action';
// import { STORAGEFUNCTIONS } from '../utils/functions'; 
import './header.css'
import  Drawer  from "../Drawer/drawer";
import HorizontalScrollbar from "../Scrollbar/horizontal-scrollbar";

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
                    <div className="ust-hrd-ct">
                    <Drawer button={<MenuIcon className="mn-icn"/>} classes={{button:'ust-hd-dr-btn'}}>
                    <div className="ust-dr-container">
                    <div className="dr-it">
                        <p className="dr-hd">Shop by Category</p>
                    </div>
                    </div>
                    </Drawer>
                    <div className="ust-logo">
                    <img src={UstraaLogo} className="ust-icn"></img>
                    </div>
                    <div className="srch-fm-sc">
                    <form className="srch-fm">
                    <SearchIcon className="srch-icn"/>
                    <input className="srch-inp" placeholder={"Search a Product"}/>
                    </form>
                    </div>
                    <div className="rgt-sec">
                        <Button className="rs-btn"><NotificationsIcon className="rs-icn"/></Button>
                        <Button className="rs-btn"><ShoppingCartIcon className="rs-icn"/></Button>
                        <Button className="rs-btn"><AccountCircleIcon className="rs-icn"/></Button>
                    </div>
                    </div> 
                    <div className="ust-hd-bt-sc">
                    <form className="srch-fm-mb">
                    <Button className="srch-inp-btn" placeholder={"Search a Product"}><SearchIcon className="srch-icn"/> Search a Product</Button>
                    </form>
                    <Button className="msg-btn"><MessageIcon className="msg-icn"/></Button>
                    </div>   
                </div>
                </div>
                <div className="shd-div"></div>
                <HorizontalScrollbar isHover={true} id="hr-sh-ust-bnr">
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
    
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header));
