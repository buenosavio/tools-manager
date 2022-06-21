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
  loading: boolean
}

export const initialState: ToolState = {
  tools: [],
  isOnlyTag: false,
  loading: true
}

const toolSlice = createSlice({
  name: 'tools',
  initialState,
  reducers: {
    load: state => ({ ...state, loading: false }),
    set: (state, { payload }: PayloadAction<any>) => ({
      ...state,
      tools: payload
    }),
    toggleIsOnlyTag: state => ({ ...state, isOnlyTag: !state.isOnlyTag }),
    search: (state, { payload }: PayloadAction<string>) => ({
      ...state,
      tools: state.tools.filter(item =>
        state.isOnlyTag
          ? //? item.tag.map(tool => tool.name.includes(payload))
            item.description.includes(payload)
          : item.name.includes(payload)
      )
    }),
    create: (state, { payload }: PayloadAction<any>) => ({
      ...state,
      tools: state.tools.concat(payload)
    }),
    remove: (state, { payload }: PayloadAction<string>) => ({
      ...state,
      tools: state.tools.filter(tool => tool.id !== payload)
    })
  }
})

export const toolActions = toolSlice.actions
export default toolSlice.reducer
