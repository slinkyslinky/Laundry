import React from 'react'
import { useSelector } from 'react-redux'

export default function Cell(props: any) {


   console.log(props.data);



   return (
      // <td >{props.number + '/' + props.col}</td>
      <td >{props.data}</td>
   )
}
