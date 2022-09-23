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
  }

  const [ users, setUsers ] = useState([
      {
        id: 1,
        productID: 'BPSOLUTION01',
        name: '제품명01',
        produce: '2022-09-01',
        registration: '2022-09-01',
        detail: "상세설명01 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quod!",
        manager: '홍길동'
      },
      {
        id: 2,
        productID: 'BPSOLUTION02',
        name: '제품명02',
        produce: '2022-09-02',
        registration: '2022-09-02',
        detail: '상세설명02 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed minima quisquam quia.',
        manager: '아인슈타인'
      },
      {
        id: 3,
        productID: 'BPSOLUTION03',
        name: '제품명03',
        produce: '2022-09-03',
        registration: '2022-09-03',
        detail: '상세설명03 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, quis corrupti.',
        manager: '엘렌워커'
      },
      {
        id: 4,
        productID: 'BPSOLUTION04',
        name: '제품명04',
        produce: '2022-09-04',
        registration: '2022-09-04',
        detail: '상세설명04 Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi.',
        manager: '윤동주'
      },
    ])


    const nextId = useRef(5);
    const onClose = () => {
      setModal(false)
    }
    const onCreate = () => {
      // 나중에 구현 할 배열에 항목 추가하는 로직

      const Date = /^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/
      const IdCk = /^(?=.*?[A-Z])(?=.*?[0-9]).{12,12}$/

      if((inputs.productID) === '' || (inputs.name) === '' ) {
        alert('제품ID와 제품명은 필수 입력입니다')
      } else if( !IdCk.test(inputs.productID)){
        alert('제품ID를 올바르게 입력해주세요 \n(숫자, 영어 대문자 조합 12자리)')
      } else if( !Date.test(inputs.produce) && (inputs.produce !== '') ) {
        alert('날짜를 형식에 맞게 입력해주세요')
      } else if( !Date.test(inputs.registration) && (inputs.registration !== '') ) {
        alert('등록일자를 형식에 맞게 입력해주세요')
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
      }
    }

    const onRemove = (id) => {

      if(window.confirm('해당 내용을 삭제 하시겠습니까?')) {
      // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
      // = user.id 가 id 인 것을 제거함
      setUsers(users.filter(user => user.id !== id))
      console.log(`${id} 삭제완료`) 
      alert('삭제되었습니다')
      } 
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
          onClose={onClose}
        />
       : null }
        <h1 className='userTitle'>제품 리스트</h1>
        <button className='newBtn'
          onClick={()=>{setModal(true)}}
        >신규</button>
        <section className='userOuter'>
          <div className='product_user'>
            <UserList 
              users={users} 
              onRemove={onRemove}
            />
          </div>
        </section>
      </div>
      </>
    )
}
