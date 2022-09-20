import React from 'react'
import './MainPage.css'

export default function CreateUser({ productID, name, Produce, registration, detail, manager, onChange, onCreate }) {
  return (
    <div className='modalBg'>
      <div className='CreateModal'>
        <h2 className='newTitle'>제품 목록</h2>
        <div className='inputBox'>
          <div className='title'>제품ID : </div>
          <input
            name='productID'
            onChange={onChange}
            value={productID}
          />
        </div>

        <div className='inputBox'>
          <div className='title'>제품명 : </div>
          <input
            name='name'
            onChange={onChange}
            value={name}
          />
        </div>
        
        <div className='inputBox'>
          <div className='title'>제조일자 : </div>
          <input
            name='Produce'
            onChange={onChange}
            value={Produce}
          />
        </div>

        <div className='inputBox'>
          <div className='title'>등록일자 : </div>
          <input
            name='registration'
            onChange={onChange}
            value={registration}
          />
        </div>
        
        <div className='inputBox'>
          <div className='title'>상세설명 : </div>
          <textarea
            name='detail'
            onChange={onChange}
            value={detail}
          />
        </div>

        <div className='inputBox'>
          <div className='title'>등록자 : </div>
          <input
            name='manager'
            onChange={onChange}
            value={manager}
          />
        </div>
        
        <button onClick={onCreate}>등록</button>
      </div>
    </div>
  )
}
