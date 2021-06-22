import React from 'react';
import './FormCSS.css';

import { Formik, ErrorMessage, Field } from 'formik'
//import { useFormik, ErrorMessage, Field } from 'formik';

const validate = values=>{
  //const error;
  const errors = {};
  if(!values.name){
    errors.name="required";
  }
  if(!values.password){}
  if(!values.passwordMatch){}
  if(!values.email){}
  if(values.checkTerm===false){
    errors.checkTerm = 'required'

  }

  return errors;
}

// const FormValidation= () =>{
//   //pass the useFormik() hook initial form values and a submit function
//   //that be called when the form is submitted
//   const formik = useFormik({
//     initialValues:{
//       name:'test',
//       password:'',
//       passwordMatch:'',
//       email:'',
//       checkBox:''
//     },
//     validate,
//     onSubmit: values =>{
//       console.info(JSON.stringify(values, null, 2));
//     }
//   })
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label>
//         Name*: <br/>
//         <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name}/>
//         {formik.errors.name ? <span>{formik.errors.name}</span> : null}
//       </label>
//     </form>
//   )
// }

const FormValidation = () =>{
  return (
    <Formik
      initialStatus={{isValidating: false}}
      initialValues={{name:'', password: '', passwordMatch:'', email:'',checkBox:false}}
      validate={validate}
      onSubmit={(values, { setSubmitting, setStatus }) =>{
        setStatus({isValidating: true });
        setTimeout(()=>{
          console.info(JSON.stringify(values, null,2));
          setSubmitting(false);
          setStatus({isValidating: false})
        }, 400);
      }}
    >
    {({
      validateField, handleChange, handleBlur, handleSubmit, isSubmitting
    }) => (
      <form onSubmit={handleSubmit}>
        <label>
          Name*:<br/>
          <Field type="text" name="name"

            onChange={handleChange}
          />
          <ErrorMessage name="name" />
        </label>

        <label>
          Password*:<br/>
          <Field type="text" name="password"

            onChange={handleChange}
          />
        <ErrorMessage name="password" />
        </label>
        <label>
          Password Match: <br/>
          <Field type="text" name="passwordMatch"

            onChange={handleChange}
          />
        <ErrorMessage name="passwordMatch" />
        </label>
        <label>
          Email: <br/>
          <Field type="text" name="email" />
        <ErrorMessage name="validateEmail" />
        </label>
        <label>
          ACCEPT TERMS AND CONDITIONS:
          <Field type='checkbox' name="checkTerm"
            onChange={handleChange}/> <br/>
        <ErrorMessage name="checkTerm" />
        </label>

        <input type='submit' value="Register" disabled={isSubmitting}/>
      </form>
    )}
    </Formik>
  )
}


export default FormValidation;
//export default FormValidation;
