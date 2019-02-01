import { useState } from "react"
import produce from "immer"
import { UseForm, Errors, UseFormReturn } from "./types"

export function useForm<Values>({
  initialValues,
  onSubmit = () => {},
  validate = () => ({})
}: UseForm<Values>): UseFormReturn<Values> {
  const [values, setValues] = useState<Values>(initialValues as Values)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const handleSubmit = (evt: any) => {
    evt.preventDefault()
    const errors: Errors<Values> = validate(values)
    const hasErrors = errors ? Object.keys(errors).length : false
    if (hasErrors) {
      setErrors(errors)
    } else {
      onSubmit(values, {
        setSubmitting
      })
    }
  }
  const setFieldValue = (field: string, value: any) => {
    const nextState = produce(values, (draftState) => {
      draftState[field] = value
    })
    setValues(nextState)
  }
  const handleChange = (evt: any) => {
    if (evt.target.type === "checkbox") {
      const nextState = produce(values, (draftState) => {
        draftState[evt.target.name] = evt.target.checked
      })
      setValues(nextState)
    } else {
      const nextState = produce(values, (draftState) => {
        draftState[evt.target.name] = evt.target.value
      })
      setValues(nextState)
    }
  }
  return {
    values,
    handleSubmit,
    handleChange,
    errors,
    setFieldValue,
    submitting
  }
}
