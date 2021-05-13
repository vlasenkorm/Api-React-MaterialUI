import React, { useState, useEffect } from 'react'
import DataTable from './Component/dataTable'
import Button from '@material-ui/core/Button';
import axios from 'axios'

const App = () => {
  // Use State
  const [list, setList] = useState([])
  
  // Use Effect
  useEffect(() => fetchList(), [])

  // CRUD operations

  const fetchList = async () => {
    console.time('Get allList')
    const res = await axios('http://localhost:4000/api/v1/flight')
    console.timeEnd('Get allList')
    setList(res.data);
  }

  const deleteRow = async (id) => {
    console.time('delete query')
    const res = await axios.delete(`http://localhost:4000/api/v1/flight/${id}`)
    console.timeEnd('delete query')
    if (res.status === 204) {
      alert('Deleted :' + id)
      fetchList()
    } else {
      alert('Delete errore')
    }
  }

  const getRow = async (id) => {
    const result = await axios(
      `http://localhost:4000/api/v1/flight/${id}`,
    );
    return result
  }

  // const updateStatus = (id, updatedUser) => {
  //   setEditing(false)
  //   setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  // }

  const editRow = list => {
    // setEditing(true)
    // setCurrentRow({ id: list.id })
  }

  return (
    <div className="container">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <h2>List Flight</h2>
        <div>
          <Button variant="outlined" onClick={fetchList}>refresh</Button>
        </div>
      </div>
      <DataTable list={list} editRow={editRow} deleteRow={deleteRow} getRow={getRow} />
    </div>
  )
}

export default App
