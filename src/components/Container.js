import React, { useState } from 'react';
import Nav from './Nav';
import Footer from'./Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function Container() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Profile') {
      return <Profile />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact')
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div >
      {/* We are passing the currentPage from state and the function to update it */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {/* <div className='main' > */}
        {renderPage()}
      {/* </div> */}
      <Footer currentPage={currentPage} handlePageChange={handlePageChange}/>
      
    </div>
  );
}