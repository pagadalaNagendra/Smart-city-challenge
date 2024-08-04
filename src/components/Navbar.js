import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-left">
        <img src="https://res.cloudinary.com/dxoq1rrh4/image/upload/v1722764889/image__2_-removebg-preview_hqmlmc.png" alt="Logo Left" />
      </div>
      <div className="title-center">
        <h1>Smart City Challenge</h1>
      </div>
      <div className="drop">
        <select className="dropdown-menu" onChange={(e) => window.location.href = e.target.value}>
          <option value="">Select an Team</option>
          <option value="/Eco-Sense">Eco-Sense</option>
          <option value="/Vayu">Vayu</option>
          <option value="/Radiance">Radiance</option>
          <option value="/Horus">Horus</option>
          <option value="/ANTAR_IOT">ANTAR_IOT</option>
          <option value="/Yantram_Electronics">Yantram_Electronics</option>
          <option value="/WareBOT">WareBOT</option>
          <option value="/DBR_Innovative_Tech_Team">DBR_Innovative_Tech_Team</option>
          <option value="/Hydrowverse">Hydrowverse</option>
          <option value="/Nudron">Nudron</option>
          <option value="/Scc_team">Scc_Team</option>
        </select>
      </div>
      <div className="home-icon">
        <Link to="/">
          <FontAwesomeIcon icon={faHome} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
