import React, { useState, useEffect } from 'react'
import DataTable from './Table/dataTable'
import Button from '@material-ui/core/Button';
import axios from 'axios'


const App = () => {


const [ list, setList ] = useState([])
// const [ currentRow, setCurrentRow ] = useState({})
// const [ editing, setEditing ] = useState(false)

  useEffect(() => {
    fetchList()
    console.log('Get Data')
  },[]);


    // CRUD operations

    const fetchList = async () => {
      const res = await axios('http://localhost:4000/api/v1/flight')
      setList(res.data);
    }

    const deleteRow = id => {
      // setEditing(false)
      // setList(list.filter(item => item.id !== id))
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
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
          <h2>List Flight</h2>
          <div><Button variant="outlined">refresh</Button></div>
        </div>
        <DataTable list={list} editRow={editRow} deleteRow={deleteRow} getRow={getRow} />
      </div>
    )
  }

export default App
