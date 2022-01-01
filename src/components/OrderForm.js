import { useFormik } from "formik";
import React from "react";

const validate = (values) => {
  const error = {};

  if (!values.name) {
    error.name = "Name is requird";
  }

  if (values.food.length === 0) {
    error.food = "Food is requird";
  }

  return error;
};

function OrderForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      food: [],
      drink: "",
      specialinstruction: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-12">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                name="name"
                type="text"
                {...formik.getFieldProps("name")}
                className={
                  formik.errors.name && formik.touched.name
                    ? "form-control is-invalid"
                    : "form-control"
                }
              />
              <div class="invalid-feedback">
                {formik.errors.name && formik.touched.name
                  ? formik.errors.name
                  : false}
              </div>
            </div>
          </div>
          <div className="col-12">
            <p>Food</p>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                onChange={formik.handleChange}
                name="food"
                value="dumpling"
                className={
                  formik.errors.food && formik.touched.food
                    ? "form-check-input is-invalid"
                    : "form-check-input"
                }
              />
              <label className="form-check-label">Dumpling</label>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className={
                  formik.errors.food && formik.touched.food
                    ? "form-check-input is-invalid"
                    : "form-check-input"
                }
                onChange={formik.handleChange}
                name="food"
                value="burger"
              />
              <label className="form-check-label">Burger</label>
            </div>

            <div className="text-danger">
              {formik.errors.food && formik.touched.food
                ? formik.errors.food
                : false}
            </div>
          </div>
          <div className="col-12">
            <p>Drink</p>
            <div className="mb-3 form-check">
              <input
                type="radio"
                className="form-check-input"
                onChange={formik.handleChange}
                name="drink"
                value="water"
              />
              <label className="form-check-label" for="exampleCheck1">
                Water
              </label>
            </div>
            <div className="mb-3 form-check">
              <input
                type="radio"
                className="form-check-input"
                onChange={formik.handleChange}
                name="drink"
                value="mango"
              />
              <label className="form-check-label" for="exampleCheck1">
                Mango Juice
              </label>
            </div>
          </div>
          <div className="col-12">
            <p>Special Instruction</p>
            <div className="mb-3 form-check">
              <textarea
                class="form-control"
                {...formik.getFieldProps("specialinstruction")}
              ></textarea>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-danger btn-">
          Place Order
        </button>
      </form>
      {JSON.stringify(formik.values, null, 2)}
    </div>
  );
}

export default OrderForm;
