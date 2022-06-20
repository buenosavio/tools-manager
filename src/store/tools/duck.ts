import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Tag {
  id: string
  name: string
}

export interface Tool {
  id: string
  name: string
  link: string
  tag: Tag[]
  description: string
}

export interface ToolState {
  tools: Tool[] | []
  isOnlyTag: boolean
}

export const initialState: ToolState = {
  tools: [],
  isOnlyTag: false
}

const toolSlice = createSlice({
  name: 'tools',
  initialState,
  reducers: {
    set: (state, { payload }: PayloadAction<ToolState>) => ({
      ...state,
      ...payload
    }),
    toggleIsOnlyTag: state => ({ ...state, isOnlyTag: !state.isOnlyTag }),
    search: (state, { payload }: PayloadAction<string>) => ({
      ...state,
      tools: state.tools.filter(item => item.name.includes(payload))
    }),
    create: (state, { payload }: PayloadAction<any>) => ({
      ...state,
      tools: state.tools.concat(payload)
    }),
    remove: (state, { payload }: PayloadAction<string>) => ({
      ...state,
      tools: state.tools.filter(tool => tool.name !== payload)
    })
  }
})

export const toolActions = toolSlice.actions
export default toolSlice.reducer
