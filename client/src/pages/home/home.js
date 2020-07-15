import React from 'react';
import { withRouter } from 'react-router-dom';
import { motion } from 'framer-motion';
import MapContainer from './map/MapContainer';
import Sidebar from './sidebar';
import PageHeading from '../../components/page-heading/PageHeading';
import { variants, transitions, pageStyle } from '../motion-settings';
import './home.css';

const Home = () => {
  const heading = 'Interactive Contact Tracing Map';
  const subheading = <p>Helping Canadians stay safe.</p>;
  const body =
    'See where individuals who have tested positive for COVID-19 have been recently by interacting with the map below.';
  const pageHeadingData = { heading, subheading, body };

  return (
    <motion.div
      exit='out'
      animate='in'
      initial='initial'
      variants={variants}
      transition={transitions}
      style={pageStyle}
    >
      <div>
        <PageHeading data={pageHeadingData} />
      </div>
      <div className="Home-main-body">
        <Sidebar className="Home-main-body-sidebar" />
        <div style={{width: `${window.innerWidth - (window.innerWidth)*0.3}px`}}>
          <MapContainer className="Home-main-body-map" />
        </div>
      </div>
    </motion.div>
  );
};

export default withRouter(Home);