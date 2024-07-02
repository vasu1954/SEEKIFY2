import React from 'react';

import CategoriesSection from '../components/CategoriesSection';
import MainBanner from '../components/MainBanner';
import TopCompany from '../components/TopCompany';
import BenefitsSection from '../components/BenefitsSection';
import Faqs from '../components/Faqs';


const LandingPage = () => {
  return (
    <div>

      <MainBanner />
      <div className="bg-white p-4 rounded">
        <CategoriesSection />
        <TopCompany/>
        <BenefitsSection/>
        <Faqs/>
      </div> 
 
    </div>
  );
};
export default LandingPage;
