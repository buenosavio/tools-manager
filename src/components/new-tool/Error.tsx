import { FormikErrors, FormikTouched, useFormikContext } from 'formik'
import { TextAlert } from './AddTool.styles'

const Error = ({ name, ...props }: any) => {
  const { errors, touched } = useFormikContext()

  return (
    <>
      {errors[name as keyof FormikErrors<unknown>] &&
      touched[name as keyof FormikTouched<unknown>] ? (
        <TextAlert role={'alert'}>
          {errors[name as keyof FormikErrors<unknown>]}
        </TextAlert>
      ) : null}
    </>
  )
}

export default Error
