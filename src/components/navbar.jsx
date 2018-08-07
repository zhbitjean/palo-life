// import React, {Component} from 'react';
// import PropTypes from 'prop-types';


import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({totalCounters}) => {
    return (
        <div className="topnav">
            <a className="active" href="#home">Home</a>
            <a href="#teamandsupports">Team and Supporters</a>
            <a href="#about">About</a>
            <a href="#language">Language</a>
        </div>
        //     tags: ["Home", "About Us", "White Paper", "Team and Supporters", "Language"]
    );
};

NavBar.propTypes = {};

export default NavBar;

// class NavBar extends Component {
//     render() {
//         return (
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <a className="navbar-brand" href="#">Navbar</a>
//                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
//                         aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav">
//                         <li className="nav-item active">
//                             <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Features</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Pricing</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link disabled" href="#">Disabled</a>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//         );
//     }
// }

// NavBar.propTypes = {};
//
// export default NavBar;
