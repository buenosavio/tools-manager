import ModalNewCard from './ModalNewCard'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { render, screen } from '@testing-library/react'

describe('UI render should be default', () => {
  const initialState = { tools: [], isOnlyTag: true, loading: true, search: '' }
  const mockStore = configureStore()
  const store = mockStore(initialState)

  test('Snap of screen new modal should be renderized correctly', () => {
    const openModal = () => true
    const tree = renderer
      .create(
        <Provider store={store}>
          <ModalNewCard setOpenModal={openModal} />
        </Provider>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})

describe('Form test values', () => {
  const initialState = { tools: [], isOnlyTag: true, loading: true, search: '' }
  const mockStore = configureStore()
  const store = mockStore(initialState)
  const openModal = () => true

  test('input elements should be enable', () => {
    render(
      <Provider store={store}>
        <ModalNewCard setOpenModal={openModal} />
      </Provider>
    )

    const inputName = screen.getByLabelText('Tool Name')
    const inputLink = screen.getByLabelText('Tool Link')
    const inputDesc = screen.getByLabelText('Tool description')

    expect(inputName).toBeEnabled()
    expect(inputLink).toBeEnabled()
    expect(inputDesc).toBeEnabled()
  })

  test('Form onSubmit should call functions correctly', () => {})
})
