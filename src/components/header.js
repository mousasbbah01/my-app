import React from 'react';
import { Link } from 'react-router-dom';

const backgroundImages = 
  {
       "Home": "https://space-tourism-multi-page-solution.netlify.app/images/cdf3864ecbfdf20e8c3b.jpg",
  
       "Destination": "https://space-tourism-multi-page-solution.netlify.app/images/468b922c69bf5499b4bc.jpg",
 
      "Crew": "https://space-tourism-multi-page-solution.netlify.app/images/88a3c692fd34eb311e04.jpg",
  
       "About": "https://space-tourism-multi-page-solution.netlify.app/images/b7b589b3c0c5ef0811d4.jpg"
  }


class Header extends React.Component {
  render() {
    return (<><header>
      <img src='https://space-tourism-multi-page-solution.netlify.app/images/565f7f2c0534403f11b7.svg'></img>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/destination">Destination</Link>
        <Link to="/crew">Crew</Link>
        <Link to="/technology">About</Link>
      </nav>
    </header></>
    );
  }
}

export default Header;