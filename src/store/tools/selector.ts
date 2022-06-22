import { AppState } from '../rootReducer'
import { Tool } from './duck'

const tools = (state: AppState): Tool[] => state.tools.tools
const isOnlyTag = (state: AppState): boolean => state.tools.isOnlyTag
const isLoading = (state: AppState): boolean => state.tools.loading
const search = (state: AppState): string => state.tools.search

export default { get: tools, isOnlyTag, isLoading, search }
