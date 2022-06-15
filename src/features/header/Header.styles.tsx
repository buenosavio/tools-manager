import styled from 'styled-components'
import searchIcon from '../../media/findIcon.svg'
import plusIcon from '../../media/plusIcon.svg'

export const HeaderMain = styled.header`
  display: flex;
  flex-direction: column;
  line-height: 0px;
  margin: 0 auto;
  max-width: 1200px;
  margin-bottom: 30px;
`

export const TitlePage = styled.h1`
  font-weight: 700;
  font-size: 42px;
  line-height: 0px; //53
  color: #170c3a;
`

export const SubTitlePage = styled.h3`
  font-weight: 700;
  font-size: 30px;
  line-height: 0px; //38
  color: #170c3a;
`

export const SearchSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100%;
`

export const InputSearch = styled.input`
  box-sizing: border-box;
  width: 363.41px;
  height: 50px;
  padding: 13px 39px;
  margin-right: 14px;
  background: #f5f4f6;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  font-weight: 400;
  font-size: 20px;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: 3% 50%;
`

export const SpanSearchTags = styled.span`
  color: #170c3a;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
`

export const ButtonAdd = styled.button`
  width: 195.75px;
  height: 50px;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  background-color: #365df0;
  background-image: url(${plusIcon});
  background-repeat: no-repeat;
  background-position: 11% 50%;
  :hover {
    background-color: #496ff7;
  }
`
