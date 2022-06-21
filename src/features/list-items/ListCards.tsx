import { useDispatch, useSelector } from 'react-redux'
import Card from './Card'
import toolSelector from '../../store/tools/selector'
import { useEffect } from 'react'
import { toolActions } from '../../store/tools/duck'
import Loading from '../utils/Loading'

function ListCards() {
  const tools = useSelector(toolSelector.get)
  const isLoading = useSelector(toolSelector.isLoading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(toolActions.load())
  }, [])

  return (
    <div>
      {!isLoading ? (
        tools.length > 0 ? (
          tools.map((tool, i) => <Card item={tool} key={i} />)
        ) : (
          <p
            style={{
              display: 'flex',
              justifyContent: 'center',
              fontSize: '30px',
              marginTop: '30%'
            }}
          >
            No tools registered
          </p>
        )
      ) : (
        <Loading />
      )}
    </div>
  )
}

export default ListCards
