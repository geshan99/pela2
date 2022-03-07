import React from 'react';
import WhereToGoUpper from '../components/WhereToGoUpper';
import surfboard from '../assets/A Page/surfboardScene.jpg';
import Footer from '../components/Footer';
import APackageMiddle from '../components/APackageMiddle';
import { useParams } from 'react-router-dom';
import APackageDataMain from '../Data/PackagesData/APackageDataMain';

function APackage() {
  const { packageName } = useParams();
  const pageData = APackageDataMain(packageName);
  return (
    <div>
      <WhereToGoUpper backPhoto={pageData.pagePhoto} title={pageData.title} />
      <APackageMiddle location={packageName} />
      <Footer />
    </div>
  );
}

export default APackage;
