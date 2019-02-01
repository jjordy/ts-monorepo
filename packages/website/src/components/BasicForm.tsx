import React from "react"
import { useForm } from "@jjordy/use-form"
import {
  Form,
  Input,
  Select,
  InputContainer,
  Label,
  Checkbox,
  Button
} from "./"

export interface FormValues {
  firstName: string
  lastName: string
  iAgree: boolean
  plan: string
}

const initialValues = {
  firstName: "",
  lastName: "",
  iAgree: false,
  plan: "1"
}

export interface SignupFormProps {
  onSubmit: (values: FormValues, extras: any) => void
}

const SignupForm: React.SFC<SignupFormProps> = ({ onSubmit }) => {
  const { handleSubmit, values, errors, handleChange, submitting } = useForm<
    FormValues
  >({
    initialValues,
    onSubmit
  })
  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer>
        <Label>First Name</Label>
        <div>
          <Input
            type="text"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
          />
          {errors && <div className="form-error">{errors.firstName}</div>}
        </div>
      </InputContainer>
      <InputContainer>
        <Label>Last Name</Label>
        <div>
          <Input
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
          {errors && <div className="form-error">{errors.lastName}</div>}
        </div>
      </InputContainer>
      <Checkbox>
        <Label>
          I agree to the terms and conditions.
          <input
            type="checkbox"
            name="iAgree"
            checked={values.iAgree}
            onChange={handleChange}
          />
        </Label>
        {errors && <div className="form-error">{errors.iAgree}</div>}
      </Checkbox>
      <InputContainer>
        <Label>Select your plan </Label>
        <Select name="plan" value={values.plan} onChange={handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
        </Select>
      </InputContainer>
      {errors && <div className="form-error">{errors.iAgree}</div>}
      <Button disabled={submitting}>SUBMIT</Button>
    </Form>
  )
}

export default SignupForm
