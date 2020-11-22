import React, { Component, Fragment } from 'react';
import './scrollbar.css';
import { isMobile } from 'react-device-detect';

const SCROLL_BOX_MIN_HEIGHT = 20;
class VerticalScrollbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hovering: false,
            scrollBoxHeight: SCROLL_BOX_MIN_HEIGHT,
            scrollBoxTop: 0,
            lastScrollThumbPosition: 0,
            isDragging: false,
            isScrollable: true,
            isMobile: isMobile
        }
    }
    componentDidMount() {
        if(isMobile){
            this.setIsMobile(isMobile);
            return;
        }
        document.addEventListener("mousemove", this.handleDocumentMouseMove);
        document.addEventListener("mouseup", this.handleDocumentMouseUp);
        document.addEventListener("mouseleave", this.handleDocumentMouseUp);

        const scrollHostElement = this.scrollHostRef;
        if(!scrollHostElement){
            return;
        }
        const { clientHeight, scrollHeight } = scrollHostElement;
        if(clientHeight == scrollHeight){
            this.setState({
                isScrollable: false,
            })
            return;
        }
        const scrollThumbPercentage = clientHeight / scrollHeight;
        const scrollThumbHeight = Math.max(
            scrollThumbPercentage * clientHeight,
            SCROLL_BOX_MIN_HEIGHT
        );
        this.setscrollBoxHeight(scrollThumbHeight);
        scrollHostElement.addEventListener("scroll", this.handleScroll, true);
    }
    componentDidUpdate(prev_props,prev_state,snapshot) {
        if (this.props.children != prev_props.children) {
            const scrollHostElement = this.scrollHostRef;
            console.log(this.scrollHostRef);
            if(!scrollHostElement){
                return;
            }
            const { clientHeight, scrollHeight } = scrollHostElement;
            if(this.props.height && (parseInt(this.props.height) >= scrollHeight)){
                this.setScrollable(false);
                return;
            } else {
                this.setScrollable(true);
            } 
            const scrollThumbPercentage = clientHeight / scrollHeight;
            const scrollThumbHeight = Math.max(
                scrollThumbPercentage * clientHeight,
                SCROLL_BOX_MIN_HEIGHT
            );
            this.setscrollBoxHeight(scrollThumbHeight);
            scrollHostElement.addEventListener("scroll", this.handleScroll, true);
        }
    }
    setHovering = (val) => {
        this.setState({
            hovering: val,
        })
    }
    setScrollable = (val) => {
        this.setState({
            isScrollable: val,
        })
    }
    setIsMobile = (val) => {
        this.setState({
            isMobile: val,
        })
    }
    setscrollBoxHeight = (val) => {
        this.setState({
            scrollBoxHeight: val
        })
    }
    setscrollBoxTop = (val) => {
        this.setState({
            scrollBoxTop: val
        })
    }
    setScrollThumbPosition = (val) => {
        this.setState({
            lastScrollThumbPosition: val
        })
    }
    setDragging = (val) => {
        this.setState({
            isDragging: val
        })
    }
    handleMouseOver = () => {
        if (!this.state.hovering) {
            this.setHovering(true);
        }
    }
    handleMouseOut = () => {
        if (this.state.hovering) {
            this.setHovering(false);
        }
    }

    handleDocumentMouseUp = (e) => {
        if (this.state.isDragging) {
            e.preventDefault();
            this.setDragging(false);
        }
    }

    handleDocumentMouseMove = (e) => {
        if (this.state.isDragging) {
            e.preventDefault();
            e.stopPropagation();
            const scrollHostElement = this.scrollHostRef;
            const { scrollHeight, offsetHeight } = scrollHostElement;

            let deltaY = e.clientY - this.state.lastScrollThumbPosition;
            let percentage = deltaY * (scrollHeight / offsetHeight);

            this.setScrollThumbPosition(e.clientY);
            this.setscrollBoxTop(
                Math.min(
                    Math.max(0, this.state.scrollBoxTop + deltaY),
                    offsetHeight - this.state.scrollBoxHeight
                )
            );
            scrollHostElement.scrollTop = Math.min(
                scrollHostElement.scrollTop + percentage,
                scrollHeight - offsetHeight
            );

        }
    }
    handleScrollThumbMouseDown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setScrollThumbPosition(e.clientY);
        this.setDragging(true);
    }

    handleScroll = (e) => {
        if (!this.scrollHostRef) {
            return;
        }
        const scrollHostElement = this.scrollHostRef;
        const { scrollTop, scrollHeight, offsetHeight } = scrollHostElement;

        let newTop =
            (parseInt(scrollTop, 10) / parseInt(scrollHeight, 10)) * offsetHeight;
        // newTop = newTop + parseInt(scrollTop, 10);
        newTop = Math.min(newTop, offsetHeight - this.state.scrollBoxHeight);
        this.setscrollBoxTop(newTop);
    }


    render() {
        // alert(this.state.isScrollable);
        // console.log(isMobile);
            return (
                <div
                    className={(this.state.isScrollable ? "vr-scrollhost-container" : "vr-scrollhost-container") + " " + (this.props.isHover ? "is-hover" : "")}
                    onMouseOver={this.handleMouseOver}
                    onMouseOut={this.handleMouseOut}
                    style={{maxHeight: this.props.height ? this.props.height : "100%"}}
                >
                    <div
                        ref={(ref) => this.scrollHostRef = ref}
                        className={this.state.isScrollable ? ("vr-scrollhost " + (this.props.className ? this.props.className : "")) : ""}
                        style={{maxHeight: this.props.height ? this.props.height : "100%", height: this.props.height ? this.props.height : "100%"}}
                    >
                        {this.props.children}
                    </div>
                    <div className={!this.state.isMobile ? "vr-scroll-bar" : "hide"} style={{ opacity: this.state.hovering ? 1 : 1 }}>
                        <div
                            className={!this.state.isMobile ? "vr-scroll-thumb" : "hide"}
                            style={{ height: this.state.scrollBoxHeight, top: this.state.scrollBoxTop }}
                            onMouseDown={this.handleScrollThumbMouseDown}
                        />
                    </div>
                </div>
            );
        } 
}

export default VerticalScrollbar;