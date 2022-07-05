import React from 'react'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
const Private = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div>
    <h1>Private Route</h1>
    <button onClick={logout}>Cerrar sesión</button>
    </div>
  )
}

export default Private