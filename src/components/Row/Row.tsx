import React from 'react'
import { TableConfig } from '../../config/config'
import { configType } from '../../config/types';
import filterData from '../../utiles/filterData';
import Cell from '../Cell/Cell'

export default function Row(props: any) {

   let i: number = 0;



   return (
      <tr  ><th scope='row' className='bg-primary'>{props.row[1]}</th>
         {TableConfig.columns.map((item: configType) => {
            i++
            return <Cell key={item[0] + props.row[0]} col={item} data={filterData(props.data, item[0], "col")} />

         })}</tr>
   )
}
