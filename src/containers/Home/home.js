import React, { Component, Fragment } from "react";
import './home.css'
import { isMobile } from 'react-device-detect';
import {getCategoriesAPI,setSelectedCategoryAPI,setViewAll} from "../../actions/product.action";
import { connect } from 'react-redux';
import { Switch, Redirect, withRouter } from 'react-router';
import Button from '@material-ui/core/Button';
import ScrollableTab from "../../components/Tabs/scrollable-tab";
import ProductList from "./product-list";
import MenuItem from '@material-ui/core/MenuItem';
import CustomSelect from "../../components/Input/custom-select";

class Home extends Component {
    componentDidUpdate(prev_props){
        
    }
    componentDidMount() {
        this.props.getCategoriesAPI();
    }
    setSelectedCategory = (catg_id) => {
        this.props.setSelectedCategoryAPI(catg_id,this.props.product_map);
        let scroll_div = this.props.sc_ref.current.scrollHostRef;

        if(isMobile){
            window.scrollTo({
                top: 50,
                behavior: "smooth",
            });
            let tab = document.getElementById("catg_tab_"+catg_id);
            let tab_bounds = tab.getBoundingClientRect();
            let scroll_bounds = scroll_div.getBoundingClientRect();
            let ts = tab_bounds.left;
            let offset = 54;
            let sc_val;
            sc_val = ts - offset;
            scroll_div.scrollBy({ left: sc_val, behavior:'smooth'});     
        }
       
    }
    handleCatgoryChange = (e) => {
        if(e.target && e.target.value){
            this.setSelectedCategory(e.target.value);
        }
    }
    toggleView = () => {
        this.props.setViewAll(!this.props.vw_all);
        if(isMobile){
            let elem = document.querySelector('.prd-lst-col');
            if(elem && this.props.prd_lst && this.props.prd_lst.length && !this.props.vw_all){
                let to_scroll = (elem.getBoundingClientRect().height) * (this.props.prd_lst.length - this.props.to_shw_lgth);
                window.scrollBy({top:to_scroll, behavior:'smooth'});
            } else if(this.props.vw_all){
                this.setSelectedCategory(this.props.sel_catg_id);        
            }
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
                <CustomSelect  id={"catg-select-id"} classes={{ root: this.props.prd_lst && this.props.prd_lst.length > this.props.to_shw_lgth ? "cs-catg" : "cs-catg cs-catg-fl"}} value={this.props.sel_catg_id} data={[]} handleChange={(e) => this.handleCatgoryChange(e)}>
                {this.props.catgs && this.props.catgs.map ? this.props.catgs.map(({ category_id,category_name,category_image }, index) => {
                                                   return(
                                                    <MenuItem name={category_name} value={category_id} key={"catg_id_" + index}>
                                                        <span className="shw-fr">Showing for</span>
                                                        <span className={"sel-nm"}>{category_name}</span>
                                                        <span className="chg-txt">Change</span>
                                                        </MenuItem>
                                                   );                                            
                                            }) : null
                                            }
                </CustomSelect>
                <Button onClick={this.toggleView} className={this.props.prd_lst && this.props.prd_lst.length > this.props.to_shw_lgth ? "vw-btn" : "hide"}>
                    {!this.props.vw_all ?  "[+] View More" : "[-] View Less"}
                </Button>
            </div>
            <Button onClick={this.toggleView} className={this.props.prd_lst && this.props.prd_lst.length > this.props.to_shw_lgth ? "vw-btn-wb" : "hide"}>
            {!this.props.vw_all ?  "View More" : "View Less"}
            </Button>
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
        to_shw_lgth: state.product.to_shw_lgth,
        prd_lst: state.product.prd_lst,
        vw_all: state.product.vw_all,
    })

const mapDispatchToProps = {
    getCategoriesAPI,
    setViewAll,
    setSelectedCategoryAPI
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home));
