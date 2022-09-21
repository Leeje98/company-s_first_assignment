// import React from "react";



// // SomethingList.jsx

// const [modalVisibleId, setModalVisibleId] = useState("")

// const onModalHandler = id => {
//   setModalVisibleId(id)
// }

// <ul>
//   {somethingList.map(list => (
//    <li key={list.id}>
//      {list.name} <button onClick={() => onModalHandler(list.id)}>상세</button>
//      <ModalComponent
//         id={list.id}
// 	      modalVisibleId={modalVisibleId}
//         setModalVisibleId={setModalVisibleId}
//       />
//    </li>
//    ))
//   }
// </ul>



// // ModalComponent.jsx

// import React from 'react'

// export default function ModalComponent({id, modalVisibleId, setModalVisibleId}) {
//   const onCloseHandler = () => {
//   	setModalVisibleId("")
//   }
  
//   return (
//     <div className={modalVisibleId === id ? "d_block" : "d_none"} >
//       <button onClick={onCloseHandler}>닫기</button>
//       ...
//     </div>
//   )
// }


////////////////////////////////////////////////////////////////////////////////////


import React, { useState } from "react";

const productData = [
  { id: 1, label: "product1", description: "description1" },
  { id: 2, label: "product2", description: "description2" },
  { id: 3, label: "product3", description: "333" },
  { id: 4, label: "product4", description: "description4" },
  { id: 5, label: "product5", description: "555iption5" },
  { id: 6, label: "product6", description: "description6" },
  { id: 7, label: "product7", description: "description7" },
];



const Test = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeObject, setActiveObject] = useState(null);

  function getClass(index) {
    return index === activeObject?.id ? "active" : "inactive";
  }

  // here className can not be "inactive" since Modal always shows activeObject
  // 여기서 className은 Modal이 항상 activeObject를 표시하기 때문에 "비활성"일 수 없습니다.
  const Modal = ({ object: { label, description } }) => (
    <div id="productModal" className="active">
      This is modal
      {/* <h2>{label}</h2> */}
      <hr/>
      <span className="description">{description}</span><br/>
      <button onClick={() => setShowModal(false)}>Close me</button>
    </div>
  );

  return (
    <>
      <ul className="list-menu">
        {productData.map(({ id, label, description }) => (
          <li
            key={id}
            onClick={() => {
              setActiveObject({ id, label, description });
              setShowModal(true);
            }}
            className={getClass(id)}
          >
            <h2>{label}</h2>
          </li>
        ))}
      </ul>
      {showModal ? <Modal object={activeObject} /> : null}
    </>
  );
};

export default Test;

