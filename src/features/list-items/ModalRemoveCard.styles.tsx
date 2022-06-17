import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background: rgba(200, 200, 200, 0.8);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
`

export const Modal = styled.div`
  width: 500px;
  height: 200px;
  max-height: 100vh;
  background: white;
  border-radius: 5px;
  position: fixed;
  padding: 28px;
  box-sizing: border-box;
  top: 50%;
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
