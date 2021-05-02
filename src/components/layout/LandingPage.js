import React from 'react';
// import NavbarContainer from './Navbar/NavbarContainer';
import ImageSlider from './ImageSlider';
import HomePageProductContainer from './../HomePageProduct/HomePageProductContainer';
// import Footer from './Footer';

function LandingPage(props) {
  document.title = "Online site for shopping."
  return (
    <React.Fragment>
      {/* <NavbarContainer {...props} /> */}
      <div className="container-fluid px-0">
        <ImageSlider />
        <HomePageProductContainer />
        {/* <Footer {...props}/> */}
      </div>
    </React.Fragment>
  )
}

export default LandingPage;