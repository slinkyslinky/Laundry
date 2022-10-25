import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './components/Modal/Modal';
import Table from './components/Table/Table';
import TableList from './components/TableList/TableList';
import { SERVER_URL } from './config/config';
import { updateData } from './logic/actions';
import { store } from './logic/store';



function App() {

  // const [data, setData] = useState('')

  // useEffect(() => {
  //   fetch(SERVER_URL, {
  //     method: "GET"
  //   })
  //     .then(response => response.json())
  //     .then(body => setData(body))



  // }, [])
  const dispatch = useDispatch()
  const data = useSelector((state: any) => state.changeData)
  useEffect(() => {
    dispatch(updateData() as any)


  }, [])




  return (
    <div className="App">
      <div className="container">
        <button onClick={() => {
          fetch(SERVER_URL, {
            method: "DELETE"
          })
            .then(response => response.json())

        }}>DEL</button>
        <TableList data={data} />
        <Modal />
      </div>

    </div>
  );
}

export default App;
