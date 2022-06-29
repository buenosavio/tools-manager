import renderer from 'react-test-renderer'
import { store } from '../../../store'
import withProvider from '../../../utils/withContext'
import RemoveTool from '../RemoveTool'

describe('RemoveTool', () => {
  const item = { tools: [], isOnlyTag: true, loading: true, search: '' }
  const Component = withProvider(RemoveTool, store)
  test('Snapshot of component', () => {
    const tree = renderer
      .create(<Component item={item} handleOpen={() => {}} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
