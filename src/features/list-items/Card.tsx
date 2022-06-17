import { useState } from 'react'
import { CardItem, ItemDetails, RemoveButton } from './Card.styles'
import RemoveCard from './ModalRemoveCard'

const Card = () => {
  const [modalOpen, setModalOpen] = useState<boolean>()

  return (
    <CardItem>
      <ItemDetails>
        <h4>Notion</h4>
        <p>Texto....</p>
        <p>Tags.....</p>
      </ItemDetails>
      <RemoveButton
        onClick={() => {
          setModalOpen(true)
        }}
      >
        remove
      </RemoveButton>
      {modalOpen && <RemoveCard handleOpen={setModalOpen} />}
    </CardItem>
  )
}

export default Card
