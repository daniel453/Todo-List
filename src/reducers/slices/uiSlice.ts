import { createSlice } from "@reduxjs/toolkit";
import { uiSliceI } from "../../models/InitialState.model";

const initialState:uiSliceI = {
  showModalCreate: false,
  showModalTodoDetail: false,
  importancySelected: "All",
  errorsAddTodo: [
    { Type: 'inputText', error: false},
    { Type: 'dropdown', error: false},
    { Type: 'textArea', error: false}
  ]
}

export const uiSlice = createSlice({
  name: 'uiSlice',
  initialState: initialState,
  reducers: {
    setShowModalCreate: (state,action:{payload: boolean}) => {
      state.showModalCreate = action.payload
    },
    setShowModalTodoDetail: (state,action:{payload: boolean}) => {
      state.showModalTodoDetail = action.payload
    },
    setSelectImportancy: (state,action:{payload:string}) => {
      switch (action.payload) {
        case 'Hight':
          state.importancySelected = 'Hight'
          break;
        case 'Medium':
          state.importancySelected = 'Medium'
          break;
        case 'Low':
          state.importancySelected = 'Low'
          break;
        default:
          state.importancySelected = 'All'
          break;
      }
    },
    seterrorsAddTodo: (state,action) => {
      state.errorsAddTodo = action.payload
    }
  }
})

export const { setSelectImportancy, setShowModalCreate, setShowModalTodoDetail, seterrorsAddTodo } = uiSlice.actions