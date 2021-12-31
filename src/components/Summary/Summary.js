import { Container, Form, Button, Card, Image } from "react-bootstrap";

function Summary() {
  return (
    <Form>
      <Card className="mb-2">
        <Card.Body>
          <Card.Title bg={"primary"}>Summary</Card.Title>
          <Image
            style={{ height: "300px", width: "100%", objectFit: "cover" }}
            src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title bg={"primary"}>Summary</Card.Title>
          <Card.Text className="my-4">
            <hr />
            <Form.Group className="mb-3">
              <Form.Check type="radio" name="crust" label="BROOKLYN STYLE" />
              <small className="mx-4">
                Hand stretched to be big, thin and perfectly foldable.
              </small>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check type="radio" name="crust" label="HAND TOSSED" />
              <small className="mx-4">
                Garlic-seasoned crust with a rich, buttery taste.
              </small>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="radio"
                name="crust"
                label="CRUNCHY THIN CRUST"
              />
              <small className="mx-4">
                Thin enough for the optimum crispy to crunchy ratio and square
                cut to be perfectly sharable.
              </small>
              <div className="d-grid gap-2 my-2">
                <Button variant="danger">Placed Order</Button>
              </div>
            </Form.Group>
          </Card.Text>
        </Card.Body>
      </Card>
    </Form>
  );
}

export default Summary;
