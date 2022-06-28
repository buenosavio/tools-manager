import { Modal, Container, TitleForm } from './ModalRemoveCard.styles'
import removeIcon from '../../media/removeIcon.svg'
import { ButtonCancel, ButtonAdd, FooterForm } from '../new-tool/AddTool.styles'
import { useDispatch } from 'react-redux'
import { toolActions } from '../../store/tools/duck'

interface HandleOpen {
  item: any
  handleOpen: (arg0: boolean) => void
}

const RemoveCard = ({ item, handleOpen }: HandleOpen) => {
  const dispatch = useDispatch()
  console.log(item)

  const removeTool = (item: any) => {
    dispatch(toolActions.remove(item.id))
    handleOpen(false)
  }

  return (
    <Container>
      <Modal>
        <TitleForm>
          <img src={removeIcon} alt="Imagem de um ícone em X" />
          Remove tool
        </TitleForm>
        <h3>Are sure you want to remove?</h3>
        <FooterForm>
          <ButtonCancel onClick={() => handleOpen(false)}>Cancel</ButtonCancel>
          <ButtonAdd onClick={() => removeTool(item)}>Yes, remove</ButtonAdd>
        </FooterForm>
      </Modal>
    </Container>
  )
}

export default RemoveCard
