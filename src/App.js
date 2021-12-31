import OrderForm from "./components/Order/OrderForm";
import { Col, Container, Nav, Row, Form, Button } from "react-bootstrap";
import React from "react";
import Summary from "./components/Summary/Summary";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.size) {
    errors.size = "Required";
  }
  if (!values.crust) {
    errors.crust = "Required";
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
        value: "RobustInspiredTomatoSauce",
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
    <React.Fragment>
      <Nav
        color="primary"
        style={{ background: "#0d6efd" }}
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/home" style={{ color: "white" }}>
            <h4> PIZZA BUILDER FORM</h4>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Container className="my-4">
        <Form onSubmit={formik.handleSubmit}>
          <Row>
            <Col md={8}>
              <OrderForm formik={formik} />
            </Col>
            <Col md={4}>
              <Summary formik={formik} />
            </Col>
          </Row>

        </Form>
      </Container>
    </React.Fragment>
  );
}

export default App;
