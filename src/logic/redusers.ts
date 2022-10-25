import { Action, CellIndex, tableData } from "../config/types"
import { CHANGE_TABLE_DATA, GET_INPUT, GET_CELL_INDEX, CLEAR_INPUT, OPEN_MODAL, NEXT_MODAL, CLOSE_MODAL, GET_CELL_DATA, UPDATE_TABLE_DATA } from "./types"
import { TableConfig } from '../config/config'


export const toggleModalReducer: any = (state = '', action: Action): string => {
   switch (action.type) {
      case OPEN_MODAL:
         return OPEN_MODAL
      case NEXT_MODAL:
         return NEXT_MODAL
      case CLOSE_MODAL:
         return CLOSE_MODAL
      default:
         return state
   }
}


export const getCurrentCellIndex: any = (state: CellIndex = { day: -1, col: -1, row: -1 }, action: Action): CellIndex => {
   switch (action.type) {
      case GET_CELL_INDEX:
         return {
            day: action.payload.day,
            row: action.payload.row - 1,
            col: action.payload.col - 1,
         }
      default:
         return state
   }
}


const initTableData: tableData = TableConfig.days.map((day: any) => [...TableConfig.rows.map((row: any) => [...TableConfig.columns.map((col: any) => '')])]) as tableData




export const changeTableDataReducer: any = (state: any = [], action: Action): any[] => {
   switch (action.type) {
      case CHANGE_TABLE_DATA:


         const newObj = { day: action.payload.payload.day, row: action.payload.payload.row, col: action.payload.payload.col, body: action.payload.payload.body }


         return [...state, newObj]
      case UPDATE_TABLE_DATA:
         console.log(action.payload);

         return action.payload
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
export const getCellDataReducer: any = (state: string = '', action: Action): string => {
   switch (action.type) {
      case GET_CELL_DATA:
         return action.payload
      default:
         return state
   }
}