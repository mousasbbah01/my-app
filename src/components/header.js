import React from 'react';
import { Link } from 'react-router-dom';




class Header extends React.Component {
  render() {
    return (<><header>
      <img alt='logo' src='https://space-tourism-multi-page-solution.netlify.app/images/565f7f2c0534403f11b7.svg'></img>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/destination">01 Destination</Link>
        <Link to="/crew">02 Crew</Link>
        <Link to="/technology">03 TECHNOLOGY</Link>
        <div></div>
      </nav>
    </header></>
    );
  }
}

export default Header;