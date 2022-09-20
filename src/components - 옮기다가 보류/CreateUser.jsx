import React from 'react'
import './MainPage.css'
import styled from 'styled-components'
import { useRef, forwardRef, useImperativeHandle, useState } from 'react'

const ModalBg = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: gray;
  opacity: 0.7;
  z-index: 1;
`

const CreateModal = styled.div`
  position: absolute;
  background-color: white;
  width: calc(100% - 80px);
  height: calc(100vh - 60px);
  margin: 30px 40px;
  top: 0;
  left: 0;
  padding: 30px;
  box-sizing: border-box;
  z-index: 2;
`

const InnerModal = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const NewTitle = styled.h2`
  text-align: center;
  font-weight: 500;
  font-size: 27px;
  margin-bottom: 50px;
`

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`

const Title = styled.div`
  width: 100px;
  font-size: 18px;
  line-height: 30px;
`

const CreateButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #3f8aec;
  border: none;
  color: white;
  width: 60px;
  height: 30px;
`



// export default function CreateUser({ productID, name, produce, registration, detail, manager, onChange, onCreate }) {
export default function CreateUser({ productID, name, produce, registration, detail, manager, onChange }) {
  const [ inputs, setInputs ] = useState({
    productID: '', 
    name: '',
    produce: '',
    registration: '',
    detail: '',
    manager: ''
  })
  // const { productID, name, produce, registration, detail, manager } = inputs;

  const ProductIDInput = useRef(null)
  const NameInput = useRef(null)
  const ProduceInput = useRef(null)
  const RegistrationInput = useRef(null)

  const nextId = useRef(5);
    const onCreate = () => {
      // 나중에 구현 할 배열에 항목 추가하는 로직

      const Date = /^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/

      if( !Date.test(ProduceInput.current.value)) {
        alert('날짜를 형식에 맞게 입력해주세요')
        ProduceInput.current.focus()
        return;
      } else {
        const user = {
          id: nextId.current,
          productID, 
          name,
          produce,
          registration,
          detail,
          manager
        }   
        // setUsers([...users, user]) // 1. ...스프레드 연산자 사용 //{ 기존배열, 추가한배열요소(인듯) }
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
        // setModal(false)
      }////////////////////
    }

  return (
    <>
      <ModalBg></ModalBg>
      <CreateModal>
        <InnerModal>
          <NewTitle>제품 정보</NewTitle>
          <InputBox>
            <Title>제품ID : </Title>
            <input
              className='CreateModalinput'
              name='productID'
              ref={ProductIDInput}
              placeholder='* 필수입력'
              onChange={onChange}
              value={productID}
            />
          </InputBox>

          <InputBox>
            <Title>제품명 : </Title>
            <input
              className='CreateModalinput'
              name='name'
              ref={NameInput}
              placeholder='* 필수입력'
              onChange={onChange}
              value={name}
            />
          </InputBox>
          
          <InputBox>
            <Title>제조일자 : </Title>
            <input
              className='CreateModalinput'
              name='produce'
              ref={ProduceInput}
              placeholder='yyyy-mm-dd'
              onChange={onChange}
              value={produce}
            />
          </InputBox>

          <InputBox>
            <Title>등록일자 : </Title>
            <input
              className='CreateModalinput'
              name='registration'
              ref={RegistrationInput}
              placeholder='yyyy-mm-dd'
              onChange={onChange}
              value={registration}
            />
          </InputBox>
          
          <InputBox>
            <Title>상세설명 : </Title>
            <textarea
              className='CreateModalinput'
              name='detail'
              onChange={onChange}
              value={detail}
              style={{ height:'100px', padding:'5px' }}
            />
          </InputBox>

          <InputBox>
            <Title>등록자 : </Title>
            <input
              className='CreateModalinput'
              name='manager'
              onChange={onChange}
              value={manager}
            />
          </InputBox>
          
          <CreateButton onClick={onCreate}>등록</CreateButton>
        </InnerModal>
      </CreateModal>
    </>
  )
}
