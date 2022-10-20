import { Action, CellIndex, tableData } from "../config/types"
import { CHANGE_TABLE_DATA, GET_INPUT, GET_CELL_INDEX, CLEAR_INPUT } from "./types"
import { TableConfig } from '../config/config'

export const toggleModalReducer: any = (state = false, action: Action): boolean => {
   switch (action.type) {
      case true:
         return true
      case false:
         return false
      default:
         return state
   }
}


export const getCurrentCellIndex: any = (state: CellIndex = { col: -1, row: -1 }, action: Action): CellIndex => {
   switch (action.type) {
      case GET_CELL_INDEX:
         return {
            row: action.payload.row,
            col: action.payload.col,
         }
      default:
         return state
   }
}

const initTableData: tableData = TableConfig.rows.map((row: any) => { return [...TableConfig.columns.map((col: any) => '')] }) as tableData

export const changeTableDataReducer: any = (state: tableData = initTableData, action: Action): tableData => {
   switch (action.type) {
      case CHANGE_TABLE_DATA:

         state[action.payload.row - 1][action.payload.col - 1] = action.payload.body
         return [...state]
      default:
         return state
   }
}
export const getInputDataReducer: any = (state: string = '', action: Action): string => {
   switch (action.type) {
      case GET_INPUT:
         return action.payload
      case CLEAR_INPUT:
         return ''
      default:
         return state
   }
}