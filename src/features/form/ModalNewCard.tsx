import { useState } from 'react'
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
  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('Ei', e.target.value)
    setOpenModal(false)
  }

  const [nome, setNome] = useState()

  return (
    <Container>
      <Modal>
        <Form onSubmit={e => handleSubmit(e)}>
          <TitleForm> + Add new tool</TitleForm>
          <Label>Tool Name</Label>
          <Input type="text" name="name" />
          <Label>Tool Link</Label>
          <Input type="text" />
          <Label>Tool description</Label>
          <TextArea />
          <Label>Tool Tags</Label>
          <Input type="text" />

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
