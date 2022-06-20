import { useState } from 'react'
import { CardItem, ItemDetails, RemoveButton } from './Card.styles'
import RemoveCard from './ModalRemoveCard'

const Card = ({ item }: any) => {
  const [modalOpen, setModalOpen] = useState<boolean>()
  return (
    <CardItem>
      <ItemDetails>
        <h4>{item.name}</h4>
        <p>{item.description}</p>
        {item.tag.map((tag: any) => (
          <div key={tag.id}>
            <p>#{tag.name}</p>
          </div>
        ))}
      </ItemDetails>
      <RemoveButton
        onClick={() => {
          setModalOpen(true)
        }}
      >
        remove
      </RemoveButton>
      {modalOpen && <RemoveCard handleOpen={setModalOpen} item={item} />}
    </CardItem>
  )
}

export default Card
