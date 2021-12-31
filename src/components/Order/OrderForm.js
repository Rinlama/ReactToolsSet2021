import { Form, Button, Card, Row, Col } from "react-bootstrap";

function OrderForm() {
  return (
    <Form>
      <Card>
        <Card.Body>
          <Card.Title>Size & Crust</Card.Title>
          <Card.Text className="my-4">
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Check type="radio" name="size" label="Small" />
                  <small className="mx-4">10"</small>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check type="radio" name="size" label="Medium" />
                  <small className="mx-4">12"</small>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Check type="radio" name="size" label="Large" />
                  <small className="mx-4">14"</small>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Check type="radio" name="size" label="X-Large" />
                  <small className="mx-4">16"</small>
                </Form.Group>
              </Col>
            </Row>
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
            </Form.Group>
          </Card.Text>
        </Card.Body>
      </Card>
      <Row>
        <Col>
          <Card className="my-2">
            <Card.Body>
              <Card.Title style={{ display: "flex" }}>
                Cheese
                <Form.Check className="mx-2" type="checkbox" name="size" />
              </Card.Title>
              <Card.Text className="my-4">
                <Form.Group className="mb-3">
                  <Form.Select aria-label="Default select example">
                    <option value="normal">Normal</option>
                    <option value="light">Light</option>
                    <option value="extra">Extra</option>
                  </Form.Select>
                </Form.Group>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="my-2">
            <Card.Body>
              <Card.Title style={{ display: "flex" }}>
                Sauce
                <Form.Check className="mx-2" type="checkbox" name="size" />
              </Card.Title>
              <Card.Text className="my-4">
                <Form.Group className="mb-3">
                  <Form.Select aria-label="Default select example">
                    <option value="RobustInspiredTomatoSauce">
                      Robust Inspired Tomato Sauce
                    </option>
                    <option value="HeartyMarinaraSauce">
                      Hearty Marinara Sauce
                    </option>
                    <option value="HoneyBBQSauce">Honey BBQ Sauce</option>
                    <option value="Ranch">Ranch</option>
                  </Form.Select>
                </Form.Group>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Card className="my-2">
        <Card.Body>
          <Card.Title>Topping - Meat</Card.Title>
          <Card.Text className="my-4">
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Check
                    className="mx-2"
                    type="checkbox"
                    name="size"
                    label="Beef"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Check
                    className="mx-2"
                    type="checkbox"
                    name="size"
                    label="Salami"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Check
                    className="mx-2"
                    type="checkbox"
                    name="size"
                    label="Pepperoni"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Check
                    className="mx-2"
                    type="checkbox"
                    name="size"
                    label="Italian Sausage"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Check
                    className="mx-2"
                    type="checkbox"
                    name="size"
                    label="Premium Chicken"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="my-2">
        <Card.Body>
          <Card.Title>Topping - Non meats</Card.Title>
          <Card.Text className="my-4">
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Check
                    className="mx-2"
                    type="checkbox"
                    name="size"
                    label="Hot Buffalo Sauce"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Check
                    className="mx-2"
                    type="checkbox"
                    name="size"
                    label="Jalapeno Peppers"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Check
                    className="mx-2"
                    type="checkbox"
                    name="size"
                    label="Onions"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Check
                    className="mx-2"
                    type="checkbox"
                    name="size"
                    label="Banana Peppers"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Check
                    className="mx-2"
                    type="checkbox"
                    name="size"
                    label="Diced Tomatoes"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="my-2">
        <Card.Body>
          <Card.Title>Special Instrution</Card.Title>
          <Card.Text className="my-4">
            <Form.Control as="textarea" style={{ height: "100px" }} />
          </Card.Text>
        </Card.Body>
      </Card>
    </Form>
  );
}

export default OrderForm;
