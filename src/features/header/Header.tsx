import {
  ButtonAdd,
  HeaderMain,
  InputSearch,
  TitlePage,
  SubTitlePage,
  SpanSearchTags,
  SearchSection
} from './Header.styles'
import ModalNewCard from '../form/ModalNewCard'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toolActions } from '../../store/tools/duck'

const Header = () => {
  const dispatch = useDispatch()
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <HeaderMain>
      <TitlePage>VUTTR</TitlePage>
      <SubTitlePage>Very Useful Tools to Remember</SubTitlePage>
      <SearchSection>
        <div>
          <InputSearch
            type="text"
            name="search"
            placeholder="Search..."
            onChange={e => dispatch(toolActions.search(e.target.value))}
          />
          <input
            type="checkbox"
            onClick={() => dispatch(toolActions.toggleIsOnlyTag())}
          />
          <SpanSearchTags>search in tags only</SpanSearchTags>
        </div>
        <ButtonAdd onClick={() => setModalOpen(true)}>Add</ButtonAdd>
        {modalOpen && <ModalNewCard setOpenModal={setModalOpen} />}
      </SearchSection>
    </HeaderMain>
  )
}

export default Header
