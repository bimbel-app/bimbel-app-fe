import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import HeroImage from "../assets/img/buku.png";
import { kelasTerbaru } from "../data/index";
import { testimonial } from "../data/index";
import FaqComponent from "../component/FaqComponent";

const HomePages = () => {

  let navigate = useNavigate();

  return (
    <div className="homepage">
      <header className="w-100 min-vh-50 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-3 ">
            <Col lg="1"></Col> {/* Kolom kosong untuk menggeser isi */}
            <Col lg="5">
              <h1 className="mb-5 animate__animated animate__fadeInUp animate__delay-1s">
                Bimbingan Belajar <br /> <span className="fw-bold py-2 mb-2">Private </span> <br />di Banyumas!
              </h1>
              <ButtonGroup />
            </Col>
            {/* <Col ></Col> */}
            <Col lg="5" className="pt-lg-0 pt-5 pl-4 mx-4">
              <img src={HeroImage} alt="Hero" className="animate__animated animate__fadeInUp" />
            </Col>
          </Row>
        </Container>
      </header>
      <KelasSection />
      <FaqComponent />
      <TestimonialComponent />
    </div>
  );
};

const ButtonGroup = () => {
  let navigate = useNavigate();

  const [contactInfo, setContactInfo] = useState({
    phoneNumber: '62878-3962-2557',
  });

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log('Informasi Kontak:', contactInfo);

    window.location.href = `https://wa.me/${contactInfo.phoneNumber.replace(/\D/g, '')}`;
  };

  return (
    <div>
      <Button className="btn btn-primary btn-lg btn-block rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s" onClick={() => handleSubmit()}>Daftar Sekarang</Button>
      {/* <Button className="btn btn-primary btn-lg btn-block rounded-1 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s" onClick={() => navigate("/Contact")}>Hubungi kami</Button> */}
    </div>
  );
};

const KelasSection = () => {
  let navigate = useNavigate();

  return (
    <div className="kelas w-100 min-vh-100">
      <Container className="mb-5">
        <Col>
          <h1 className="text-center fw-bold mb-5 animate__animated animate__fadeInUp animate__delay-1s">Mata Pelajaran</h1>
        </Col>
        <Row>
          {kelasTerbaru.map((kelas) => (
            <KelasCard key={kelas.id} kelas={kelas} />
          ))}
        </Row>
        <ButtonLihatDetail />
      </Container>
    </div>
  );
};

const KelasCard = ({ kelas }) => {
  return (
    <Col className="shadow rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={kelas.delay}>
      <img src={kelas.image} alt="Kelas" className="w-100 mb-5 rounded-top" />
      <h5 className="text-center mb-5 px-3">{kelas.title}</h5>
    </Col>
  );
};

const ButtonLihatDetail = () => {
  let navigate = useNavigate();

  return (
    <Row>
      <Col className="text-center animate__animated animate__fadeInUp animate__delay-1s">
        <Button className="btn btn-primary btn-lg btn-block" data-aos="fade-Up" data-aos-duration="1000" onClick={() => navigate("/Class")}>
          Lihat Detail<i className="fa-solid fa-chevron-right ms-1"></i>
        </Button>
      </Col>
    </Row>
  );
};

const TestimonialComponent = () => {

  let navigate = useNavigate();

  const navigateToTestimonial = () => {
    navigate("/testimonial");
  };

  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">Bimbel Zinda</h3>
            <a
              href="https://www.google.com/maps?q=Blok+B-17+Jalan+Raya+Banyumas+-+Kalibagor+No+9+Dusun+IV+Kalibagor,+Kaliori,+Kec+Kalibagor,+Kab+Banyumas,+Prov+Jawa+Tengah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <p className="desc">
                Blok B-17 Jalan Raya Banyumas - Kalibagor No 9 Dusun IV Kalibagor, Kaliori, Kec Kalibagor, Kab Banyumas, Prov Jawa Tengah
              </p>
            </a>
            <div className="no mb-1 mt-4">
              <a href="https://wa.me/6287839622557" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">0878-3962-2557</p>
              </a>
            </div>
            <div className="email">
              <a href="mailto:faizalfahmiazzindani@gmail.com" className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">faizalfahmiazzindani@gmail.com</p>
              </a>
            </div>
          </Col>
        </Row>
        <Row>
        </Row>
      </Container>
    </div>
  );
};

export default HomePages;