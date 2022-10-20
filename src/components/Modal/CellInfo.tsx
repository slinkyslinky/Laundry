import { render } from '@testing-library/react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CellIndex } from '../../config/types';
import { setCurrentCellIndex } from '../../logic/actions';
import { store } from '../../logic/store';

export default function CellInfo() {
   const dispatch = useDispatch()
   const index = useSelector((state: any) => state.cellIndex)




   return (
      <>

         <p>Сегодня в {index.row}, {index.col} машинка</p>

      </>
   )
}
