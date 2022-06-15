import { CardItem, ItemDetails, RemoveButton } from './Card.styles'

const Card = () => {
  return (
    <CardItem>
      <ItemDetails>
        <h4>Notion</h4>
        <p>Texto....</p>
        <p>Tags.....</p>
      </ItemDetails>
      <RemoveButton>remove</RemoveButton>
    </CardItem>
  )
}

export default Card
