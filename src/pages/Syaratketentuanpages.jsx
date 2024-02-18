import { Container, Row, Col } from "react-bootstrap";
import FaqComponent from "../component/FaqComponent";

const Syaratketentuanpages = () => {
  return (
    <div className="syarat-ketentuan-page">
      <div className="syarat-ketentuan min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center mb-2 animate__animated animate__fadeInUp animate__delay-1s">Syarat & Ketentuan</h1>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">1. Ketentuan Umum</h4>
              <p>- Syarat dan ketentuan ini mengatur landasan dasar dan informasi terkait kegiatan bimbingan atau belajar mengajar di Bimbel Private Zinda</p>
              <p>- Seluruh pengguna yang mendaftar pada layanan atau kelas Bimbel Private Zinda melalui cara pendaftaran apapun diatur dan terikat pada syarat dan ketentuan ini, kecuali terdapat syarat ketentuan lain yang mengatur.</p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">2. Ketentuan Pembayaran dan Biaya</h4>
              <p>- Tidak diperkenankan melakukan transaksi langsung kepada pembimbing/tutor.</p>
              <p>- Biaya administrasi pembayaran ditanggung sepenuhnya oleh siswa</p>
              <p>- Pembayaran hanya melalui transfer bank </p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">3. Ketentuan Pertemuan</h4>
              <p>- Jumlah pertemuan ditentukan oleh kedua belah pihak.</p>
              <p>- Pertemuan/kelas hanya dapat digunakan sesuai dengan bahan/materi yang disepakati saat pendaftaran.</p>
              <p>- Kelas Online dilaksanakan melalui zoom/website/metode lain yang telah disepakati dan diinformasikan kepada peserta.</p>
            </Col>
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
};

export default Syaratketentuanpages;