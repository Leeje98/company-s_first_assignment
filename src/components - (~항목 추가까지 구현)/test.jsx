import React from "react";



// SomethingList.jsx

const [modalVisibleId, setModalVisibleId] = useState("")

const onModalHandler = id => {
  setModalVisibleId(id)
}

<ul>
  {somethingList.map(list => (
   <li key={list.id}>
     {list.name} <button onClick={() => onModalHandler(list.id)}>상세</button>
     <ModalComponent
        id={list.id}
	modalVisibleId={modalVisibleId}
        setModalVisibleId={setModalVisibleId}
      />
   </li>
   ))
  }
</ul>



// ModalComponent.jsx

import React from 'react'

export default function ModalComponent({id, modalVisibleId, setModalVisibleId}) {
  const onCloseHandler = () => {
  	setModalVisibleId("")
  }
  
  return (
    <div className={modalVisibleId === id ? "d_block" : "d_none"} >
      <button onClick={onCloseHandler}>닫기</button>
      ...
    </div>
  )
}