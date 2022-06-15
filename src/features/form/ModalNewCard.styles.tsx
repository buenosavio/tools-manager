import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  max-width: 1200px;
  min-height: 1000vh;
  background: rgba(200, 200, 200, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`
export const Modal = styled.div`
  width: 500px;
  height: 400px;
  background: white;
  border-radius: 5px;
  position: fixed;
  top: 20%;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  line-height: 30px;
  background-color: white;
`

export const TitleForm = styled.p`
  color: #170c3a;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  margin-inline: 28px;
`
export const Label = styled.label`
  margin-inline: 28px;
  line-height: 23px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`
export const TextArea = styled.textarea`
  background: #f5f4f6;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  margin-inline: 28px;

  line-height: 23px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  margin-bottom: 15px;
  resize: none;
  :focus {
    outline-color: #ebeaed55;
  }
`

export const Input = styled.input`
  background: #f5f4f6;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  height: 30px;
  margin-inline: 28px;
  margin-bottom: 15px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  :focus {
    outline-color: #ebeaed55;
  }
`

export const ButtonCancel = styled.button`
  width: 120px;
  height: 45px;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  background-color: #00000053;
  :hover {
    background-color: #24242452;
  }
`

export const ButtonAdd = styled.button`
  width: 120px;
  height: 45px;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  background-color: #365df0;
  :hover {
    background-color: #496ff7;
  }
`

export const FooterForm = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-inline: 28px;
  margin-bottom: 25px;
`
