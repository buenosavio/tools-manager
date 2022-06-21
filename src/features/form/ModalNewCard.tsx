import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { toolActions } from '../../store/tools/duck'
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
  FooterForm
} from './ModalNewCard.styles'

interface OpenModal {
  setOpenModal: (arg0: boolean) => void
}

const ModalNewCard = ({ setOpenModal }: OpenModal) => {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      link: '',
      tag: [],
      id: ''
    },
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
          <Label htmlFor="link">Tool Link</Label>
          <Input
            type="text"
            name="link"
            id="link"
            onChange={formik.handleChange}
            value={formik.values.link}
          />
          <Label htmlFor="description">Tool description</Label>
          <TextArea
            id="description"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          <Label htmlFor="tags">Tool Tags</Label>
          <Input
            type="text"
            id="tag"
            name="tag"
            onChange={formik.handleChange}
            value={formik.values.tag}
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
