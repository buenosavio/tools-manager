import '@testing-library/jest-dom/extend-expect'
import Enzyme from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

import 'regenerator-runtime/runtime'
import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import { configure } from '@testing-library/dom'

Enzyme.configure({ adapter: new Adapter() })
configure({ testIdAttribute: 'id' })
