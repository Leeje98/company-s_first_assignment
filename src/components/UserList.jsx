import React, { useState } from 'react'
import './MainPage.css'






export default function UserList({ users, onRemove, onUpdate }) {

  
  const [showModal, setShowModal] = useState(false);           // 모달창이 보이고 안보이는 상태관리
  const [activeObject, setActiveObject] = useState(null);      // 모달창에 들어갈 리스트 내용 요소
             //안들어가고있음
  const [editingMode, setEditingMode] = useState(false)                // 수정모드에 진입했는지 여부 (수정버튼 클릭 시)

  const [ editingInputs, setEditingInputs ] = useState(users, {       // 수정값 반영 요소들
    // productID: {users.productID.value},
    productID: '',
    name: '',
    produce: '',
    registration: '',
    detail: '',
    manager: ''
  })

  function getClass(index) {
    return index === activeObject?.id ? "active" : "inactive";
  }

  // function handleChange(e) {
  //   const {name, value} = e.target
  //   setActiveObject(pre => {
  //     return {
  //       ...pre,
  //       [ name ]: value
  //     }
  //   })
  // }

  function handleToggleEdit(event, data ) {                     // 수정모드 진입여부를 컨트롤 (수정버튼 클릭 시)

    // alert(JSON.stringify(data))
    // setEditing(!editing)                                         // 수정모드에 진입했는지를 판단하고 뒤집음 (버튼 글자 바뀜)     
    
    if (editingMode) {     // 수정모드에서 저장 시

      const Date = /^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/

      if((data.name) === '' ) {
        alert('제품명은 필수 입력입니다')
      } else if( !Date.test(data.produce) && (data.produce !== '') ) {
        alert('날짜를 형식에 맞게 입력해주세요')
      } else if( !Date.test(data.registration) && (data.registration !== '') ) {
        alert('날짜를 형식에 맞게 입력해주세요')
      } else {
        onUpdate(data.id, { 
          productID: data.productID,
          name: data.name,
          produce: data.produce,
          registration: data.registration,
          detail: data.detail,
          manager: data.manager
        })
        setActiveObject(pre => ({ 
          ...pre,
          // id: data.id,
          productID: data.productID,
          name: data.name,
          produce: data.produce,
          registration: data.registration,
          detail: data.detail,
          manager: data.manager
        }))
        // handleChange(event, data)
        alert('수정되었습니다') 
        setEditingMode(!editingMode)        
      }
    } else {                                                  // 보기모드에서 수정모드 집입 시
      setEditingInputs({      
        productID: data.productID,                                   
        name: data.name,
        produce: data.produce,
        registration: data.registration,
        detail: data.detail,
        manager: data.manager
      })
      setEditingMode(!editingMode)        
    }
    
    // setEditingMode(!editingMode)                          // 수정모드에 진입했는지를 판단하고 뒤집음 (버튼 글자 바뀜)     
  }

  


  const { name, produce, registration, detail, manager } = editingInputs;

  // function handleChange(e) {
  //   const {name, value} = e.target
  //   setActiveObject(pre => {
  //     return {
  //       ...pre,
  //       [ name ]: value
  //     }
  //   })
  // }

  
  // const handleChange = (e) => {
  //   const {name, value} = e.target
  //   setActiveObject(pre => {
  //     return {
  //       ...pre,
  //       [ name ]: value
  //     }
  //   })
  // }

  
  


  // here className can not be "inactive" since Modal always shows activeObject
  // 여기서 className은 Modal이 항상 activeObject를 표시하기 때문에 "비활성"일 수 없습니다.
  const Modal = ({ object: { id, productID, name, produce, registration, detail, manager, onRemove }, onAccept }) => {

    const [ editing, setEditing ] = useState({
      id: id,
      productID: productID,
      name: name,
      produce: produce,
      registration: registration,
      detail: detail,
      manager: manager
    })

    // const handleChange = (e) => {
    //   const {name, value} = e.target
    //   setActiveObject(pre => {
    //     return {
    //       ...pre,
    //       [ name ]: value
    //     }
    //   })
    // }

    const _handleChange = (e) => {
      const {name, value} = e.target
      setEditing(pre => {
        return {
          ...pre,
          [ name ]: value
        }
      })
    }    

    return (
      <div id="productModal" className="active">
      <div className='mobalBg'></div>
      <div className='CreateModal'>
        <div className='InnerModal'>
        <h2 className='NewTitle'>제품 정보</h2>
        <ul className='info_user'>
          {
            editingMode ? (           // 수정 모드인가?
              <>                  
              <div className='InputBox'>          {/* 수정모드라면 value값들이 input상태  */}
                <div className='Title'>제품ID : </div>
                <div className='inputstyle'>{productID}</div>
              </div>
              <div className='InputBox'>
                <div className='Title'>제품명 : </div>        
                <div className='inputstyle'>
                  <input
                    name='name' 
                    onChange={_handleChange}
                    // onBlur={handleChange}
                    value={editing.name}
                  />
                  </div>
              </div>
              <div className='InputBox'>
                <div className='Title'>제조일자 : </div>
                <div className='inputstyle'>
                  <input
                    name='produce' 
                    onChange={_handleChange}
                    placeholder='yyyy-mm-dd'
                    // onBlur={handleChange}
                    value={editing.produce}
                  />
                  </div>
              </div>
              <div className='InputBox'>
                <div className='Title'>등록일자 : </div>
                <div className='inputstyle'>
                  <input
                    name='registration' 
                    onChange={_handleChange}
                    placeholder='yyyy-mm-dd'
                    // onBlur={handleChange}
                    value={editing.registration}
                  />
                  </div>
              </div>
              <div className='InputBox'>
                <div className='Title'>상세설명 : </div>
                <div className='inputstyle Textarea'>
                  <textarea
                    name='detail' 
                    onChange={_handleChange}
                    // onBlur={handleChange}
                    value={editing.detail}
                  />
                  </div>
              </div>
              <div className='InputBox'>
                <div className='Title'>등록자 : </div>
                <div className='inputstyle'>
                  <input
                    name='manager' 
                    onChange={_handleChange}
                    // onBlur={handleChange}
                    value={editing.manager}
                  />
                  </div>
              </div>
              </>
            ) : (
              <>                                     {/* 수정모드가 아니라면 value값 부분 div표시 */}
              <div className='InputBox'>
                <div className='Title'>제품ID : </div>
                <div className='inputstyle'>{productID}</div>
              </div>
              <div className='InputBox'>
                <div className='Title'>제품명 : </div>
                <div className='inputstyle'>{editing.name}</div>
              </div>
              <div className='InputBox'>
                <div className='Title'>제조일자 : </div>
                <div className='inputstyle'>{editing.produce}</div>
              </div>
              <div className='InputBox'>
                <div className='Title'>등록일자 : </div>
                <div className='inputstyle'>{editing.registration}</div>
              </div>
              <div className='InputBox'>
                <div className='Title'>상세설명 : </div>
                <div className='inputstyle Textarea'>{editing.detail}</div>
              </div>
              <div className='InputBox'>
                <div className='Title'>등록자 : </div>
                <div className='inputstyle'>{editing.manager}</div>
              </div>
              </>
            )
          }
          
          
        </ul>
        <button className='Button editingBtn' onClick={(e) => {onAccept(e, editing)}}>
          { editingMode ? '적용' : '수정' }
        </button>

        { editingMode ? null : 
        <button className='Button' onClick={() => {
          console.log('삭제 요청');
          console.log(id);

          onRemove(id)
          setShowModal(false)
          }}>삭제</button> }

        { editingMode ? 
        <button className='Button' style={{ right:0 }} onClick={() => {setEditingMode(false)}}>취소</button>
         : 
        <button className='Button' style={{ right:0 }} onClick={() => {setShowModal(false); setEditingMode(false)}}>확인</button> }
        </div>
      </div>
    </div>
    )
  }




  


  return (
    <>
      <div className="list-menu">
      {/* <div> */}
        {users.map(({ id, productID, name, produce, registration, detail, manager, onChange, onUpdate }) => (
          <li
            key={id}
            onClick={() => {
              // console.log(onRemove)
              setActiveObject({ id, productID, name, produce, registration, detail, manager, onChange, onRemove, onUpdate });
              setShowModal(true);
            }}
            className={getClass(id)}
          >
              <ul className='info_user'>
                <li>
                  <div className='Title'>제품ID : </div>
                  <div className='inputstyle'>{productID}</div>
                </li>
                <li>
                  <div className='Title'>제품명 : </div>
                  <div className='inputstyle'>{name}</div>
                </li>
                <li>
                  <div className='Title'>제조일자 : </div>
                  <div className='inputstyle'>{produce}</div>
                </li>
                <li>
                  <div className='Title'>등록일자 : </div>
                  <div className='inputstyle'>{registration}</div>
                </li>
                {/* 리스트에 노출되는 항목들로, 상세설명과 등록자 제외 */}
              </ul>
            </li>
        ))}
      </div>
      {showModal ? <Modal object={activeObject} onAccept={handleToggleEdit} /> : null}
    </>
  )
}
