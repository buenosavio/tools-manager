import removeIcon from '../../media/removeIcon.svg'
import styled from 'styled-components'

export const CardItem = styled.div`
  position: relative;
  background: #fdfdfd;
  box-shadow: 5px 6px 7px rgba(0, 0, 0, 0.25);
  border: 1px solid #764e9e2c;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  margin-bottom: 30px;
`

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-width: 100%;
`

export const RemoveButton = styled.button`
  position: absolute;
  top: 10%;
  left: 92%;
  width: 98px;
  background: none;
  border: none;
  background-image: url(${removeIcon});
  background-repeat: no-repeat;
  background-position: 0% 50%;
  font-size: 18px;
  :hover {
    cursor: pointer;
  }
`

export const TagsList = styled.div`
  min-width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: start;
  font-size: 18px;
  font-weight: 700;
  color: #170c3a;
`

export const Title = styled.p`
  font-weight: 400;
  font-size: 24px;
  color: #170c3a;
`

export const Description = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: #170c3a;
`
