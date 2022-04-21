import React from 'react'
import { useSelector } from 'react-redux';
const Dashboard = () => {
    const user = useSelector(state=> state.authReducer.user);

  return (
    <div>
      {!user ? (<h1>welcome to dashboard</h1>):(
        <>
        <h1>Dashboard</h1>
        <h3> name : {user.name}  </h3>
        <h2> Last Name : {user.lastName}   </h2>
        <h2> Email : {user.email}</h2>
        </>
      )}
    </div>
  )
}

export default Dashboard