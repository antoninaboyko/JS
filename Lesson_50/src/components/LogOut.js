import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const LogOut = () => {
    const dispatchFunc = useDispatch();
    const isLoggedIn = useSelector((state)=> state.isLoggedIn)

    const logout = (e) => {
        e.preventDefault();
        dispatchFunc({type: 'logOut'})
    }
  return (
    <div >
        {isLoggedIn && <button onClick={logout} className='logout'>Log Out</button>}
      </div>
  )
}

export default LogOut