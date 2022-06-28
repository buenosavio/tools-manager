import Header from '../Header'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import withProvider from '../../../utils/withContext'

describe('Header: General test of component', () => {
  const initialState = { tools: [], isOnlyTag: true, loading: true, search: '' }
  const mockStore = configureStore()
  let store = mockStore(initialState)

  const Component = withProvider(Header, store)

  const mockModalState = jest.fn()
  jest.mock('react', () => {
    return {
      useState: () => mockModalState
    }
  })

  test('renders correctly by default UI', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Header />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Modal should ne open where click on +Add button', () => {
    const componentRender = mount(<Component />)
    componentRender.find('#add-btn').at(0).simulate('click')
    expect(mockModalState).toHaveLength(0)
  })
})
