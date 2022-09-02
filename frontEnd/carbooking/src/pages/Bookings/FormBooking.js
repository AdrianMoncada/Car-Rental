import React from 'react'
import { Field, Formik,Form } from 'formik'


const FormBooking = () => {
  return (
    <div>
    <h4>Completa tus datos</h4>
    <Formik >
      <Form>
        <label htmlFor="firstName">Nombre</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />

        <label htmlFor="lastName">Apellido</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />

        <label htmlFor="email">Correo electronico</label>
        <Field id="email" name="email" placeholder="jane@acme.com" type="email"/>

        <label htmlFor="city">Ciudad</label>
        <Field id="city" name="city" placeholder="Cali" />

      </Form>
    </Formik>
  </div>
  )
}

export default FormBooking