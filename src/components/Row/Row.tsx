import React from 'react'
import { TableConfig } from '../../config/config'
import Cell from '../Cell/Cell'

export default function Row(props: any) {

   let i: number = 0;

   return (
      <tr  ><th scope='row' className='bg-primary'>{props.title}</th>
         {TableConfig.columns.map(item => {
            i++
            return <Cell key={item + props.title} row={props.title} data={props.data[i - 1]} col={i} />

         })}</tr>
   )
}
