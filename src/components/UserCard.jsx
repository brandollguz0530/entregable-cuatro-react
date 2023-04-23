import React from 'react'

const UserCard = ({user, deleteUser, handleClickEdit}) => {
  return (
    <article className='flex flex-col border border-gray-400 shadow-md'>
        <h3 className='text-center my-2 text-lg font-bold'>{user.first_name} {user.last_name}</h3>
        
        <div className=' my-2'>
          
          <img className=' w-[100px] aspect-[3/5] object-cover mx-auto rounded-sm  border border-gray-500 shadow-md' src={user.image_url ? user.image_url : "/images/noProfile.jpg"} alt="Imagen de usuario" />  
        </div>
        <ul className="text-left pl-4">
            <li className=' my-2'>
                <h2>Correo</h2>
                <span>{user.email}</span>
            </li>
            <li className=' my-2'>
                <h4>Cumpleaños</h4>
                <span>
                    <i className='bx bx-gift'></i>
                    {user.birthday}
                </span>
            </li>
        </ul>
        <div className="mt-auto flex justify-end mb-3">
          <button onClick={() => handleClickEdit(user)} className="mr-2 ml-4 text-xl bg-grey-p px-3">
          <i className='bx bxs-pencil' ></i>
            
          </button>
          <button onClick={() => deleteUser(user.id)} className="mr-4 text-xl bg-red-p px-3"> 
          <i className='bx bxs-trash'></i>
          </button>
        </div>

    </article>
  )
}

export default UserCard