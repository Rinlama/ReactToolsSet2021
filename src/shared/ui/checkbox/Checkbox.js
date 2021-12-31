import React from "react";
import { Button, Card, Row, Col, Form } from "react-bootstrap";

function CheckBox(props) {
  const { formik, value, description, name, label } = props;
  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          name={name}
          label={label}
          checked={formik.values[name] === value}
          onChange={formik.handleChange}
          value={value}
        />
        <small className="mx-4">{description}</small>
      </Form.Group>
    </div>
  );
}

export default CheckBox;
