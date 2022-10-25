import { useSelector } from "react-redux"
import { SERVER_URL } from "../config/config"
import { Action } from "../config/types"

import { CHANGE_TABLE_DATA, GET_INPUT, GET_CELL_INDEX, CLEAR_INPUT, OPEN_MODAL, NEXT_MODAL, CLOSE_MODAL, GET_CELL_DATA, UPDATE_TABLE_DATA } from "./types"

export function openModal(): Action {
   return { type: OPEN_MODAL }
}
export function nextModal(): Action {
   return { type: NEXT_MODAL }
}

export function closeModal(): Action {
   return { type: CLOSE_MODAL }
}

export function getCellIndex(day: number, row: number, col: number): Action {
   return { type: GET_CELL_INDEX, payload: { day, row, col } }
}

export function changeTableData(day: number, row: number, col: number, body: string) {
   return function (dispatch: any) {
      fetch(SERVER_URL + 'data/data', {
         method: "POST",
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ type: CHANGE_TABLE_DATA, payload: { day, row, col, body } })
      })
         .then(response => response.json())
         .then(body => {

            // window.location.reload()



            return dispatch({ type: CHANGE_TABLE_DATA, payload: body })
         });
   }
}
export function updateData() {
   return function (dispatch: any) {
      fetch(SERVER_URL, {
         method: "GET"
      })
         .then(response => response.json())
         .then(body => {


            return dispatch({ type: UPDATE_TABLE_DATA, payload: body })
         });
   }
}

export function getCellData(data: string): any {
   return async function (dispatch: any) {
      return await dispatch({ type: GET_CELL_DATA, payload: data })
   }
}

export function getInput(data: string): Action {
   return { type: GET_INPUT, payload: data }
}


export function clearInput(): Action {
   return { type: CLEAR_INPUT }
}