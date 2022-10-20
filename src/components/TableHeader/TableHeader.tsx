import React from 'react'

export default function TableHeader(props: any) {
   return (
      <th className="bg-primary" scope='col'>{props.title}</th>
   )
}
