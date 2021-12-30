import logo from "./logo.svg";
import { Form, Field } from "react-final-form";

function App() {
  const onSubmit = (data, formData) => {
    console.log(data);
  };
  const validate = (values) => {
    const errors = {};
    if (!values.firstname) {
      errors.firstname = "First name is required";
    }
    return errors;
  };

  return (
    <div className="container my-5">
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={{ firstname: "", employee: false, favColor: "" }}
        render={({ handleSubmit, values }) => (
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-4">
              <Field
                name="firstname"
                render={({ input, meta }) => (
                  <div>
                    <label htmlFor="firstname" className="form-label">
                      First name
                    </label>
                    <input
                      {...input}
                      className={
                        meta.touched && meta.error
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                    />
                    {meta.touched && meta.error && (
                      <span className="invalid-feedback">{meta.error}</span>
                    )}
                  </div>
                )}
              />
            </div>
            <div className="col-md-4">
              <Field
                name="employee"
                type="checkbox"
                render={({ input }) => (
                  <div>
                    <input
                      checked={values.employee}
                      {...input}
                      className="form-check-input"
                    />
                    <label htmlFor="employee" className="form-label">
                      Employee
                    </label>
                  </div>
                )}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="color" className="form-label">
                Color
              </label>
              <Field name="favColor" component="select" className="form-select">
                <option /> <option value="red">red</option>
                <option value="green">green</option>
              </Field>
            </div>

            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
            {JSON.stringify(values)}
          </form>
        )}
      ></Form>
    </div>
  );
}

export default App;
