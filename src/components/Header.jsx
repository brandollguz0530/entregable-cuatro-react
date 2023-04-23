import React from 'react'

const Header = ({setIsShowForm}) => {

    const handleClickShowModal = () => {
      setIsShowForm((isShowForm) => !isShowForm )
    }
  return (
    <header className='flex justify-between items-center p-4 mt-6'>
        <h1 className='text-left text-2xl font-bold'>Usuarios</h1>
        
        <button onClick={handleClickShowModal} className='bg-purple-p text-white p-2 hover:bg-purple-p/90 transition-colors text-sm ml-auto border border-gray-300 px-4 py-2 rounded-lg flex gap-2 '><i className='bx bx-plus-medical mt-1'></i>  Crear Nuevo Usuario</button>
    </header>
  )
}

export default Header