import { Action } from "../config/types"
import { CHANGE_TABLE_DATA, GET_INPUT, GET_CELL_INDEX, CLEAR_INPUT } from "./types"

export function openModal(): Action {
   return { type: true }
}

export function closeModal(): Action {
   return { type: false }
}

export function setCurrentCellIndex(row: number, col: number): Action {
   return { type: GET_CELL_INDEX, payload: { row, col } }
}

export function changeTableData(row: number, col: number, body: string): Action {
   return { type: CHANGE_TABLE_DATA, payload: { row, col, body } }
}
export function getInput(data: string): Action {
   return { type: GET_INPUT, payload: data }
}
export function clearInput(): Action {
   return { type: CLEAR_INPUT }
}