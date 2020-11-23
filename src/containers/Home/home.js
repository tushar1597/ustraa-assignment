import React, { Component, Fragment } from "react";
// import {  } from '../constants/constants';
// import axios from 'axios';
import './home.css'
import {getCategoriesAPI,setSelectedCategoryAPI} from "../../actions/product.action";
import { connect } from 'react-redux';
import { Switch, Redirect, withRouter } from 'react-router';
import Header from "../../components/Header/header";
import Button from '@material-ui/core/Button';
import Footer from "../../components/Footer/footer";
import ScrollableTab from "../../components/Tabs/scrollable-tab";
import ProductList from "./product-list";
import MenuItem from '@material-ui/core/MenuItem';
import CustomSelect from "../../components/Input/custom-select";

// import FullScreenLoader from '../components/loader/full-screen-loader';
// import Sidepanel from './sidepanel/sidepanel';
// import SignInPage from './sign-in-page';
// import {setIsLoggedIn, getSellerUserAPI} from '../actions/util.action';
// import { STORAGEFUNCTIONS } from '../utils/functions'; 

class Home extends Component {
    componentDidUpdate(prev_props){
        
    }
    componentDidMount() {
        this.props.getCategoriesAPI();
    }
    setSelectedCategory = (catg_id) => {
        this.props.setSelectedCategoryAPI(catg_id,this.props.product_map);
        // this.props.sc_ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        console.log(this.props.sc_ref);
        let scroll_div = this.props.sc_ref.current.scrollHostRef;
        // console.log(this.props.sc_ref.current.scrollHostRef.scrollIntoView());

        // window.scrollTo({ behavior: 'smooth', top: this.props.sc_ref.current.offsetTop })
        // console.log(this.props.sc_ref.current.scrollIntoView);
        // window.scrollTo(0,0);
        // let elem = document.getElementById('catg-tb-id');
        // elem.scrollIntoView();
        window.scrollTo({
            top: 50,
            behavior: "smooth",
        });
        let tab = document.getElementById("catg_tab_"+catg_id);
        // console.log(tab.getBoundingClientRect());
        // console.log(scroll_div.getBoundingClientRect());
        let tab_bounds = tab.getBoundingClientRect();
        let scroll_bounds = scroll_div.getBoundingClientRect();
        let ts = tab_bounds.left;
        // let te = tab_bounds.right;
        // let ss = scroll_bounds.left;
        // let se = scroll_bounds.right;
        let offset = 54;
        let sc_val;
        console.log(ts)
        // if(ts > ss + offset){
            sc_val = ts - offset;
            scroll_div.scrollBy({ left: sc_val, behavior:'smooth'});
        // }else if(ts < ss + offset){
            // sc_val = offset - ts;
            // scroll_div.scrollBy({ left: -sc_val, behavior:'smooth'});
        // }
    }
    handleCatgoryChange = (e) => {
        if(e.target && e.target.value){
            this.setSelectedCategory(e.target.value);
        }
    }
    
    render() {
        return(
            <Fragment>
                <div className="hm-container">
                <h1 className="mn-hdng">Our Products</h1>
                <div className="hm-tb-wr">
                <ScrollableTab active={this.props.sel_catg_id} items={this.props.catgs} onClick={this.setSelectedCategory}/>
                </div>
                <ProductList/>
                <div className="sel-sc">
                <CustomSelect  id={"catg-select-id"} classes={{ root: "cs-catg"}} value={this.props.sel_catg_id} data={[]} handleChange={(e) => this.handleCatgoryChange(e)}>
                {this.props.catgs && this.props.catgs.map ? this.props.catgs.map(({ category_id,category_name,category_image }, index) => {
                                                // if(index == 0){
                                                    // return (null);
                                                // } else if((this.props.sel_cc[cc] >= 0 && this.props.sel_cc[cc] == main_index) || (this.props.sel_cc[cc] == null || this.props.sel_cc[cc] == undefined)){
                                                   return(
                                                    <MenuItem name={category_name} value={category_id} key={"catg_id_" + index}>
                                                        <span className="shw-fr">Showing for</span>
                                                        <span className={"sel-nm"}>{category_name}</span>
                                                        <span className="chg-txt">Change</span>
                                                        </MenuItem>
                                                   );
                                                // } 
                                                // else {
                                                //     return (
                                                //         null
                                                //     );
                                                // }
                                            }) : null
                                            }
                </CustomSelect>
                <Button className="vw-btn">[+] View More</Button>
            </div>
            </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => (
    {
        catgs: state.product.catgs,
        sel_catg_id: state.product.sel_catg_id,
        product_map: state.product.product_map,
        sc_ref: state.product.sc_ref,
        // fs_loading : state.util.fs_loading,
        // is_lg_in : state.util.is_lg_in,
    })

const mapDispatchToProps = {
    // setIsLoggedIn,
    // getSellerUserAPI
    getCategoriesAPI,
    setSelectedCategoryAPI
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home));
