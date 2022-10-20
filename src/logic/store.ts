
import { applyMiddleware, combineReducers, createStore } from "redux"

import { toggleModalReducer, getCurrentCellIndex, changeTableDataReducer, getInputDataReducer } from "./redusers"


const rootReducer = combineReducers(
   {
      toggleModal: toggleModalReducer,
      cellIndex: getCurrentCellIndex,
      changeData: changeTableDataReducer,
      input: getInputDataReducer
   }
)




export const store = createStore(rootReducer, {}, applyMiddleware())