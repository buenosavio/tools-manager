import Loading from '../utils/Loading'
import AllCards from './AllCards'
import FilterCards from './FilterCards'
import toolSelector from '../../store/tools/selector'
import { Text } from './ListCards.styles'
import { useEffect } from 'react'
import { filteredItems } from '../../utils/filteredItems'
import { toolActions, ToolState } from '../../store/tools/duck'
import { useDispatch, useSelector } from 'react-redux'

function ListCards({ callMe }: any) {
  const tools = useSelector(toolSelector.get)
  const isLoading = useSelector(toolSelector.isLoading)
  const search = useSelector(toolSelector.search)

  const dispatch = useDispatch()

  useEffect(() => {
    callMe(dispatch(toolActions.load()))
  }, [])

  const toolsFiltered: ToolState[] = filteredItems(tools)

  return (
    <>
      {!isLoading ? (
        tools.length > 0 ? (
          search.length > 0 ? (
            <FilterCards toolsFiltered={toolsFiltered} />
          ) : (
            <AllCards tools={tools} />
          )
        ) : (
          <Text>No tools registered</Text>
        )
      ) : (
        <Loading />
      )}
    </>
  )
}

export default ListCards
