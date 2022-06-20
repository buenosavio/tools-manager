import { useDispatch, useSelector } from 'react-redux'
import Card from './Card'
import toolSelector from '../../store/tools/selector'
import toolsActions from '../../store/tools/duck'

function ListCards() {
  const dispatch = useDispatch()
  const tools = useSelector(toolSelector.get)
  const isOnlyTag = useSelector(toolSelector.isOnlyTag)
  console.log(tools)

  return (
    <div>
      {tools.map(tool => (
        <Card item={tool} key={tool.id} />
      ))}
    </div>
  )
}

export default ListCards
