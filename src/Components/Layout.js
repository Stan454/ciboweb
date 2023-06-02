import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Notifications from './Notifications';

function Layout(props) {
  return (
    <div>
      <Navbar />
      <main>
        {props.children}
      </main>
      <Notifications/>
      <Footer />
    </div>
  );
}

export default Layout