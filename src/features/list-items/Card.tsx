import { useState } from 'react'
import {
  CardItem,
  ItemDetails,
  RemoveButton,
  TagsList,
  Title,
  Description
} from './Card.styles'
import RemoveCard from './ModalRemoveCard'

const Card = ({ item }: any) => {
  const [modalOpen, setModalOpen] = useState<boolean>()

  return (
    <CardItem>
      <ItemDetails>
        <Title>{item.name}</Title>
        <Description>{item.description}</Description>
        <TagsList>
          {item.tag[item.tag.length - 1].map((tag: any) => (
            <div key={tag.value}>
              <p>#{tag.label}</p>
            </div>
          ))}
        </TagsList>
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
