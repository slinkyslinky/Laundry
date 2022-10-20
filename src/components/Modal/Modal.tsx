import React, { Ref, useEffect, useRef } from 'react'
import { store } from '../../logic/store'
import { Modal as bootstrapModal } from "bootstrap"
import { CellIndex } from '../../config/types'
import CellInfo from './CellInfo'
import { useDispatch, useSelector } from 'react-redux'
import { changeTableData, closeModal, setCurrentCellIndex } from '../../logic/actions'



export default function Modal() {
   const modalRef: any = useRef()



   useEffect(() => {
      const modal = new bootstrapModal(modalRef.current, {})

      store.subscribe(() => {
         if (store.getState().toggleModal === true) {
            modal?.show()

         } else {
            modal?.hide()
         }

      })

   }, [])

   const dispatch = useDispatch()
   const index = useSelector((state: any) => state.cellIndex) as CellIndex





   return (
      <div ref={modalRef} className="modal" id='modal' tabIndex={-1}>
         <div className="modal-dialog">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title">Введите вашу фамилию</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div className="modal-body">
                  <input id="name-input" type="text" className="form-control" placeholder="Фамилия" aria-label="Username" aria-describedby="basic-addon1" />
                  <CellInfo />
               </div>
               <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Отменить</button>
                  <button type="button" className="btn btn-primary" onClick={() => {

                     const input = document.getElementById('name-input') as HTMLInputElement

                     dispatch(changeTableData(index.row, index.col, input.value))
                     dispatch(closeModal())

                     input.value = ''
                  }}>Дальше</button>
               </div>
            </div>
         </div>
      </div>
   )
}
