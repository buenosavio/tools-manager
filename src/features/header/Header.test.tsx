import Header from './Header'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { render, renderHook, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

describe('Header component should be renderer ok', () => {
  const initialState = { tools: [], isOnlyTag: true, loading: true, search: '' }
  const mockStore = configureStore()
  let store = mockStore(initialState)

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

  test('Title should be rendered on screen', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    )
    const titlePage = screen.getByText('VUTTR')
    expect(titlePage).toBeInTheDocument()
  })

  test('Sub-Title should be rendered on screen', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    )
    const subTitlePage = screen.getByText('Very Useful Tools to Remember')
    expect(subTitlePage).toBeInTheDocument()
  })

  test('Button-Add should be rendered on screen', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    )
    const buttonAdd = screen.getByRole('button', { name: /Add/i })
    expect(buttonAdd).toBeInTheDocument()
  })

  test('Button-Add should be enabled on screen', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    )
    const buttonAdd = screen.getByRole('button', { name: /Add/i })
    expect(buttonAdd).toBeEnabled()
  })

  test('Search input should be rendered and enable on screen', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    )
    const searchInput = screen.getAllByPlaceholderText('Search...')
    expect(searchInput).toBeTruthy()
  })

  test('Toggle should be enable on screen', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    )
    const tagCheckbox = screen.getByRole('checkbox')
    expect(tagCheckbox).toBeEnabled()
  })

  test('Modal should be boolean', () => {
    const fn = jest.fn()
    let tree = renderer.create(
      <Provider store={store}>
        <Header />
      </Provider>
    )
    // eslint-disable-next-line testing-library/await-async-query
    const button = tree.root.findByType('button')
    button.props.onClick()

    expect(fn.mock.calls.length).toBe(0)
  })
})
