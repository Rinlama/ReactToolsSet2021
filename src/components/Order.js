import React from "react";
import { Card, Col, Form, FormFloating, Row, Alert } from "react-bootstrap";

const size = [
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

function Order(props) {
  const { formik } = props;
  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          <Card.Title>Size & Crust</Card.Title>
          <Form.Group className="py-3">
            <Row>
              {size.map((d) => (
                <Col md={6}>
                  <div className="mb-3">
                    <Form.Check
                      type="radio"
                      label={d.label}
                      value={d.value}
                      name="size"
                      onChange={formik.handleChange}
                      isInvalid={formik.errors.size && formik.touched.size}
                    />
                  </div>
                </Col>
              ))}
              {formik.errors.size && formik.touched.size ? (
                <Alert variant="danger">{formik.errors.size}</Alert>
              ) : null}
            </Row>
          </Form.Group>

          <hr></hr>

          <Form.Group className="py-3">
            <Row>
              {crust.map((d) => (
                <Col md={12}>
                  <div className="mb-3">
                    <Form.Check
                      type="radio"
                      label={d.label}
                      value={d.value}
                      name="crust"
                      onChange={formik.handleChange}
                      isInvalid={formik.errors.crust && formik.touched.crust}
                    />
                    <small className="px-4">{d.description}</small>
                  </div>
                </Col>
              ))}
              {formik.errors.crust && formik.touched.crust ? (
                <Alert variant="danger">{formik.errors.crust}</Alert>
              ) : null}
            </Row>
          </Form.Group>
        </Card.Body>
      </Card>

      {/* ******************************* Cheese & Sauce********************** */}
      <Row>
        <Col md={6}>
          <Card className="my-2">
            <Card.Body>
              <Card.Title style={{ display: "flex" }}>
                Cheese
                <Form.Check
                  type="checkbox"
                  className="mx-2"
                  name="cheese.includes"
                  onChange={formik.handleChange}
                />
              </Card.Title>
              {formik.values.cheese.includes ? (
                <Form.Select
                  name="cheese.value"
                  onChange={formik.handleChange}
                  className="my-2"
                >
                  <option value="normal">Normal</option>
                  <option value="light">Light</option>
                  <option value="extra">Extra</option>
                </Form.Select>
              ) : (
                false
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="my-2">
            <Card.Body>
              <Card.Title style={{ display: "flex" }}>
                Sauce
                <Form.Check
                  type="checkbox"
                  className="mx-2"
                  name="sauce.includes"
                  onChange={formik.handleChange}
                />
              </Card.Title>

              {formik.values.sauce.includes ? (
                <Form.Select
                  className="my-2"
                  name="sauce.value"
                  onChange={formik.handleChange}
                >
                  <option value="robustInspiredTomatoSauce">
                    Robust Inspired Tomato Sauce
                  </option>
                  <option value="ranch">Ranch</option>
                </Form.Select>
              ) : (
                false
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* ******************************* Toppings ********************** */}
      <Card className="my-2">
        <Card.Body>
          <Card.Title style={{ display: "flex" }}>Topping - Meat</Card.Title>
          <Row className="mt-4">
            {meat.map((d) => (
              <Col>
                <Form.Check
                  type="checkbox"
                  className="mx-2"
                  name="toppingMeat"
                  value={d.value}
                  label={d.label}
                  onChange={formik.handleChange}
                />
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
      <Card className="my-2">
        <Card.Body>
          <Card.Title style={{ display: "flex" }}>
            Non Topping - Meat
          </Card.Title>
          <Row className="mt-4">
            {nonmeat.map((d) => (
              <Col>
                <Form.Check
                  type="checkbox"
                  className="mx-2"
                  name="toppingNonMeat"
                  value={d.value}
                  label={d.label}
                  onChange={formik.handleChange}
                />
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>

      <Card.Body>
        <Card.Title>Special Instrution</Card.Title>
        <Row className="mt-4">
          <Form.Control
            as="textarea"
            onChange={formik.handleChange}
            {...formik.getFieldProps("specialInstruction")}
            style={{ height: "100px" }}
          />
        </Row>
      </Card.Body>
    </React.Fragment>
  );
}

export default Order;
