import {
  Card,
  Button,
  Row,
  Col,
  Container,
  Form,
  Image,
  CloseButton,
} from "react-bootstrap";
import slider from "../../assets/slider1.png";

export default function Chart() {
  return (
    <div>
      <Container>
        <div className="chart">
          <div className="mb-4">
            <Form.Check
              inline
              label="All Product"
              name="group1"
              type="checkbox"
              id="inline-checkbox-1"
            />
          </div>
          <Row>
            <Col
              md={1}
              style={{ width: "1.333333%" }}
              className="d-flex align-items-center"
            >
              <Form.Check
                inline
                label=""
                name="group1"
                type="checkbox"
                id="inline-checkbox-1"
              />
            </Col>
            <Col
              md={2}
              className="d-flex justify-content-start align-items-center"
            >
              <Image src={slider} thumbnail />
            </Col>
            <Col md={3} className="align-self-center">
              <h3>Product</h3>
              <p>IDR 300.000</p>
              <p>QTY: 5</p>
            </Col>
            <Col
              md={6}
              className="d-flex justify-content-end align-items-center"
            >
              <p>Hapus</p>
              <CloseButton className="ms-3" />
            </Col>
          </Row>
        </div>

        <h2 className="mt-5 mb-5">
          Rekomendasi
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </h2>
        <Row>
          <Col className="product-list w-100 gap-2">
            {Array.from({ length: 8 }).map((_, idx) => (
              <Card key={idx} className="product-card position-relative">
                <Card.Img variant="top" src={slider} />
                <Card.Body>
                  <Card.Title className="fs-2  fw-bold">Product</Card.Title>
                  <Card.Text>IDR 300.000</Card.Text>
                  <div className="beli-love">
                    <Button variant="primary" className="beli">
                      Beli
                    </Button>
                    <i className="fa-solid fa-heart"></i>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
