import App from './App'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

// describe('Render App default UI', () => {
//   const initialState = { tools: [], isOnlyTag: true, loading: true, search: '' }
//   const mockStore = configureStore()
//   let store = mockStore(initialState)

//   test('renders correctly by default UI', () => {
//     const tree = renderer.create(
//       <Provider store={store}>
//         <App />
//       </Provider>
//     ).toJSON
//     expect(tree).toMatchSnapshot()
//   })
// })
