import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ConferenceInfo from '../components/ConferenceInfo';
import Gallery from '../components/Gallery';
import AboutConference from '../components/AboutConference';
import HomepageOtherDetails from '../components/HomepageOtherDetails';
import Venue from '../components/Venue';
import Sponsors from '../components/Sponsors';
import CMT from '../components/CMT';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ConferenceInfo />
      <AboutSection />
      <Gallery />
      <AboutConference />
      <HomepageOtherDetails />
      <Venue />
      <Sponsors />
      <CMT />
      <Footer />
    </>
  );
};

export default Home;