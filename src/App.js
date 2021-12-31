import OrderForm from "./components/Order/OrderForm";
import { Col, Container, Nav, Row } from "react-bootstrap";
import React from "react";
import Summary from "./components/Summary/Summary";

function App() {
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
        <Row>
          <Col md={8}>
            <OrderForm />
          </Col>
          <Col md={4}>
            <Summary />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
