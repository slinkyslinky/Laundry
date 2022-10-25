import React from 'react'
import { useSelector } from 'react-redux';
import { TableConfig } from '../../config/config'
import { configType, tableData } from '../../config/types';
import filterData from '../../utiles/filterData'
import Table from '../Table/Table'

export default function TableList(props: any) {



   return (
      <div className="table-list">
         {TableConfig.days.map((item: configType) => { return <Table key={item[0]} day={item} data={filterData(props.data, item[0], "day")} /> })}
      </div>
   )
}
