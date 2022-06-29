import ListCards from '../ListCards'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { store } from '../../../store'
import { mount, render } from 'enzyme'
import withProvider from '../../../utils/withContext'
import { screen } from '@testing-library/react'

describe('Test of component <ListCards />', () => {
  const Component = withProvider(ListCards, store)
  const mockCallMe = jest.fn()

  test('Snapshot of component should be ok', () => {
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
    mount(<Component callMe={mockCallMe} />)
    expect(mockCallMe).toHaveBeenCalled()
  })
  test('Cards should be rendered on document', () => {})
})
