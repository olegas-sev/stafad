import logoTrans from '../images/fulllogo_transparent.jpg';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Header = () => {
  return (
    <header class="stafad-header">
      <div class="stafad-logo">
        <a href="/">
          <img src={logoTrans} alt="Stafad Logo" />
        </a>
      </div>
      <nav class="stafad-nav">
        <ul>
          <li>
            <Link to="/adverts">Adverts</Link>
          </li>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <Link to="/addPost">
            <button class="post-ad-button">Post Ad</button>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
