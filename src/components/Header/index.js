import React from 'react';
import { Link } from 'react-router-dom';

import truckLogo from '../../assets/truck-logo.png';

export default function Header(props) {
  return (
    <header className="navbar-header">
      <div className="navbar-container red accent-2">
        <Link to="/">
          <div className="brand-logo">
            <img className="right" src={truckLogo} alt="Entregas Web App" />
            <div className="left white-text brand-name">Entregas
              <span className="hide-on-small-only"> WEB APP</span>
            </div>
          </div>
        </Link>
        {props.children}
      </div>
    </header>
  );
}