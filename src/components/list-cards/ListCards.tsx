import { useDispatch, useSelector } from 'react-redux'
import Card from '../card/Card'
import toolSelector from '../../store/tools/selector'
import { useEffect } from 'react'
import { Tag, Tool, toolActions } from '../../store/tools/duck'
import Loading from '../utils/Loading'
import { Text } from './ListCards.styles'
import { filteredItems } from '../../utils/filteredItems'

function ListCards({ callMe }: any) {
  const tools = useSelector(toolSelector.get)
  const isLoading = useSelector(toolSelector.isLoading)
  const search = useSelector(toolSelector.search)
  const isOnlyTag = useSelector(toolSelector.isOnlyTag)

  const dispatch = useDispatch()

  useEffect(() => {
    callMe(dispatch(toolActions.load()))
  }, [])

  const filtered: any = filteredItems(tools)

  return (
    <div>
      {!isLoading ? (
        tools.length > 0 ? (
          search.length > 0 ? (
            <>
              {filtered.map(({ item, i }: any) => (
                <Card item={item} key={i} role="alert" />
              ))}
            </>
          ) : (
            tools.map((tool, i) => <Card item={tool} key={i} role="alert" />)
          )
        ) : (
          <Text>No tools registered</Text>
        )
      ) : (
        <Loading />
      )}
    </div>
  )
}

export default ListCards
