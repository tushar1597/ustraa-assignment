import React, { Component, Fragment } from "react";
import './landing-page.css'
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Redirect, withRouter } from 'react-router';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Home from "../Home/home";
import { Link } from 'react-router-dom';
import SideAlongTooltip from "../../components/Tooltip/side-along-tooltip";

class LandingPage extends Component {
    componentDidUpdate(prev_props){
        
    }
    componentDidMount() {
    
    }
    
    render() {
        return(
            <Fragment>
                <SideAlongTooltip longText={"help?"} shortText={"?"} to={"/"}/>
                <Header/>
                <div className="lp-container">
                <Switch>
                <Route exact path={`/`} component={Home} />
                </Switch>
                </div>
                <Footer/>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => (
    {

    })

const mapDispatchToProps = {

}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(LandingPage));
