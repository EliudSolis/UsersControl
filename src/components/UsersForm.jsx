import React, { useEffect } from 'react'
import axios from 'axios'
import {useForm} from 'react-hook-form'

const defaultForm = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',    
    birthday: '',
}

const UsersForm = ({getAllUsers, updateInfo, createUser,setUpdateInfo}) => {

    const {register, handleSubmit, reset} = useForm()

    useEffect(() => {
      if(updateInfo){
        reset(updateInfo)
      } 
    }, [updateInfo])

    const updateUser = data =>{
    const URL = `https://users-crud1.herokuapp.com/users/${updateInfo.id}/`
            axios.patch(URL, data)
            .then(res =>{
                console.log(res.data)
                getAllUsers()
            })
            .catch(err => console.log(err))
    }



    const submit = data =>{
        if(updateInfo){
            updateUser(data)
            setUpdateInfo()
            reset(defaultForm)
        } else {
            createUser(data)
            reset(defaultForm)
    }
            
             
    }


   

 return (
    <form  className="form" onSubmit={handleSubmit(submit)}>
        <ul className="form__list">
            <div className='form__name__input'>
            <li className="form__element">
                <label htmlFor="first_name"><i class='bx bxs-user'></i></label>  
                <input placeholder='Name' type="text" {...register('first_name')}  id="first_name"/> 
            </li>
            <li className="form__element"> 
                <label htmlFor="last_name"></label>
                <input placeholder='Last Name' type="text" {...register('last_name')} id="last_name"/> 
            </li>
            </div>
            <li className="form__element">
                <label htmlFor="email"><i class='bx bxs-envelope'></i></label> 
                <input placeholder='Email' type="email" {...register('email')} id="email"/> 
            </li>
            <li className="form__element">
                <label htmlFor="password"> <i class='bx bxs-lock-alt' ></i></label>
                <input placeholder='Password' type="password" {...register('password')} id="password"/> 
            </li>
            <li className="form__element"> 
                <label htmlFor="birthday"><i class='bx bxs-calendar-alt' ></i></label> 
                <input placeholder='Birthday' type="text" {...register('birthday')} id="birthday"/> 
            </li>
        </ul>
        <button className="form__btn"> {updateInfo ? "Update User": "Create User"}</button>
    </form>
  )
}

export default UsersForm