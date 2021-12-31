import { Card, Image, Button } from "react-bootstrap";
import React from "react";

function Summary(props) {
  const { formik } = props;
  return (
    <React.Fragment>
      <Card className="mb-2">
        <Card.Body>
          <Image
            style={{ height: "300px", width: "100%", objectFit: "cover" }}
            src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
        </Card.Body>
      </Card>
      <Card>
        <div className="d-grid gap-2 my-2">
          <pre>{JSON.stringify(formik.values, null, 2)}</pre>
          <Button variant="danger" type="submit">
            Placed Order
          </Button>
        </div>
      </Card>
    </React.Fragment>
  );
}

export default Summary;
