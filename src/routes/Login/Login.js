import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useContextAuth } from 'shared/contexts/AuthContext'
export default () => {
  const { login } = useContextAuth()[1]

  return (
    <Formik
      initialValues={{username: '', password:''}}
      onSubmit={values => {
        login(values)
      }}
      render={props => (
        <Form>
          <Field
            name='username'
            render={({ field, form}) => (
              <input {...field} placeholder="username" />
            )}

          />
          <Field
            name='password'
            render={({ field, form}) => (
              <input type='password' {...field} placeholder="password" />
            )}

          />
          <button type='submit'>login</button>
        </Form>
      )}
    />
  )
}