import React from "react";
import { Button, Card, Row, Col, Form, Alert } from "react-bootstrap";
import Radio from "../../shared/ui/radio/Radio";
import CheckBox from "../../shared/ui/checkbox/Checkbox";

const pizzaSizeCollection = [
  {
    label: "Small",
    description: "10''",
    value: "small",
  },
  {
    label: "Medium",
    description: "12''",
    value: "medium",
  },
  {
    label: "Large",
    description: "14''",
    value: "large",
  },
  {
    label: "X-Large",
    description: "16''",
    value: "xlarge",
  },
];

const crust = [
  {
    label: "BROOKLYN STYLE",
    description: "Hand stretched to be big, thin and perfectly foldable.",
    value: "brooklynstyle",
  },
  {
    label: "HAND TOSSED",
    description: "Garlic-seasoned crust with a rich, buttery taste.",
    value: "handtossed",
  },
  {
    label: "CRUNCHY THIN CRUST",
    description:
      "Thin enough for the optimum crispy to crunchy ratio and square cut to be perfectly sharable.",
    value: "crunchythincrust",
  },
];
const meat = [
  {
    label: "Beef",
    value: "beef",
  },
  {
    label: "Salami",
    value: "salami",
  },
  {
    label: "Pepperoni",
    value: "pepperoni",
  },
  {
    label: "Italian Sausage",
    value: "Italiansausage",
  },
  {
    label: "Premium Chicken",
    value: "Premiumchicken",
  },
];
const nonmeat = [
  {
    label: "Hot Buffalo Sauce",
    value: "hotbuffalosauce",
  },
  {
    label: "Jalapeno Peppers",
    value: "jalapenopeppers",
  },
  {
    label: "Onions",
    value: "onions",
  },
  {
    label: "Banana Peppers",
    value: "bananapeppers",
  },
  {
    label: "Diced Tomatoes",
    value: "dicedtomatoes",
  },
];

function OrderForm(props) {
  const { formik } = props;

  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          <Card.Title>Size & Crust</Card.Title>
          <Card.Text className="my-4">
            <Form.Group>
              <Row>
                {pizzaSizeCollection.map((d) => (
                  <Col md={6}>
                    <div className="mb-3">
                      <Form.Check
                        type="radio"
                        name="size"
                        label={d.label}
                        checked={formik.values.size === d.value}
                        onChange={formik.handleChange}
                        value={d.value}
                        isInvalid={formik.errors.size}
                      />
                      <small className="mx-4">{d.description}</small>
                    </div>
                  </Col>
                ))}

                {formik.errors.size ? (
                  <Alert variant="danger">{formik.errors.size}</Alert>
                ) : null}
              </Row>
            </Form.Group>
            <hr />
            {crust.map((d) => (
              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Check
                    type="radio"
                    name="crust"
                    label={d.label}
                    checked={formik.values.crust === d.value}
                    onChange={formik.handleChange}
                    value={d.value}
                    isInvalid={formik.errors.crust}
                  />
                  <small className="mx-4">{d.description}</small>
                </Form.Group>
              </Col>
            ))}
            {formik.errors.crust ? (
              <Alert variant="danger">{formik.errors.crust}</Alert>
            ) : null}
          </Card.Text>
        </Card.Body>
      </Card>
      <Row>
        <Col>
          <Card className="my-2">
            <Card.Body>
              <Card.Title style={{ display: "flex" }}>
                Cheese
                <Form.Check
                  onChange={formik.handleChange}
                  className="mx-2"
                  type="checkbox"
                  name="cheese.includes"
                />
              </Card.Title>
              {formik.values.cheese.includes ? (
                <Card.Text className="my-4">
                  <Form.Group className="mb-3">
                    <Form.Select
                      aria-label="Default select example"
                      onChange={formik.handleChange}
                      name="cheese.value"
                    >
                      <option value="normal">Normal</option>
                      <option value="light">Light</option>
                      <option value="extra">Extra</option>
                    </Form.Select>
                  </Form.Group>
                </Card.Text>
              ) : (
                false
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="my-2">
            <Card.Body>
              <Card.Title style={{ display: "flex" }}>
                Sauce
                <Form.Check
                  className="mx-2"
                  type="checkbox"
                  name="sauce.includes"
                  onChange={formik.handleChange}
                />
              </Card.Title>

              {formik.values.sauce.includes ? (
                <Card.Text className="my-4">
                  <Form.Group className="mb-3">
                    <Form.Select
                      aria-label="Default select example"
                      name="sauce.value"
                      onChange={formik.handleChange}
                    >
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
              ) : (
                false
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Card className="my-2">
        <Card.Body>
          <Card.Title>Topping - Meat</Card.Title>
          <Card.Text className="my-4">
            <Row>
              {meat.map((d) => (
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Check
                      className="mx-2"
                      type="checkbox"
                      name="toppingMeat"
                      onChange={formik.handleChange}
                      label={d.label}
                      value={d.value}
                    />
                  </Form.Group>
                </Col>
              ))}
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="my-2">
        <Card.Body>
          <Card.Title>Topping - Non meats</Card.Title>
          <Card.Text className="my-4">
            <Row>
              {nonmeat.map((d) => (
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Check
                      className="mx-2"
                      type="checkbox"
                      name="toppingNonMeat"
                      onChange={formik.handleChange}
                      label={d.label}
                      value={d.value}
                    />
                  </Form.Group>
                </Col>
              ))}
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="my-2">
        <Card.Body>
          <Card.Title>Special Instrution</Card.Title>
          <Card.Text className="my-4">
            <Form.Control
              {...formik.getFieldProps("specialInstruction")}
              onChange={formik.handleChange}
              as="textarea"
              style={{ height: "100px" }}
            />
          </Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

export default OrderForm;
