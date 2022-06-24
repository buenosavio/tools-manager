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
  overflow: auto;
`
export const Modal = styled.div`
  width: 500px;
  height: 450px;
  background: white;
  border-radius: 5px;
  padding-inline: 28px;
  padding-top: 5px;
  box-sizing: border-box;
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
`
export const Label = styled.label`
  line-height: 23px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`
export const TextArea = styled.textarea`
  background: #f5f4f6;
  border: 1px solid #ebeaed;
  border-radius: 5px;

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
  color: #365df0;
  font-size: 18px;
  background-color: #e1e7fd;
  :hover {
    background-color: #c6d1f8;
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
  justify-content: end;
  gap: 8px;
  margin-top: 15px;
`
export const TextAlert = styled.p`
  color: red;
  margin: 0;
  line-height: 1px;
  font-size: 18px;
  text-align: end;
`
