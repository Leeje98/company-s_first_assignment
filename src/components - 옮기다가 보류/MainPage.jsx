import React from 'react'
import { useRef } from 'react'
import './MainPage.css'
import UserList from './UserList'
import CreateUser from './CreateUser'
import { useState } from 'react'



export default function MainPage() {
  const [ modal, setModal ] = useState(false)
  const [ inputs, setInputs ] = useState({
    productID: '', 
    name: '',
    produce: '',
    registration: '',
    detail: '',
    manager: ''
  })
  const { productID, name, produce, registration, detail, manager } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [ name ]: value
    })
    setModal(false)
  }

  const [ users, setUsers ] = useState([
      {
        id: 1,
        productID: 'BPSOLUTION01',
        name: '제품명01',
        produce: '2022-09-01',
        registration: '2022-09-01',
        detail: '상세설명',
        manager: '홍길동'
      },
      {
        id: 2,
        productID: 'BPSOLUTION02',
        name: '제품명02',
        produce: '2022-09-02',
        registration: '2022-09-02',
        detail: '상세설명',
        manager: '홍길동'
      },
      {
        id: 3,
        productID: 'BPSOLUTION03',
        name: '제품명03',
        produce: '2022-09-03',
        registration: '2022-09-03',
        detail: '상세설명',
        manager: '홍길동'
      },
      {
        id: 4,
        productID: 'BPSOLUTION04',
        name: '제품명04',
        produce: '2022-09-04',
        registration: '2022-09-04',
        detail: '상세설명',
        manager: '홍길동'
      },
    ])


    const nextId = useRef(5);
    const onCreate = () => {
      // 나중에 구현 할 배열에 항목 추가하는 로직

      const Date = /^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/

      if( !Date.test(inputs.produce)) {
        alert('날짜를 형식에 맞게 입력해주세요')
        inputs.produce.focus()
        return;
      } else{
        const user = {
          id: nextId.current,
          productID, 
          name,
          produce,
          registration,
          detail,
          manager
        }   
        setUsers([...users, user]) // 1. ...스프레드 연산자 사용 //{ 기존배열, 추가한배열요소(인듯) }
        // setUsers(users.concat(user))  // 2. concat 사용

        setInputs({
          productID: '', 
          name: '',
          produce: '',
          registration: '',
          detail: '',
          manager: ''
        })

        nextId.current += 1;
        setModal(false)
      }////////////////////
    }

    
    return (
      <>
      <div className='wrap'>
        { modal === true ? 
        <CreateUser
          productID={productID}
          name={name}
          produce={produce}
          registration={registration} 
          detail={detail}
          manager={manager}
          onChange={onChange}
          onCreate={onCreate} 
        />
       : null }
        <h1 className='userTitle'>제품 리스트</h1>
        <button className='newBtn'
          onClick={()=>{setModal(true)}}
        >신규</button>
        <section className='userOuter'>
          <ul className='product_user'>
            <UserList users={users} />
          </ul>
        </section>
      </div>
      </>
    )
}
