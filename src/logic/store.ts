
import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"

import { toggleModalReducer, getCurrentCellIndex, changeTableDataReducer, getInputDataReducer, getCellDataReducer } from "./redusers"


const rootReducer = combineReducers(
   {
      toggleModal: toggleModalReducer,
      cellIndex: getCurrentCellIndex,
      changeData: changeTableDataReducer,
      input: getInputDataReducer,
      cell: getCellDataReducer
   }
)




export const store = createStore(rootReducer, {}, applyMiddleware(thunk))