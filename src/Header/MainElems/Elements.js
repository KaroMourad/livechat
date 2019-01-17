import React, { Component } from 'react';
import Contact from "./Contact.js";
import Partners from "./Partners.js";
import WhySmartEvent from "./WhySmartEvent.js"
import "./Elements.css";
class Elements extends Component {
    render() {
        return (
            <div className="flex h-full float-right items-center mr-16">
                <ul className="menu">
                    <li><Contact/></li>
                    <li><Partners/></li>
                    <li><WhySmartEvent/></li>
                </ul>
            </div>
        );
    }
}

export default Elements;