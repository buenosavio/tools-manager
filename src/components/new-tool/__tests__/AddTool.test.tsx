import ModalNewCard from '../AddTool'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import withProvider from '../../../utils/withContext'
import { mount } from 'enzyme'

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

  const Component = withProvider(ModalNewCard, store)

  test('input elements should be clickabed', () => {
    const renderComponent = mount(<Component setOpenModal={openModal} />)
    renderComponent.find('#tool-name').at(0).simulate('click')
  })
})
