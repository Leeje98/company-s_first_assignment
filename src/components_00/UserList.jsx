import React from 'react'
import './MainPage.css'

function User({ user }) {
  return (
    <li>
      <ul className='info_user'>
        <li>
          <div className='title'>제품ID : </div>
          <div className='inputstyle'>{user.productID}</div>
        </li>
        <li>
          <div className='title'>제품명 : </div>
          <div className='inputstyle'>{user.name}</div>
        </li>
        <li>
          <div className='title'>제조일자 : </div>
          <div className='inputstyle'>{user.produce}</div>
        </li>
        <li>
          <div className='title'>등록일자 : </div>
          <div className='inputstyle'>{user.registration}</div>
        </li>
        <li>
          <div className='title'>상세설명 : </div>
          <div className='inputstyle'>{user.detail}</div>
        </li>
        <li>
          <div className='title'>등록자 : </div>
          <div className='inputstyle'>{user.manager}</div>
        </li>
      </ul>
    </li>
    
  )
}

export default function UserList({ users, onModalHandler }) {
  return (
    <>
      {users.map((user) => (
        <User user={user} key={user.id} 
        />
      ))}
    </>
  )
}


