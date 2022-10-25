import { configType } from "./types"

interface ITable {
   days: configType[],
   rows: configType[],
   columns: configType[]
}

export const SERVER_URL = "http://localhost:3001/"
export const SERVER_PORT = 3001


export const TableConfig: ITable = {
   days: [
      [0, "Суббота"],
      [1, "Воскресенье"]
   ],

   rows: [
      [0, "9"],
      [1, "11"],
      [2, "13"],
      [3, "18"],
      [4, "20"],
      [5, "22"],
   ],
   columns: [
      [0, "Машинка 1"],
      [1, "Машинка 2"],
      [2, "Машинка 3"],
      [3, "Машинка 4"],
      [4, "Машинка 5"],
      [5, "Машинка 6"],
      [6, "Машинка 7"],
      [7, "Машинка 8"],
      [8, "Сушилка"],
   ]
}

// fetch(SERVER_URL + "data/config/tableConfig", {
//    method: "GET"
// })

//    .then(response => response.json())
//    .then(body => TableConfig = { ...body })


// async function getTableConfig() {
//    let TableConfig;
//    fetch(SERVER_URL + "data/config/tableConfig", {
//       method: "GET"
//    })

//       .then(response => response.json())
//       .then(body =>  await TableConfig = { ...body })
//    return TableConfig
// }

// console.log(getTableConfig());
