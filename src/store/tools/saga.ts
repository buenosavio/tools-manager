import { api } from '../../services/api'
import { Notify } from 'notiflix/build/notiflix-notify-aio'
import { PayloadAction } from '@reduxjs/toolkit'
import { Tool, toolActions, ToolState } from './duck'
import {
  all,
  call,
  CallEffect,
  PutEffect,
  put,
  takeLatest
} from '@redux-saga/core/effects'

const fetchTools = async () => {
  const response = await api.get(`/tools`)
  console.log('fetchTools()', response.data)
  return response.data
}

const createTool = async (payload: void) => {
  const response = await api.post(`/tools`, payload)
  return response.data
}

const removeTool = async (payload: void) => {
  const response = await api.delete(`/tools/${payload}`)
  return response.data
}

function* load(): Generator<CallEffect<Tool[]> | PutEffect, void, Tool[]> {
  try {
    const response = yield call(fetchTools)
    yield put(toolActions.set(response))
    console.log('load()', response)
  } catch (error) {
    console.log('Error: ', error)
  }
}

function* create(action: PayloadAction) {
  try {
    yield createTool(action.payload)
    Notify.success('Tool saved successfully')
  } catch (error) {
    Notify.failure('Error. Try again')
  }
}

function* remove(action: PayloadAction) {
  try {
    yield removeTool(action.payload)
    Notify.success('Tool removed successfully')
  } catch (error) {
    Notify.failure('Error. Try again')
  }
}

export default function* toolSaga(): Generator {
  yield all([
    takeLatest(toolActions.load, load),
    takeLatest(toolActions.create, create),
    takeLatest(toolActions.remove.type, remove)
  ])
}
