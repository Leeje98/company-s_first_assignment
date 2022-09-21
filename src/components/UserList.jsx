import React, { useState } from 'react'
import './MainPage.css'


export default function UserList({ users }) {

    /////
  const [showModal, setShowModal] = useState(false);
  const [activeObject, setActiveObject] = useState(null);

  function getClass(index) {
    return index === activeObject?.id ? "active" : "inactive";
  }

  // here className can not be "inactive" since Modal always shows activeObject
  // 여기서 className은 Modal이 항상 activeObject를 표시하기 때문에 "비활성"일 수 없습니다.
  const Modal = ({ object: { productID, name, produce, registration, detail, manager } }) => (
    <div id="productModal" className="active">
      This is modal
      <h3>제품 정보</h3>
      <hr/>
      <ul className='info_user'>
        <li>
          <div className='title'>제품ID : </div>
          <div className='inputstyle'>{productID}</div>
        </li>
        <li>
          <div className='title'>제품명 : </div>
          <div className='inputstyle'>{name}</div>
        </li>
        <li>
          <div className='title'>제조일자 : </div>
          <div className='inputstyle'>{produce}</div>
        </li>
        <li>
          <div className='title'>등록일자 : </div>
          <div className='inputstyle'>{registration}</div>
        </li>
        <li>
          <div className='title'>상세설명 : </div>
          <div className='inputstyle'>{detail}</div>
        </li>
        <li>
          <div className='title'>등록자 : </div>
          <div className='inputstyle'>{manager}</div>
        </li>
      </ul>
      <hr/>
      <button>수정</button>
      <button>삭제</button>
      <button onClick={() => setShowModal(false)}>모달창 닫기</button>
    </div>
  );
    /////


  return (
    <>
      <ul className="list-menu">
        {users.map(({ id, productID, name, produce, registration, detail, manager, onChange, onCreate, onClose }) => (
          <li
            key={id}
            onClick={() => {
              setActiveObject({ id, productID, name, produce, registration, detail, manager, onChange, onCreate, onClose });
              setShowModal(true);
            }}
            className={getClass(id)}
          >
              <ul className='info_user'>
                <li>
                  <div className='title'>제품ID : </div>
                  <div className='inputstyle'>{productID}</div>
                </li>
                <li>
                  <div className='title'>제품명 : </div>
                  <div className='inputstyle'>{name}</div>
                </li>
                <li>
                  <div className='title'>제조일자 : </div>
                  <div className='inputstyle'>{produce}</div>
                </li>
                <li>
                  <div className='title'>등록일자 : </div>
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
