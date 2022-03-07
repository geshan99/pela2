import Footer from '../components/Footer';
import WhereToGoUpper from '../components/WhereToGoUpper';
import fishing from '../assets/ContactUs/Stilt fishing.jpg';
import AboutUsMiddle from '../components/AboutUsMiddle';

function AboutUs() {
  return (
    <div>
      <WhereToGoUpper title={'About Us'} backPhoto={fishing} />
      <AboutUsMiddle />
      <Footer />
    </div>
  );
}

export default AboutUs;
