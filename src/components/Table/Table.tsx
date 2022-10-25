import React, { useEffect, useRef } from 'react'
import './Table.scss'
import { TableConfig } from '../../config/config'

import Row from '../Row/Row'
import TableHeader from '../TableHeader/TableHeader'

import { store } from '../../logic/store'
import { changeTableData, closeModal, openModal, getCellIndex, updateData } from '../../logic/actions'
import { useDispatch, useSelector } from 'react-redux'
import { configType, tableData } from '../../config/types'
import filterData from '../../utiles/filterData'

export default function Table(props: any) {

   let i: number = 0;
   const table: any = useRef()
   const day: configType = props.day


   useEffect(() => {
      table.current.addEventListener("click", () => {
         console.log('click!');

      })
   }, [])



   const dispatch = useDispatch()


   return (

      <table ref={table}

         className="table table-light  table-bordered border-secondary"

         onClick={(e) => {
            const target = e.target as HTMLTableCellElement
            const row = target.parentElement as HTMLTableRowElement


            if (target.innerHTML === '') {
               store.dispatch(getCellIndex(day[0], row.rowIndex, target.cellIndex))
               dispatch(updateData() as any)
               store.dispatch(openModal())
            }


         }}>
         <caption className='caption-top'>28.09, {day[1]}</caption>
         <thead><tr><th className='bg-primary'></th>{TableConfig.columns.map((item: configType) => {
            return <TableHeader key={item[0]} title={item[1]} />
         })}</tr></thead>
         <tbody >
            {TableConfig.rows.map((item: configType) => {


               i++
               return <Row key={item[0]} row={item} data={filterData(props.data, item[0], "row")} />
            })}
         </tbody>

      </table>

   )
}
