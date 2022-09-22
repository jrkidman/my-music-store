import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout(props) {
  const { children } = props;

  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        <content>{children}</content>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
