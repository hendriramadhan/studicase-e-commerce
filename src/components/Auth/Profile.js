import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Image,
  Form,
} from "react-bootstrap";

function Profile() {
  const formInput = {
    border: "none",
    outline: "none",
    background: "transparent",
    color: "#219f94 !important",
    transition: "0.5s",
    fontSize: "2rem",
    fontWeight: "300 !important",
  };
  return (
    <>
      <Container>
        <div className="d-flex align-items-center justify-content-center vh-100 ">
          <Card>
            <Card.Body className="p-0 m-0">
              <Row>
                <Col className="w-0 p-0 w-100 p-5">
                  <div className=" d-flex justify-content-center align-items-center">
                    <Image
                      className="rounded-circle w-25 "
                      src={`https://nystudio107.com/img/blog/_1200x675_crop_center-center_82_line/image_optimzation.jpg.webp`}
                    ></Image>
                  </div>
                  <br className="clearfix" />
                  <div className=" d-flex justify-content-center align-items-center">
                    <b>NAMEEEEE</b>
                  </div>
                </Col>
                <Col className="w-0 p-5">
                  <b>Profil Saya</b>
                  <Form>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextUsername"
                    >
                      <Form.Label column sm="2" className="text-secondary">
                        Username
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control defaultValue="Username" />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextNama"
                    >
                      <Form.Label column sm="2" className="text-secondary">
                        Nama
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control defaultValue="Nama" />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextNomorTelepon"
                    >
                      <Form.Label column sm="2" className="text-secondary">
                        Nomor Telepon
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control defaultValue="081234578" />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextEmail"
                    >
                      <Form.Label column sm="2" className="text-secondary">
                        Email
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control defaultValue="email@example.com" />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextNamaToko"
                    >
                      <Form.Label column sm="2" className="text-secondary">
                        Nama Toko
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control defaultValue="Nama Toko" />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextJenisKelamin"
                    >
                      <Form.Label column sm="2" className="text-secondary">
                        Jenis Kelamin
                      </Form.Label>
                      <Col sm="10">
                        <Form.Check
                          inline
                          type="radio"
                          label="Laki-Laki"
                          name="JenisKelamin"
                          id="Radio1"
                        />
                        <Form.Check
                          inline
                          type="radio"
                          label="Perempuan"
                          name="JenisKelamin"
                          id="Radio2"
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextTanggalLahir"
                    >
                      <Form.Label column sm="2" className="text-secondary">
                        Tanggal Lahir
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control defaultValue="Tanggal Lahir" />
                      </Col>
                    </Form.Group>
                  </Form>
                  <div className="clearfix">
                    <Button type="submit" className="btn btn-primary">
                      Simpan
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}

export default Profile;
