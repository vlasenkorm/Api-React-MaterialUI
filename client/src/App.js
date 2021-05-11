import React, { useState, useEffect } from 'react'
import DataTable from './Table/dataTable'
import axios from 'axios'


const App = () => {


const [ list, setList ] = useState([])
const [ currentRow, setCurrentRow ] = useState({})
const [ editing, setEditing ] = useState(false)

  useEffect(async () => {
     const fetchData = async () => {
      const result = await axios(
        'http://localhost:4000/api/v1/flight',
      );
 
      setList(result.data);
    };
 
    fetchData();
  },[]);

    // CRUD operations
    const deleteRow = id => {
      setEditing(false)
  
      setList(list.filter(item => item.id !== id))
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
      setEditing(true)
      setCurrentRow({ id: list.id })
    }

    return (
      <div className="container">
        <h2>View List</h2>
        <DataTable list={list} editRow={editRow} deleteRow={deleteRow} getRow={getRow} />
      </div>
    )
  }

export default App
