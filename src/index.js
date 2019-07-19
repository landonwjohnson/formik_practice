import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as Yup from 'yup'
import {withFormik} from 'formik'

const FormikApp = withFormik({
    mapPropsToValues({email, password, newsletter, plan}){
        return{
            email: email || "",
            password: password || "",
            newsletter: false,
            plan: plan || "free"

        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email("Email not valid").required("Email is required"),
        password: Yup.string().min(9, "Password must be 9 characters or longer").required("Password is required"),


    }),
    handleSubmit(values, {resetForm, setErrors, setSubmitting}){
        setTimeout(() => {
            if(values.email === "landonwjohnson@gmail.com"){
                setErrors({
                    email: 'That email is already taken!'
                })
            }else{
                resetForm()
            }

            setSubmitting(false)
        }, 2000);
    }
})(App)

export default FormikApp;

ReactDOM.render(<FormikApp email={null} />, document.getElementById('root'));
serviceWorker.unregister();
