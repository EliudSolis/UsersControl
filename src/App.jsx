import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import UsersList from './components/UsersList'
import UsersForm from './components/UsersForm'

function App() {
const [users, setUsers] = useState()
const [updateInfo, setUpdateInfo] = useState()

const getAllUsers = () =>{
  const URL = "https://users-crud1.herokuapp.com/users/"
  axios.get(URL)
  .then(res => setUsers(res.data))
  .catch(err => console.log("Data not found", err))
}

useEffect(() => {
  getAllUsers() 
}, [])



const createUser = (data) =>{
  const URL = "https://users-crud1.herokuapp.com/users/"
  axios.post(URL, data)
  .then(res => {
      console.log(res.data)
      getAllUsers()
  })
  .catch(err => console.log(err))
}


  return (
    <div className="App">
      <UsersForm getAllUsers={getAllUsers} updateInfo={updateInfo} createUser={createUser} setUpdateInfo={setUpdateInfo}/>
      <hr />
      <div className='card-container'>
        {
          users?.map(user =>(
             <UsersList key={user.id} user={user} getAllUsers={getAllUsers} setUpdateInfo={setUpdateInfo}/>
          ))
         
        }
      </div>

    </div>
  )
}

export default App
