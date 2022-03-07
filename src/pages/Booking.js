import Footer from '../components/Footer';
import WhereToGoUpper from '../components/WhereToGoUpper';
import surfboard from '../assets/A Page/surfboardScene.jpg';
import BookongPageMiddle from '../components/BookingPageMiddle';
import { useParams } from 'react-router-dom';
import APackageDataMain from '../Data/PackagesData/APackageDataMain';

function Booking() {
  const { packageName } = useParams();
  const pageData = APackageDataMain(packageName);
  return (
    <div>
      <WhereToGoUpper backPhoto={pageData.pagePhoto} title={pageData.title} />
      <BookongPageMiddle location={packageName} />
      <Footer />
    </div>
  );
}

export default Booking;
