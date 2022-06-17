import styled from 'styled-components'

export const Container = styled.div`
  background: rgba(200, 200, 200, 0.8);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

export const Modal = styled.div`
  width: 500px;
  height: 200px;
  background: white;
  border-radius: 5px;
  padding: 28px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const TitleForm = styled.div`
  color: #170c3a;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  display: flex;
  gap: 8px;
`
