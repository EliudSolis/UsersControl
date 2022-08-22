import React from 'react'
import axios from 'axios'

const UsersList = ({user,getAllUsers, setUpdateInfo}) => {
    
    const deleteUser = (id) =>{
       const URL = `https://users-crud1.herokuapp.com/users/${id}`
       axios.delete(URL)
       .then(res =>{
        console.log(res.data)
        getAllUsers()
       })
       .catch(err => console.log(err))
    }

    const getInfoUpdate = () =>{
        setUpdateInfo(user)
    }



  return (
    <article className='card'>
        <ul className="card__list">
            <li className="card__item">Name: <br/><span className="card__span">{user.first_name}</span></li>
            <li className="card__item">Lastname: <br/><span className="card__span">{user.last_name}</span></li>
            <li className="card__item">Email: <br/><span className="card__span">{user.email}</span></li>
            <li className="card__item">Birthday: <br/><span className="card__span">{user.birthday}</span></li>
        </ul>
        <div className='card__btn__container'>
        <button className='card__btn' onClick={() => deleteUser(user.id)}>Delete</button>
        <button className='card__btn' onClick={getInfoUpdate}>Update</button>
        </div>
    </article>
  )
}

export default UsersList