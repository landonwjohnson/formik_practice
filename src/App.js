import React from 'react'
import { Form, Field } from 'formik';


const App = ({
  values,
  errors,
  touched,
  isSubmitting
}) => {
  return (
    <Form  >
      <div>
        <Field type="email" name="email" placeholder="Email" />
        {touched.email && errors.email ? <p>{errors.email}</p> : ""}
      </div>
      <div>
        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password ? <p>{errors.password}</p> : ""}
      </div>
      <div>
        <Field name="plan" component="select">
          <option value="free">Free</option>
          <option value="premium">Premium</option>
        </Field>
      </div>
      <Field type="checkbox" name="newsletter" checked={values.newsletter} />
      <button disabled={isSubmitting}>Submit</button>
    </Form>
  )
}


export default App;
