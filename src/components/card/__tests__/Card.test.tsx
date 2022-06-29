import withProvider from '../../../utils/withContext'
import renderer from 'react-test-renderer'
import Card from '../Card'
import { store } from '../../../store'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'

describe('Card', () => {
  const tool = {
    id: '1',
    name: 'Tool 1',
    link: 'www.tools.com',
    description: 'description of my tool',
    tag: [
      { id: '1', name: 'tag 1', label: 'label1' },
      { id: '2', name: 'tag 1', label: 'label1' },
      { id: '3', name: 'tag 1', label: 'label1' }
    ]
  }
  const Component = withProvider(Card, store)
  test('Snapshot of component <Card />', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Card item={tool} />
      </Provider>
    )
    expect(tree).toMatchSnapshot()
  })
  test('Click to open modal', () => {
    const componentRedered = mount(<Component item={tool} />)
    componentRedered.find('#remove-btn').at(0).simulate('click')
    expect(componentRedered).toHaveLength(1)
  })
})
