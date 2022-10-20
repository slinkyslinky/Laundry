interface ITable {
   days: string[],

   rows: string[],
   columns: (string | number)[]
}


export const TableConfig: ITable = {
   days: [
      "saturday",
      "sunday"
   ],

   rows: [
      '9',
      '10',
      '11',
      '19',
      '20',
      '21',
   ],
   columns: [
      1, 2, 3, 4, 5, 6, 7, 8, "Сушилка"
   ]
} 