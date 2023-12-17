import { Card, Button, Row, Col, Container } from "react-bootstrap";
import slider from "../../assets/slider1.png";

export default function Whistlist() {
  return (
    <div>
      <Container>
        <h2 className="mt-5 mb-5">
          Whistlist
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
