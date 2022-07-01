import withProvider from '../../../utils/withContext'
import ListCards from '../ListCards'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'

describe('Test of component <ListCards />', () => {
  const mockCallMe = jest.fn()

  test('Snapshot of component should be ok', () => {
    const initialState = {
      tools: [],
      isOnlyTag: true,
      loading: true,
      search: ''
    }
    const mockStore = configureStore()
    let store = mockStore(initialState)
    const Component = withProvider(ListCards, store)
    const mockCallMe = jest.fn()
    const tree = renderer
      .create(
        <Provider store={store}>
          <ListCards />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('UseEffect to be called', () => {
    const initialState = {
      tools: [],
      isOnlyTag: true,
      loading: true,
      search: ''
    }
    const mockStore = configureStore()
    let store = mockStore(initialState)
    const Component = withProvider(ListCards, store)
    const mockCallMe = jest.fn()
    mount(<Component callMe={mockCallMe} />)
    expect(mockCallMe).toHaveBeenCalled()
  })

  test('Cards should be rendered on document', () => {
    const initialState = {
      tools: [
        {
          id: '1',
          name: 'string',
          link: 'string',
          description: 'string'
        }
      ],
      isOnlyTag: true,
      loading: false,
      search: 'teste'
    }
    const mockStore = configureStore()
    let store = mockStore(initialState)
    const Component = withProvider(ListCards, store)
    const Wrapper = mount(<Component callMe={mockCallMe} />)
    expect(Wrapper).toBeTruthy()
  })
})
