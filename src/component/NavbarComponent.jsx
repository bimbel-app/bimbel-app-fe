import { useState, useEffect, useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom"; // Import useLocation
import logo from "../assets/img/testimonial/logo.jpeg";
import { AuthContext } from "../context/auth.context";
import { navLinks } from "../data";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);
  const auth = useContext(AuthContext); 
  const location = useLocation(); // Gunakan useLocation


  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", changeBackgroundColor);
    };
  }, []);

  // Update navLinks based on authentication status
  const updatedNavLinks = navLinks.map((link) => {
    if (link.text === "Login") {
      return auth.isLoggedIn
        ? { ...link, path: "/login", text: "Login" }
        : link;
    }
    return link;
  });
  
  return (
    <div>
      <Navbar expand="md" className={changeColor ? "color-active" : ""}>
        <Container>
          {/* Logo Section */}
          <Navbar.Brand href="/" className="logo-container">
            <img src={logo} alt="Bimbel Privat Zinda Logo" className="logo" />
          </Navbar.Brand>

          {/* Navigation Section */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {updatedNavLinks.map((link) => (
                <div className="nav-link" key={link.id}>
                  <NavLink
                    to={link.path}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                    end
                  >
                    {link.text}
                  </NavLink>
                </div>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;