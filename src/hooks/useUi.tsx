import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reducers } from '../reducers/rootReducers'
import { setShowModalCreate, setShowModalTodoDetail, setSelectImportancy } from '../reducers/slices/uiSlice'

export const useUi = () => {
  const uiState = useSelector((state:reducers) => state.uiSlices)
  const dispatch = useDispatch()

  const toggleModalCreate = () => {
    dispatch(setShowModalCreate(!uiState.showModalCreate))
  }
  const toggleModalTodoDetail = () => {
    dispatch(setShowModalTodoDetail(!uiState.showModalTodoDetail))
  }
  const setSelection = (section:string) => {
    dispatch(setSelectImportancy(section))
  }
  return {
    uiState,
    toggleModalCreate,
    toggleModalTodoDetail,
    setSelection
  }
}