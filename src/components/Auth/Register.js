// import "../assets/index.css";
//cant call css
import { Button,Card, Container,Row,Col ,Image,Form} from "react-bootstrap";

function Register() {
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
        <Container fluid style={{ backgroundColor:"#bbb" }}>
            <div className="d-flex align-items-center justify-content-center vh-100 "> 

            <Card> 
                <Card.Body  className="p-0 m-0">  
                    <Row>
                        <Col className="w-0 p-0">
                            <Image style={{ objectFit: 'cover',width:"100%", height:"100%",}} src={`https://nystudio107.com/img/blog/_1200x675_crop_center-center_82_line/image_optimzation.jpg.webp`} fluid></Image>
                        </Col>
                        <Col className="w-0 p-5">
                            <Form>
                                <h3 className="text-primary"><b>Daftar</b></h3>
                                <Form.Group className="mb-3" controlId="Email">
                                    <Form.Label className="text-primary">Username</Form.Label>
                                    <Form.Control name="username" type="text" placeholder="Username" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="Email">
                                    <Form.Label className="text-primary">Email</Form.Label>
                                    <Form.Control name="email" type="email" placeholder="Email" required/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="Password">
                                    <Form.Label className="text-primary">Password</Form.Label>
                                    <Form.Control name="password" type="password" placeholder="Password" required/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="KonfirmasiPassword">
                                    <Form.Label className="text-primary">Konfirmasi Password</Form.Label>
                                    <Form.Control name="password" type="password" placeholder="Konfirmasi Password" required/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="agree">
                                    <Form.Check type="checkbox" label="I Agree" />
                                </Form.Group>
                                <Button variant="primary" className="w-100" type="submit">
                                    Submit
                                </Button>

                            </Form>
                            <div>
                                <p className="text-center mt-3"><b>Sudah punya akun ? <a href="#daftar">Login</a></b></p>
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

export default Register;
