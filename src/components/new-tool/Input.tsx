import { Field } from 'formik'
import Error from './Error'
import { Label, Input, TextArea } from './AddTool.styles'

interface IProps {
  name: any
  label: string
  type: string
}
export const InputFormik = ({ name, label, type, ...props }: IProps) => {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Field
        type="text"
        name={name}
        id={name}
        as={type === 'input' ? Input : TextArea}
      />
      <Error name={name} />
    </>
  )
}
