import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

function Summary(props) {
  const { formik } = props;
  return (
    <Card>
      <Card.Img
        variant="top"
        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
      <Card.Body>
        <Card.Text>
          <pre>{JSON.stringify(formik.values, null, 2)}</pre>
        </Card.Text>
      </Card.Body>
      <Button variant="danger" type="Submit">
        Placed Order
      </Button>
    </Card>
  );
}

export default Summary;
