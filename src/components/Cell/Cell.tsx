import React from 'react'
import { useSelector } from 'react-redux'

export default function Cell(props: any) {


   let color = ''

   if (props.data == '') {
      color = ''
   } else {
      color = 'bg-danger'
   }





   return (
      // <td >{props.number + '/' + props.col}</td>
      <td className={color}>{props.data[0]?.body}</td>
   )
}
