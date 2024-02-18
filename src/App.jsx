import { Routes, Route } from 'react-router-dom'

import Navbar from "./component/NavbarComponent";
import FooterComponent from "./component/FooterComponent";

import Homepages from "./pages/Homepages";
import Classpages from "./pages/Classpages";
import Faqpages from "./pages/Faqpages";
import login from "./pages/Login";
import Testimonialpages from "./pages/Testimonialpages";
import Syaratketentuanpages from "./pages/Syaratketentuanpages";
import Registrasi from "./pages/Registrasi";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Lainnyapages from "./pages/Lainnnyapages";
import DataSiswa from "./pages/DataSiswa";
import DataTentor from "./pages/DataTentor";
import Jadwal from "./pages/Jadwal";


function App() {
  return <div>
    <Navbar />
    <Routes>
      <Route path="/" Component={Homepages} />
      <Route path="/Class" Component={Classpages} />
      <Route path="/Faq" Component={Faqpages} />
      <Route path="/login" Component={login} />
      <Route path="/Testimonial" Component={Testimonialpages} />
      <Route path="/Syarat&Ketentuan" Component={Syaratketentuanpages} />
      <Route path="/DataSiswa" component={DataSiswa} />
      <Route path="/DataTentor" component={DataTentor} />
      <Route path="/Jadwal" component={Jadwal} />
      <Route path="/Registrasi" Component={Registrasi} />
      <Route path="/Contact" Component={Contact} />
      <Route path="/Profile" Component={Profile} />
      <Route path="/Lainnya" Component={Lainnyapages} />
    </Routes>


    <FooterComponent />
  </div>;
}

export default App;
