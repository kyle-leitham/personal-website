import React from 'react';

import './Header.scss';

function Header() {
    return (
        <header>
            <nav>
                <input type="checkbox" id="check"/>
                <label for="check" className="checkbtn">
                    <i className="fas fa-bars"></i>
                </label>
                <ul>
                    <li><span className="active"><i className="fa fa-html5"></i><a className="active" href="#">Home.html</a></span></li>
                    <li><span><i className="fa fa-css3"></i><a href="#">About.css</a></span></li>
                    <li><span><i className="fab fa-js"></i><a href="#">Portfolio.js</a></span></li>
                    <li><span><label>{'{'}{'}'}</label><a href="#">ContactMe.json</a></span></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;