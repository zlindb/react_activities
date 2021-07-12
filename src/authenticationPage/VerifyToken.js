import React from 'react';
//import { Formik, Form, Field } from 'formik';
import { Formik, Field, Form } from 'formik';

function validateAccess(){

}
function validateToken(){

}

const VerifyTokenForm = () =>{
  <div>
    <h1>Verify</h1>
    <Formik initialValues={{
      token:'',
      access:''
    }}
    onSubmit={values=>{
      console.log(values);
    }}
    >
    { ({errors, touched, dirty}) => {
      return (
        <Form>
          <label>
            Access:
            <Field name="access" validate={validateAccess} />
          </label>
          <label>
            Token:
            <Field name="token" validate={validateToken} />
          </label>
          <button type="submit">submit</button>
        </Form>
      )}
    }
    </Formik>
  </div>
}

export default VerifyTokenForm;
