// import "../assets/index.css";
import { Button, Card, Container } from "react-bootstrap";

function Login() {
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
      <Container fluid style={{ backgroundColor: "#bbb" }}>
        <div className="d-flex align-items-center justify-content-center vh-100 ">
          <Card className="w-50">
            <Card.Body>
              <div style={{ padding: "5%" }}>
                <form action="">
                  <input type="email" style={formInput} name="" id="" />
                  <hr style={{ margin: 0, padding: 0 }} />
                  <input type="password" style={formInput} name="" id="" />
                </form>
                <Button className="btn btn-lg btn-primary text-center w-100 mt-5">
                  Login
                </Button>
                <div>
                  <p className="text-center mt-3">
                    <b>
                      Belum punya akun ? <a href="/Register">Daftar</a>
                    </b>
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}

export default Login;
