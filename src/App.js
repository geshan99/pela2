import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AbotUs from './pages/AboutUs';
import Booking from './pages/Booking';
import ContactUs from './pages/ContactUs';
import Pakages from './pages/Pakages';
import WhereToGo from './pages/WhereToGo';
import ALocation from './pages/ALocation';
import APackage from './pages/APackage';
import WhatToDo from './components/WhatToDo';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/About" element={<AbotUs></AbotUs>}></Route>
        <Route
          path="/packages/:packageName/booking"
          element={<Booking></Booking>}
        ></Route>
        <Route path="/Contact" element={<ContactUs></ContactUs>}></Route>
        <Route path="/packages" element={<Pakages></Pakages>}></Route>
        <Route path="/wheretogo" element={<WhereToGo></WhereToGo>}></Route>
        <Route
          path="/wheretogo/:locationName"
          element={<ALocation></ALocation>}
        ></Route>
        <Route
          path="/packages/:packageName"
          element={<APackage></APackage>}
        ></Route>
        <Route path="/whattodo" element={<WhatToDo></WhatToDo>}></Route>
      </Routes>
    </>
  );
}

export default App;
