import React from 'react';
import WhereToGoUpper from '../components/WhereToGoUpper';
import sigiriya from '../assets/Home Page/Where to go/sigiriya.jpg';
import Footer from '../components/Footer';
import ALocationMiddle from '../components/ALocationMiddle';
import { useParams } from 'react-router-dom';
import WhereToGoDataMain from '../Data/locationData/WhereToGoDataMain';

function ALocation() {
  const { locationName } = useParams();
  const pageData = WhereToGoDataMain(locationName);
  console.log(pageData.topPhoto);
  return (
    <div>
      <WhereToGoUpper backPhoto={pageData.topPhoto} title={pageData.title} />
      <ALocationMiddle
        sliderImgArr={pageData.swipeImgArray}
        bgImg={pageData.bgPhoto}
        description={pageData.description}
        location={pageData.location}
      />
      <Footer />
    </div>
  );
}

export default ALocation;
