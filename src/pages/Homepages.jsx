import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/buku.png";

import { kelasTerbaru, dataSwiper } from "../data/index";
import { useNavigate } from "react-router-dom";
import FaqComponent from "../component/FaqComponent";
import 'swiper/css';
import 'swiper/css/pagination';
const HomePages = () => {
  let navigate = useNavigate();

  // Fungsi untuk mengecek panjang teks testimonial
  const checkTestimonialLength = (testimonial) => {
    return testimonial.length <= 50;
  };

  // Fungsi untuk menavigasi ke halaman testimonial
  const navigateToTestimonial = () => {
    navigate("/Testimonial");
  };

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
              <h1 className="mb-5 animate__animated animate__fadeInUp animate__delay-1s">
                Bimbingan Belajar <br /> <span>Private </span> <br />di Banyumas!
              </h1>
              <button className="btn btn-primary btn-lg btn-block rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s" onClick={() => navigate("/Registrasi")}>Daftar Sekarang</button>
              <button className="btn btn-primary btn-lg btn-block rounded-1 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s" onClick={() => navigate("/Contact")}>Hubungi kami</button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={HeroImage} alt="../assets/img/buku.png" className="animate__animated animate__fadeInUp" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Col>
            <h1 className="text-center fw-bold mb-5 animate__animated animate__fadeInUp animate__delay-1s">Mata Pelajaran</h1>
          </Col>
          <Row>
            {kelasTerbaru.map((kelas) => (
              <Col key={kelas.id} className="shadow rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={kelas.delay}>
                <img src={kelas.image} alt="unsplash.com" className="w-100 mb-5 rounded-top" />
                <h5 className="text-center mb-5 px-3">{kelas.title}</h5>
                <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                </div>
              </Col>
            ))}
          </Row>
          <Row>
            <Col className="text-center animate__animated animate__fadeInUp animate__delay-1s">
              <button className="btn btn-primary btn-lg btn-block" data-aos="fade-Up" data-aos-duration="1000" onClick={() => navigate("/Class")}>
                Lihat Detail<i className="fa-solid fa-chevron-right ms-1"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
};

export default HomePages;