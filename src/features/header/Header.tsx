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

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <HeaderMain>
      <TitlePage>VUTTR</TitlePage>
      <SubTitlePage>Very Useful Tools to Remember</SubTitlePage>
      <SearchSection>
        <div>
          <InputSearch type="text" placeholder="Search..." />
          <input type="checkbox" />
          <SpanSearchTags>search in tags only</SpanSearchTags>
        </div>
        <ButtonAdd onClick={() => setModalOpen(true)}>Add</ButtonAdd>
        {modalOpen && <ModalNewCard setOpenModal={setModalOpen} />}
      </SearchSection>
    </HeaderMain>
  )
}

export default Header
