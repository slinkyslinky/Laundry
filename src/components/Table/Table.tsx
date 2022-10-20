import React, { useEffect, useRef } from 'react'
import './Table.scss'
import { TableConfig } from '../../config/config'

import Row from '../Row/Row'
import TableHeader from '../TableHeader/TableHeader'

import { store } from '../../logic/store'
import { closeModal, openModal, setCurrentCellIndex } from '../../logic/actions'
import { useSelector } from 'react-redux'
import { tableData } from '../../config/types'

export default function Table() {

   let i: number = 0;
   const table: any = useRef()

   useEffect(() => {
      table.current.addEventListener("click", () => {
         console.log('click!');

      })
   }, [])

   const data: tableData = useSelector((state: any) => state.changeData)
   console.log(data);

   return (

      <table ref={table}
         className="table table-light  table-bordered border-secondary"

         onClick={(e) => {
            const target = e.target as HTMLTableCellElement
            const row = target.parentElement as HTMLTableRowElement
            const table = row.closest('table') as HTMLTableElement

            store.dispatch(openModal())
            store.dispatch(setCurrentCellIndex(row.rowIndex, target.cellIndex))

         }}>
         <thead><tr><th className='bg-primary'></th>{TableConfig.columns.map(item => {
            return <TableHeader key={item} title={item} />
         })}</tr></thead>
         <tbody >
            {TableConfig.rows.map(item => {
               i++
               return <Row key={item} title={item} data={data[i - 1]} />
            })}
         </tbody>

      </table>
   )
}
