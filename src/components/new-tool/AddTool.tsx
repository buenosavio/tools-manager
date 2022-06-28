import { Formik, useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { toolActions } from '../../store/tools/duck'
import Select from 'react-select'
import * as Yup from 'yup'
import {
  Form,
  Modal,
  Container,
  TitleForm,
  ButtonAdd,
  ButtonCancel,
  FooterForm
} from './AddTool.styles'
import { useState } from 'react'
import { InputFormik } from './Input'

interface OpenModal {
  setOpenModal: (arg0: boolean) => void
}

const toolSchema = Yup.object().shape({
  name: Yup.string().required('Required field'),
  description: Yup.string().required('Required field'),
  link: Yup.string().required('Required field')
})

const ModalNewCard = ({ setOpenModal }: OpenModal) => {
  const dispatch = useDispatch()
  //const [selectedTags, setSelectedTags] = useState<string[]>([])

  // const setTagList = (value: string) => {
  //   selectedTags.push(value)
  // }

  // const options = [
  //   { value: '1', label: 'Computer' },
  //   { value: '2', label: 'Smartphone' },
  //   { value: '3', label: 'Deskpad' },
  //   { value: '4', label: 'Monitor' },
  //   { value: '5', label: 'Mouse' },
  //   { value: '6', label: 'Keyboard' },
  //   { value: '7', label: 'Chair' },
  //   { value: '8', label: 'Desk' },
  //   { value: '9', label: 'Cable' },
  //   { value: '10', label: 'Support' }
  // ]

  const initialValues = {
    name: '',
    description: '',
    link: '',
    tag: '',
    id: ''
  }

  return (
    <Container>
      <Modal>
        <Formik
          initialValues={initialValues}
          onSubmit={values => {
            console.log(`cheghayyausdyguasygd`)

            setOpenModal(false)
            dispatch(toolActions.create(values))
          }}
          validationSchema={toolSchema}
        >
          <Form>
            <TitleForm> + Add new tool</TitleForm>
            <InputFormik name="tool-name" label="Tool Name" type="input" />
            <InputFormik name="tool-link" label="Tool Link" type="input" />
            <InputFormik
              name="tool-desc"
              label="Tool Description"
              type="text"
            />
            <FooterForm>
              <ButtonCancel
                onClick={() => {
                  setOpenModal(false)
                }}
              >
                Cancel
              </ButtonCancel>
              <ButtonAdd type="submit">Add tool</ButtonAdd>
            </FooterForm>
          </Form>
        </Formik>
      </Modal>
    </Container>
  )
}

export default ModalNewCard
