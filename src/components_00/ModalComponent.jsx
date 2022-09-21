import React from 'react'
import styled from 'styled-components'




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
  /* right: 10px; */
  background-color: #3f8aec;
  border: none;
  color: white;
  width: 70px;
  height: 40px;
`




export default function ModalComponent({id, modalVisibleId, setModalVisibleId}) {
  const onCloseHandler = () => {
  	setModalVisibleId("")
  }
  
  return (
    // <div className={modalVisibleId === id ? "d_block" : "d_none"} >
    //   <button onClick={onCloseHandler}>닫기</button>
    //   ...
    // </div>
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
            // ref={ProductIDInput}
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
            // ref={NameInput}
            placeholder='* 필수입력'
            onChange={onChangeV}
            value={nameV}
          />
        </InputBox>
        
        <InputBox>
          <Title>제조일자 : </Title>
          <input
            className='CreateModalinput'
            name='produce'
            // ref={ProduceInput}
            placeholder='yyyy-mm-dd'
            onChange={onChangeV}
            value={produceV}
          />
        </InputBox>

        <InputBox>
          <Title>등록일자 : </Title>
          <input
            className='CreateModalinput'
            name='registration'
            // ref={RegistrationInput}
            placeholder='yyyy-mm-dd'
            onChange={onChangeV}
            value={registrationV}
          />
        </InputBox>
        
        <InputBox>
          <Title>상세설명 : </Title>
          <textarea
            className='CreateModalinput'
            name='detail'
            onChange={onChangeV}
            value={detailV}
            style={{ height:'100px', padding:'5px' }}
          />
        </InputBox>

        <InputBox>
          <Title>등록자 : </Title>
          <input
            className='CreateModalinput'
            name='manager'
            onChange={onChangeV}
            value={managerV}
          />
        </InputBox>
        
        <CreateButton onClick={onVueClose} style={{ left: '5px'}}>취소</CreateButton>
        {/* <CreateButton onClick={onCreate} style={{ right: '5px'}}>등록</CreateButton> */}
      </InnerModal>
    </CreateModal>
  </>
  )
}