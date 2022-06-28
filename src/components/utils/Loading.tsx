import styled from 'styled-components'
import loading from '../../media/loading.gif'

export const CenterItems = styled.div`
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30%;
`
const Loading = () => {
  return (
    <CenterItems>
      <img src={loading} alt="" />
      <h2>Loading....</h2>
    </CenterItems>
  )
}

export default Loading
