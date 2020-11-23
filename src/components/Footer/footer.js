import React, { Component, Fragment } from "react";
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { Switch, Redirect, withRouter } from 'react-router';
import './footer.css'
import UstraaLogo from '../../assets/images/ust-logo.png';
import HappilyMarriedLogo from '../../assets/images/hm-logo.jpg';
import AddIcon from '@material-ui/icons/Add';
import { Link } from "react-router-dom";
import RemoveIcon from '@material-ui/icons/Remove';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import GooglePlay from '../../assets/images/google-play.png';
import AppleStore from '../../assets/images/apple-store.png';

class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {
            ft_tab : null
        }
    }
    componentDidUpdate(prev_props){
        
    }
    componentDidMount() {
      
    }
    setFooterTab = (val) => {
        if(this.state.ft_tab == val){
            this.setState({
                ft_tab : null
            })    
            return
        }
        this.setState({
            ft_tab : val
        })
    }
    
    render() {
        return(
            <Fragment>
            <div className="uts-ft-wr">
                <div className="uts-ft">
                <div className="ft-rw-1">
                    <img className="ft-logo" src={UstraaLogo}/>
                    <p className="rw-1-txt">
                    Ustraa is a range of grooming products, for men. Helping our Bros look their best since 2015.</p>
                </div>
                <div className="ft-rw-1-mb">
                    <p className="ft-dw-txt">Download our Mobile App</p>
                    <Button className="ft-ga-btn">Get app</Button>
                </div>
                <div className="ft-cnt-mb">
                    <p className="ft-sc-txt">Stay Connected</p>
                    <div className="ft-scl">
                        <Link to="" className="ft-scl-btn"><FacebookIcon className="ft-scl-icn"/></Link>
                        <Link to="" className="ft-scl-btn"><InstagramIcon className="ft-scl-icn"/></Link>
                        <Link to="" className="ft-scl-btn"><TwitterIcon  className="ft-scl-icn"/></Link>
                    </div>
                </div>
                <div className="ft-rw-2">
                    <div className="ft-row">
                        <div className="ft-col">
                            <div className={this.state.ft_tab == 1 ? "ft-col-ct" : "ft-col-ct ft-col-ct-cmp"}>
                                <p className="ft-col-hd" onClick={() => this.setFooterTab(1) }>
                                    Company {this.state.ft_tab != 1 ? <AddIcon className="ft-tb-icn"/> : <RemoveIcon className="ft-tb-icn"/>}
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
                        <div className="ft-col" value={2}>
                        <div className={this.state.ft_tab == 2 ? "ft-col-ct" : "ft-col-ct ft-col-ct-cmp"}>
                                <p className="ft-col-hd" onClick={() => this.setFooterTab(2)}>
                                    General Info {this.state.ft_tab != 2 ? <AddIcon className="ft-tb-icn"/> : <RemoveIcon className="ft-tb-icn"/>} 
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
                        <div className="ft-col ft-col-wb">
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
                        <div className="ft-col ft-col-wb">
                            <div className="ft-card">
                            <p className="ft-sc-txt">Stay Connected</p>
                    <div className="ft-scl">
                        <Link to="" className="ft-scl-btn"><FacebookIcon className="ft-scl-icn"/></Link>
                        <Link to="" className="ft-scl-btn"><InstagramIcon className="ft-scl-icn"/></Link>
                        <Link to="" className="ft-scl-btn"><TwitterIcon  className="ft-scl-icn"/></Link>
                    </div>
                    <p className="ft-sc-txt">Mobile Apps</p>
                    <div className="ft-scl">
                        <Button className="ft-app-btn"><img className="ft-app-img" src={GooglePlay}/></Button>
                        <Button className="ft-app-btn"><img className="ft-app-img" src={AppleStore}/></Button>
                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="ft-hm-sc">
                    <div className="ft-hm-sc-ct">
                        <div className="ft-hm-mb">
                            <p className="ft-hm-hd-mb">Order Related Enquires:</p>
                            <div className="ft-en-sc">
                                <Link to="/" className="ft-en-lk"><PhoneIcon className="ft-en-icn"/></Link>
                                <Link to="/" className="ft-en-lk"><MailIcon className="ft-en-icn"/></Link>
                            </div>
                            <p className="ft-hm-hd-mb">Trade Related Enquires:</p>
                            <p className="ft-hm-txt-mb">saurabh@happilymarried.com</p>
                        </div>
                        <p className="ft-hm-1">
                <span className="mb-hide">Happily Unmarried is India's coolest youth lifestyle brand. We are irreverent, desi, fun and forever young.
                <br/> </span>© {(new Date()).getFullYear()} Happily Unmarried. All Rights Reserved CIN/LLPIN: U51909DL2007PTC167121
                        </p>
                       <div className="ft-hm-2 mb-hide">
                           <p className="ft-hm-txt">Do checkout our women’s range</p>
                           <img className="hm-logo" src={HappilyMarriedLogo}/>
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

    })

const mapDispatchToProps = {
    
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(Footer));
