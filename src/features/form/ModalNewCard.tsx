import { ErrorMessage, useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { Tag, toolActions } from '../../store/tools/duck'
import Select from 'react-select'
import * as Yup from 'yup'
import {
  Form,
  Modal,
  Container,
  TitleForm,
  Input,
  Label,
  TextArea,
  ButtonAdd,
  ButtonCancel,
  FooterForm,
  TextAlert
} from './ModalNewCard.styles'
import { useState } from 'react'

interface OpenModal {
  setOpenModal: (arg0: boolean) => void
}

interface Value {
  value: string
  label: string
}

const toolSchema = Yup.object().shape({
  name: Yup.string().required('Required field'),
  description: Yup.string().required('Required field'),
  link: Yup.string().required('Required field')
})

const ModalNewCard = ({ setOpenModal }: OpenModal) => {
  const dispatch = useDispatch()
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const setTagList = (value: string) => {
    selectedTags.push(value)
    return selectedTags
  }

  const options = [
    { value: '1', label: 'Computer' },
    { value: '2', label: 'Smartphone' },
    { value: '3', label: 'Deskpad' },
    { value: '4', label: 'Monitor' },
    { value: '5', label: 'Mouse' },
    { value: '6', label: 'Keyboard' },
    { value: '7', label: 'Chair' },
    { value: '8', label: 'Desk' },
    { value: '9', label: 'Cable' },
    { value: '10', label: 'Support' }
  ]

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      link: '',
      tag: selectedTags,
      id: ''
    },
    validationSchema: toolSchema,
    onSubmit: values => {
      setOpenModal(false)
      dispatch(toolActions.create(values))
    }
  })

  return (
    <Container>
      <Modal>
        <Form onSubmit={formik.handleSubmit}>
          <TitleForm> + Add new tool</TitleForm>
          <Label htmlFor="name">Tool Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name ? (
            <TextAlert>{formik.errors.name}</TextAlert>
          ) : null}
          <Label htmlFor="link">Tool Link</Label>
          <Input
            type="text"
            name="link"
            id="link"
            onChange={formik.handleChange}
            value={formik.values.link}
          />
          {formik.errors.link && formik.touched.link ? (
            <TextAlert>{formik.errors.link}</TextAlert>
          ) : null}
          <Label htmlFor="description">Tool description</Label>
          <TextArea
            id="description"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {formik.errors.description && formik.touched.description ? (
            <TextAlert>{formik.errors.description}</TextAlert>
          ) : null}
          <Label htmlFor="tags">Tool Tags</Label>
          <Select
            id="tags"
            name="tags"
            isMulti={true}
            options={options}
            onChange={(value: any) => setTagList(value)}
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
      </Modal>
    </Container>
  )
}

export default ModalNewCard
