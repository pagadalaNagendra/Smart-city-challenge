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
          <option value="/scc-dashboard/Eco-Sense">Eco-Sense</option>
          <option value="/scc-dashboard/Vayu">Vayu</option>
          <option value="/scc-dashboard/Radiance">Radiance</option>
          <option value="/scc-dashboard/Horus">Horus</option>
          <option value="/scc-dashboard/ANTAR_IOT">ANTAR_IOT</option>
          <option value="/scc-dashboard/Yantram_Electronics">Yantram_Electronics</option>
          <option value="/scc-dashboard/WareBOT">WareBOT</option>
          <option value="/scc-dashboard/DBR_Innovative_Tech_Team">DBR_Innovative_Tech_Team</option>
          <option value="/scc-dashboard/Hydrowverse">Hydrowverse</option>
          <option value="/scc-dashboard/Nudron">Nudron</option>
          <option value="/scc-dashboard/Scc_team">Scc_Team</option>
        </select>
      </div>
      <div className="home-icon">
        <Link to="/scc-dashboard">
          <FontAwesomeIcon icon={faHome} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
