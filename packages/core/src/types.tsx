export interface UseForm<Values = Values> {
  initialValues?: Values
  validate?: (values: Values) => Errors<Values>
  onSubmit(values: Values, extras: FormExtras): void
}

export type Errors<Values> = {
  [K in keyof Values]?: Values[K] extends object ? Errors<Values[K]> : string
}

export interface UseFormReturn<Values> {
  values: Values
  errors: Errors<Values>
  submitting: boolean
  handleChange(evt: any): void
  handleSubmit(evt: any): void
  setFieldValue(field: keyof Values & string, value: any): void
}

export interface FormExtras {
  setSubmitting: (submitting: boolean) => void
}
