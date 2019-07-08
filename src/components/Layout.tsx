import React from 'react';
import PropTypes from 'prop-types';
import Header from './shared/Header';
import Footer from './shared/Footer';
import { SLayout } from './styles';

const Layout = ({ haveHead = false, haveFoot = false, children = <div/> }) => (
  <SLayout>
    {haveHead ? <Header /> : ''}
    {children}
    {haveFoot ? <Footer /> : ''}
  </SLayout>
);

Layout.propTypes = {
  haveHead: PropTypes.bool,
  haveFoot: PropTypes.bool,
  haveJoin: PropTypes.bool,
};

Layout.defaultProps = {
  haveHead: true,
  haveFoot: true,
  haveJoin: false,
};

export default Layout;
