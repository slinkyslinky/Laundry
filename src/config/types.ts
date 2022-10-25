export type Action = {
   type: any,
   payload?: any
}
export type CellIndex = {
   day: number,
   row: number,
   col: number
}
export type configType = [
   number,
   string
]

export type tableData = [
   [
      string[]
   ]
]