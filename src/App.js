import { useFormik } from "formik";
import { Card, Col, Container, Form, Nav, Row } from "react-bootstrap";
import Order from "./components/Order";
import Summary from "./components/Summary";

const validate = (values) => {
  const errors = {};

  if (!values.size) {
    errors.size = "Required size";
  }
  if (!values.crust) {
    errors.crust = "Required crust";
  }
  return errors;
};

function App() {
  const formik = useFormik({
    initialValues: {
      size: "",
      crust: "",
      cheese: {
        includes: false,
        value: "normal",
      },
      sauce: {
        includes: false,
        value: "robustInspiredTomatoSauce",
      },
      toppingMeat: [],
      toppingNonMeat: [],
      specialInstruction: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validate,
  });

  return (
    <div>
      <Nav activeKey="/home" style={{ background: "#0d6efd" }}>
        <Nav.Item>
          <Nav.Link href="/home" style={{ color: "#ffff" }}>
            <h4>PIZZA BUILDER FORM</h4>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Container className="my-4">
        <Card className="shadow-lg p-4">
          <Form onSubmit={formik.handleSubmit}>
            <Row>
              <Col md={8}>
                <Order formik={formik}></Order>
              </Col>
              <Col md={4}>
                <Summary formik={formik}></Summary>
              </Col>
            </Row>
          </Form>
        </Card>
      </Container>
    </div>
  );
}

export default App;
