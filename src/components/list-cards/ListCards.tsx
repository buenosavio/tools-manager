import { useDispatch, useSelector } from 'react-redux'
import Card from '../card/Card'
import toolSelector from '../../store/tools/selector'
import { useEffect } from 'react'
import { Tag, Tool, toolActions } from '../../store/tools/duck'
import Loading from '../utils/Loading'
import { Text } from './ListCards.styles'

function ListCards() {
  const tools = useSelector(toolSelector.get)
  const isLoading = useSelector(toolSelector.isLoading)
  const search = useSelector(toolSelector.search)
  const isOnlyTag = useSelector(toolSelector.isOnlyTag)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(toolActions.load())
  }, [])

  const filtered = tools.filter(
    (tool: any) =>
      !isOnlyTag
        ? tool.name.toLowerCase().includes(search.toLowerCase())
        : tool.description.toLowerCase().includes(search.toLowerCase()) //funciona
    // : tool.tag[tool.tag.length - 1].map(
    //     (item: Tag) =>
    //       item.label.toLowerCase().includes(search.toLowerCase())
    //     //console.log(item.label)
    //   )
  )

  console.log(search, 'filter: ', filtered)

  return (
    <div>
      {!isLoading ? (
        tools.length > 0 ? (
          search.length > 0 ? (
            <>
              {filtered.map((item, i) => (
                <Card item={item} key={i} />
              ))}
            </>
          ) : (
            tools.map((tool, i) => <Card item={tool} key={i} />)
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
