import React from 'react';
import PageTemplate from 'components/base/PageTemplate';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import IntroContainer from 'containers/landing/IntroContainer';

const Home = () => {
  return (
      <PageTemplate 
        header={<Header />}
        footer={<Footer />}
      >        
        <IntroContainer />       

      </PageTemplate>
  );
};

export default Home;

