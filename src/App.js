import logo from "./logo.svg";
import "./App.css";
import { Form, Field } from "react-final-form";

function App() {
  const onSubmit = (data, formData) => {
    // console.log(data);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.firstname) {
      errors.firstname = "Firstname is required";
    }
    if (!values.lastname) {
      errors.lastname = "Lastname  is required";
    }

    return errors;
  };

  return (
    <div className="container my-5">
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={{
          firstname: "",
          lastname: "",
          employee: true,
          favoriteColor: "",
        }}
        render={({ handleSubmit, values }) => (
          <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
            <Field name="firstname">
              {({ input, meta }) => (
                <div className="col-md-4">
                  <label className="form-label">First name</label>
                  <input
                    type="text"
                    className={
                      meta.error && meta.touched
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    {...input}
                  />
                  {meta.error && meta.touched ? (
                    <span className="invalid-feedback">{meta.error}</span>
                  ) : (
                    false
                  )}
                </div>
              )}
            </Field>
            <Field name="lastname">
              {({ input, meta }) => (
                <div className="col-md-4">
                  <label className="form-label">Last name</label>
                  <input
                    type="text"
                    className={
                      meta.error && meta.touched
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    {...input}
                  />
                  {meta.error && meta.touched ? (
                    <span className="invalid-feedback">{meta.error}</span>
                  ) : (
                    false
                  )}
                </div>
              )}
            </Field>
            <Field name="employee" type="checkbox">
              {({ input, meta }) => (
                <div className="col-md-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      {...input}
                      checked={values.employee}
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Employee
                    </label>
                  </div>
                </div>
              )}
            </Field>
            <div className="col-md-4">
              <label className="form-check-label" for="flexCheckDefault">
                Color
              </label>
              <Field
                name="favoriteColor"
                component="select"
                className="form-select"
              >
                <option />
                <option value="Red">❤️ Red</option>
                <option value="Green">💚 Green</option>
                <option value="Blue">💙 Blue</option>
              </Field>
            </div>

            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      ></Form>
    </div>
  );
}

export default App;
