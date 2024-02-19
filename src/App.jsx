import { Routes, Route } from "react-router-dom";

import Navbar from "./component/NavbarComponent";
import FooterComponent from "./component/FooterComponent";

import Homepages from "./pages/Homepages";
import Classpages from "./pages/Classpages";
import Faqpages from "./pages/Faqpages";
import login from "./pages/Login";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Lainnyapages from "./pages/Lainnnyapages";
import Registrasi from "./pages/Registrasi";
import { AuthProvider } from "./context/auth.context.jsx";


function App() {
  return (
  <AuthProvider>
    <div>
    <Navbar />
    <Routes>
      <Route path="/" Component={Homepages} />
      <Route path="/Class" Component={Classpages} />
      <Route path="/Faq" Component={Faqpages} />
      <Route path="/login" Component={login} />
      <Route path="/Contact" Component={Contact} />
      <Route path="/Profile" Component={Profile} />
      <Route path="/Registrasi" Component={Registrasi} />
      <Route path="/Lainnya" Component={Lainnyapages} />
    </Routes>

    <FooterComponent />
  </div>;
  </AuthProvider>
  );
}

export default App;
