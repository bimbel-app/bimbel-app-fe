import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { testimonial } from "../data/index";
import FaqComponent from "../component/FaqComponent";
import "../dist/css/main.css"; // Pastikan path CSS sesuai dengan struktur proyek Anda

const Testimonialpages = () => {
  const [expandedTestimonials, setExpandedTestimonials] = useState([]);

  const handleReadMore = (testimonialId) => {
    setExpandedTestimonials((prevExpandedTestimonials) => [
      ...prevExpandedTestimonials,
      testimonialId,
    ]);
  };

  const isTestimonialExpanded = (testimonialId) => {
    return expandedTestimonials.includes(testimonialId);
  };

  return (
    <div className="testimonial-page">
      <div className="testimonial">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s">
                Testimonial
              </h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                Yuk simak apa kata mereka tentang Bimbel Private Zinda.
              </p>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-1">
            {testimonial.map((data) => (
              <Col key={data.id} className="mb-5">
                {data.desc.length > 50 ? (
                  <div>
                    <p className="desc shadow-sm">
                      {isTestimonialExpanded(data.id)
                        ? data.desc
                        : `${data.desc.slice(0, 50)}...`}
                    </p>
                    {data.desc.length > 50 && (
                      <Button
                        variant="link"
                        onClick={() => handleReadMore(data.id)}
                      >
                        {isTestimonialExpanded(data.id)
                          ? "Read less"
                          : "Read more"}
                      </Button>
                    )}
                  </div>
                ) : (
                  <p className="desc shadow-sm">{data.desc}</p>
                )}
                <div className="people">
                  <img src={data.image} alt="" />
                  <div>
                    <h5 className="mb-1">{data.name}</h5>
                    <p className="m-0 fw-bold">{data.skill}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
};

export default Testimonialpages;