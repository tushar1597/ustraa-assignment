import React, { Component, Fragment } from "react";
import './tabs.css'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router';
import HorizontalScrollbar from "../Scrollbar/horizontal-scrollbar";
import { setScrollRef } from '../../actions/product.action';

class ScrollableTab extends Component {
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }
    componentDidUpdate(prev_props){

    }
    componentDidMount() {
        this.props.setScrollRef(this.myRef);
    }
    
    render() {
        return(
            <Fragment>
                <HorizontalScrollbar ref={this.myRef} isHover={true}>
                <div className={(!this.props.items || !this.props.items.length) ? "scr-tb-container scr-tb-container-ds" : "scr-tb-container"}>
                    {
                        this.props.items && this.props.items.length ? this.props.items.map(({category_id,category_name,category_image},index)=>{
                            return(
                               <Button id={'catg_tab_'+category_id} style={{backgroundImage: "url(" + category_image + ")"}} className={"tb-btn"} key={"scr-tb-btn-"+index} onClick={()=>this.props.onClick(category_id)}>
                                   <span className={this.props.active == category_id ? "act-tb" : "hide"}></span>
                                   {category_name}</Button>            
                            );
                        }) : <div className="tb-btn tb-btn-ss"></div>         
                    }
                    <button className={(!this.props.items || !this.props.items.length) ? "hide" : "tb-btn tb-vw-btn"} >
                        {"View All"}</button>
                </div>
                </HorizontalScrollbar>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => (
    {

    })

const mapDispatchToProps = {
    setScrollRef,
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(ScrollableTab));
