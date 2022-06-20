import { Modal, Container, TitleForm } from './ModalRemoveCard.styles'
import removeIcon from '../../media/removeIcon.svg'
import {
  ButtonCancel,
  ButtonAdd,
  FooterForm
} from '../form/ModalNewCard.styles'
import { useDispatch } from 'react-redux'
import { toolActions } from '../../store/tools/duck'

interface HandleOpen {
  item: any
  handleOpen: (arg0: boolean) => void
}

const RemoveCard = ({ item, handleOpen }: HandleOpen) => {
  const dispatch = useDispatch()

  const removeF = (e: any) => {
    console.log(e)
  }

  return (
    <Container>
      <Modal>
        <TitleForm>
          <img src={removeIcon} alt="Imagem de um ícone em X" />
          Remove tool
        </TitleForm>
        <h3>Are you sure you want to remove?</h3>
        <FooterForm>
          <ButtonCancel onClick={() => handleOpen(false)}>Cancel</ButtonCancel>
          <ButtonAdd onClick={() => dispatch(toolActions.remove(item.name))}>
            Yes, remove
          </ButtonAdd>
        </FooterForm>
      </Modal>
    </Container>
  )
}

export default RemoveCard
