import React from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'

export const Contacto = () => {
  return (
    <div className="wrapper">
      <h1>Contact</h1>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">
            Email
          </Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="email"
          />
        </FormGroup>
        </Form>
    </div>
  )
}