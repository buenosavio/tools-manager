import { Modal, Container, TitleForm } from './ModalRemoveCard.styles'
import removeIcon from '../../media/removeIcon.svg'
import {
  ButtonCancel,
  ButtonAdd,
  FooterForm
} from '../form/ModalNewCard.styles'
// import { ButtonAdd, ButtonCancel } from '../header/Header.styles'

interface HandleOpen {
  handleOpen: (arg0: boolean) => void
}

const RemoveCard = ({ handleOpen }: HandleOpen) => {
  return (
    <Container>
      <Modal>
        <TitleForm>
          <img src={removeIcon} />
          Remove tool
        </TitleForm>
        <h3>Are you sure you want to remove?</h3>
        <FooterForm>
          <ButtonCancel onClick={() => handleOpen(false)}>Cancel</ButtonCancel>
          <ButtonAdd>Yes, remove</ButtonAdd>
        </FooterForm>
      </Modal>
    </Container>
  )
}

export default RemoveCard
