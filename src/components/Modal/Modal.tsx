import React, { Ref, useEffect, useRef } from 'react'
import { store } from '../../logic/store'
import { Modal as bootstrapModal } from "bootstrap"
import { CellIndex } from '../../config/types'

import { useDispatch, useSelector } from 'react-redux'
import { changeTableData, closeModal, getCellIndex } from '../../logic/actions'
import { CLOSE_MODAL, OPEN_MODAL } from '../../logic/types'
import { TableConfig } from '../../config/config'



export default function Modal() {
   const modalRef: any = useRef()



   useEffect(() => {
      const modal = new bootstrapModal(modalRef.current, {})

      store.subscribe(() => {
         if (store.getState().toggleModal === OPEN_MODAL) {
            modal?.show()

         } else if (store.getState().toggleModal === CLOSE_MODAL) {
            modal?.hide()
         }

      })


   }, [])

   const dispatch = useDispatch()
   const index = useSelector((state: any) => state.cellIndex) as CellIndex
   let dayName: string = '';
   let timeName: string = '';
   let machineName: string = '';

   if (index.day !== -1) {
      dayName = TableConfig.days[index.day][1]
      timeName = TableConfig.rows[index.row][1]
      machineName = TableConfig.columns[index.col][1]
   }

   async function acceptModal() {
      const input = document.getElementById('name-input') as HTMLInputElement
      await dispatch(changeTableData(index.day, index.row, index.col, input.value) as any)
      dispatch(closeModal())
      input.value = ''
   }




   return (
      <div ref={modalRef} className="modal" id='modal' tabIndex={-1}>
         <div className="modal-dialog">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title">Введите вашу фамилию</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div className="modal-body">
                  <input id="name-input" type="name" className="form-control" placeholder="Фамилия" aria-label="Username" aria-describedby="basic-addon1" />
                  <p>{dayName} в {timeName}, {machineName}</p>
               </div>
               <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Отменить</button>
                  <button type="button" className="btn btn-primary" onClick={() => {

                     acceptModal()

                  }}>Подтвердить</button>
               </div>
            </div>
         </div>
      </div>
   )
}
