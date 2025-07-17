import React from 'react'
import { useNavigate } from 'react-router-dom';

function User() {
  const navigate = useNavigate();
  return (
    <div>
      <button onclick = {()=>navigate('/')}>Home</button>
    </div>
  )
}

export default User