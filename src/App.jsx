import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Modal from './components/Modal'
import Header from './components/Header'
import { useForm } from 'react-hook-form'
import UserList from './components/UserList'


const BASE_URL = "https://users-crud.academlo.tech"

function App() {
  const [users, setUsers] = useState([])
  const [editModal, setEditModal] = useState()
  const [isShowForm, setIsShowForm] = useState(false)
  const {register, handleSubmit, reset, formState: {errors}} = useForm()

  const submit = (data) => {
    if(!data.birthday){
      data.birthday = null 
    }
    if(!data.image_url){
      data.image_url = null 
    }

    if(editModal){
      EditUser(data)
    }else{
    createUser(data)
    }
    
  }

  const createUser = (data) => {
    const URL = BASE_URL + "/users/"

    axios
    .post(URL, data)
    .then(() => {
      getAllUsers()
      reset({

        first_name: "",
      
        last_name: "",
      
        email: "",
      
        password: "",
      
        birthday: "",
      
        image_url: "",
      
      })
    setIsShowForm(!isShowForm)
    })
    .catch((err) => console.log(err))
  }

  const deleteUser = (id) => {
    const URL = BASE_URL + `/users/${id}/`

    axios
      .delete(URL)
      .then(() => getAllUsers())
      .catch((err) => console.log(err))
  }

  const getAllUsers = () => {
    const URL = BASE_URL + "/users/"

  axios
    .get(URL)
    .then((res) => setUsers(res.data))
    .catch((err) => console.log(err))

}

  const handleClickEdit = (data) => {
    setIsShowForm((isShowForm) => !isShowForm )
    reset(data)
    setEditModal(data.id)
  }
  const EditUser = (data) => {
    const URL = BASE_URL + `/users/${editModal}/`

    axios
      .patch(URL, data)
      .then(() => {
        getAllUsers()
        reset({

          first_name: "",
        
          last_name: "",
        
          email: "",
        
          password: "",
        
          birthday: "",
        
          image_url: "",
        
        })
        setIsShowForm(!isShowForm)
        setEditModal()
      })
      .catch((err) => console.log(err))

  }

  
  useEffect (() => {
    getAllUsers()

  }, [])

  return (
    <main className=' font-sans'>
      <Header  setIsShowForm={setIsShowForm}/>
      <Modal 
      register={register} 
      handleSubmit={handleSubmit} 
      isShowForm={isShowForm} 
      setIsShowForm={setIsShowForm}
      submit={submit}
      reset={reset}
      setEditModal={setEditModal}
      editModal={editModal}
      errors={errors}
      />
      <UserList users={users} deleteUser={deleteUser} handleClickEdit={handleClickEdit}/> 
    </main>
  )
}

export default App
