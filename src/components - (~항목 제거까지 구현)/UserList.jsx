import React, { useState } from 'react'
import './MainPage.css'
import styled from 'styled-components';


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
  /* justify-content: space-between; */
  margin: 10px 0;
`

const Title = styled.div`
  width: 100px;
  /* font-size: 18px; */
  line-height: 30px;
`

const Button = styled.button`
  position: absolute;
  bottom: 10px;
  /* right: 10px; */
  background-color: #3f8aec;
  border: none;
  color: white;
  width: 70px;
  height: 40px;
`


export default function UserList({ users, onRemove }) {

  
  const [showModal, setShowModal] = useState(false);           // 모달창이 보이고 안보이는 상태관리
  const [activeObject, setActiveObject] = useState(null);      // 모달창에 들어갈 리스트 내용 요소

  function getClass(index) {
    return index === activeObject?.id ? "active" : "inactive";
  }

  // here className can not be "inactive" since Modal always shows activeObject
  // 여기서 className은 Modal이 항상 activeObject를 표시하기 때문에 "비활성"일 수 없습니다.
  const Modal = ({ object: { id, productID, name, produce, registration, detail, manager, onRemove } }) => (
    <div id="productModal" className="active">
      <ModalBg></ModalBg>
      <CreateModal>
      <InnerModal>
      <NewTitle>제품 정보</NewTitle>
      <ul className='info_user'>
        <InputBox>
          <Title>제품ID : </Title>
          <div className='inputstyle'>{productID}</div>
        </InputBox>
        <InputBox>
          <Title>제품명 : </Title>
          <div className='inputstyle'>{name}</div>
        </InputBox>
        <InputBox>
          <Title>제조일자 : </Title>
          <div className='inputstyle'>{produce}</div>
        </InputBox>
        <InputBox>
          <Title>등록일자 : </Title>
          <div className='inputstyle'>{registration}</div>
        </InputBox>
        <InputBox>
          <Title>상세설명 : </Title>
          <div className='inputstyle Textarea'>{detail}</div>
        </InputBox>
        <InputBox>
          <Title>등록자 : </Title>
          <div className='inputstyle'>{manager}</div>
        </InputBox>
      </ul>
      <Button style={{ left:0 }}>수정</Button>
      <Button className='removeBtn' onClick={() => {
        console.log('삭제 요청');
        console.log(id);

        onRemove(id)
        setShowModal(false)
        }}>삭제</Button>
      <Button style={{ right:0 }} onClick={() => setShowModal(false)}>확인</Button>
      </InnerModal>
      </CreateModal>
    </div>
  );
    /////


  return (
    <>
      <ul className="list-menu">
        {users.map(({ id, productID, name, produce, registration, detail, manager, onChange }) => (
          <li
            key={id}
            onClick={() => {
              // console.log(onRemove)
              setActiveObject({ id, productID, name, produce, registration, detail, manager, onChange, onRemove });
              setShowModal(true);
            }}
            className={getClass(id)}
          >
              <ul className='info_user'>
                <li>
                  <Title>제품ID : </Title>
                  <div className='inputstyle'>{productID}</div>
                </li>
                <li>
                  <Title>제품명 : </Title>
                  <div className='inputstyle'>{name}</div>
                </li>
                <li>
                  <Title>제조일자 : </Title>
                  <div className='inputstyle'>{produce}</div>
                </li>
                <li>
                  <Title>등록일자 : </Title>
                  <div className='inputstyle'>{registration}</div>
                </li>
                {/* 리스트에 노출되는 항목들로, 상세설명과 등록자 제외 */}
              </ul>
            </li>
        ))}
      </ul>
      {showModal ? <Modal object={activeObject} /> : null}
      {/* <ul className="list-menu">
        {users.map((user) => (
          <User user={user} key={user.id} />
        ))}
      </ul> */}
    </>
  )
}
