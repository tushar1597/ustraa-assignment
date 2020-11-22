import React, { Component, Fragment } from 'react';
import './scrollbar.css';
import { isMobile } from 'react-device-detect';

const SCROLL_BOX_MIN_WIDTH = 20;
class HorizontalScrollbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hovering: false,
            scrollBoxWidth: SCROLL_BOX_MIN_WIDTH,
            scrollBoxLeft: 0,
            lastScrollThumbPosition: 0,
            isDragging: false,
            isScrollable: true,
            isMobile: isMobile
        }
    }
    componentDidMount() {
        if(isMobile){
            this.setScrollable(false);
            return;
        }
        document.addEventListener("mousemove", this.handleDocumentMouseMove);
        document.addEventListener("mouseup", this.handleDocumentMouseUp);
        document.addEventListener("mouseleave", this.handleDocumentMouseUp);

        const scrollHostElement = this.scrollHostRef;
        if(!scrollHostElement){
            return;
        }
        const { clientWidth, scrollWidth } = scrollHostElement;
        if(clientWidth == scrollWidth){
            this.setState({
                isScrollable: false,
            })
            return;
        }
        const scrollThumbPercentage = clientWidth / scrollWidth;
        const scrollThumbWidth = Math.max(
            scrollThumbPercentage * clientWidth,
            SCROLL_BOX_MIN_WIDTH
        );
        this.setScrollBoxWidth(scrollThumbWidth);
        scrollHostElement.addEventListener("scroll", this.handleScroll, true);
    }
    componentDidUpdate(prev_props,prev_state,snapshot) {
        if (this.props.children != prev_props.children) {
            const scrollHostElement = this.scrollHostRef;
            if(!scrollHostElement){
                return;
            }
            const { clientWidth, scrollWidth } = scrollHostElement;
            if(clientWidth == scrollWidth){
                this.setScrollable(false);
                return;
            } else {
                this.setScrollable(true);
            }
            const scrollThumbPercentage = clientWidth / scrollWidth;
            const scrollThumbWidth = Math.max(
                scrollThumbPercentage * clientWidth,
                SCROLL_BOX_MIN_WIDTH
            );
            this.setScrollBoxWidth(scrollThumbWidth);
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
    setScrollBoxWidth = (val) => {
        this.setState({
            scrollBoxWidth: val
        })
    }
    setScrollBoxLeft = (val) => {
        this.setState({
            scrollBoxLeft: val
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
            const { scrollWidth, offsetWidth } = scrollHostElement;

            let deltaX = e.clientX - this.state.lastScrollThumbPosition;
            let percentage = deltaX * (scrollWidth / offsetWidth);

            this.setScrollThumbPosition(e.clientX);
            this.setScrollBoxLeft(
                Math.min(
                    Math.max(0, this.state.scrollBoxLeft + deltaX),
                    offsetWidth - this.state.scrollBoxWidth
                )
            );
            scrollHostElement.scrollLeft = Math.min(
                scrollHostElement.scrollLeft + percentage,
                scrollWidth - offsetWidth
            );

        }
    }
    handleScrollThumbMouseDown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setScrollThumbPosition(e.clientX);
        this.setDragging(true);
    }

    handleScroll = (e) => {
        if (!this.scrollHostRef) {
            return;
        }
        const scrollHostElement = this.scrollHostRef;
        const { scrollLeft, scrollWidth, offsetWidth } = scrollHostElement;

        let newLeft =
            (parseInt(scrollLeft, 10) / parseInt(scrollWidth, 10)) * offsetWidth;
        // newTop = newTop + parseInt(scrollTop, 10);
        newLeft = Math.min(newLeft, offsetWidth - this.state.scrollBoxWidth);
        this.setScrollBoxLeft(newLeft);
    }


    render() {
            return (
                <div
                    className={(this.state.isScrollable ? "hr-scrollhost-container" : "hr-scrollhost-container") + " " + (this.props.isHover ? "is-hover" : "")}
                    id={this.props.id ? this.props.id : null}
                    onMouseOver={this.handleMouseOver}
                    onMouseOut={this.handleMouseOut}
                >
                    <div
                        ref={(ref) => this.scrollHostRef = ref}
                        className={this.state.isScrollable ? ("hr-scrollhost " + (this.props.className ? this.props.className : "")) : "hr-scrollhost"}
                        id={this.props.scrollId ? this.props.scrollId : null}
                    >
                        {this.props.children}
                    </div>
                    <div className={this.state.isScrollable ? "hr-scroll-bar" : "hide"} style={{ opacity: this.state.hovering ? 1 : 1 }}>
                        <div
                            className={this.state.isScrollable ? "hr-scroll-thumb" : "hide"}
                            style={{ width: this.state.scrollBoxWidth, left: this.state.scrollBoxLeft }}
                            onMouseDown={this.handleScrollThumbMouseDown}
                        />
                    </div>
                </div>
            );
        } 
}

export default HorizontalScrollbar;