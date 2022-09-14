import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.div`
  width: 90%;
  margin: 200px auto 0;
  padding: 20px;
  @media screen and (min-width:1025px) {
      width: 400px;
    }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 50px;
`

const InputBox = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
  /* border: 1px solid #333; */
`

const Name = styled.p`
  width: 100px;
  height: 40px;
  font-size: 18px;
  line-height: 40px;
  margin: 0;
  /* background-color: #ccc; */
`

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: calc(100% - 100px);
  height: 40px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #333;
  background: #fff;
  box-sizing: border-box;
`;

const CheckInput = styled.input`
  margin: 20px 10px 10px 10px;
  width: 20px;
  height: 20px;
  :checked {
    accent-color: #3f8aec;
  }
`

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Button = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: block;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: #3f8aec;
  @media screen and (min-width:1025px) {
      width: 190px;
    }
  /* ${({ disabled }) =>
    disabled &&
    `
    background-color: #efefef;
  `} */
`;





export default function LoginPage() {
  const [ idValue, setIdVelue ] = useState('')
  const [ password, setPassowrod ] = useState('')

  const handleChangeId = (event) => {
    const IdCheck = /[(ㄱ-ㅎ가-힣ㅏ-ㅣ),(\s)]/g;
    
    if (IdCheck.test(event.target.value)) {
      alert('한글과 공백은 입력할 수 없습니다')
    } else {
      setIdVelue(event.target.value);
    }
  }  // ID 입력란 공백과 한글 입력 불가 기능

  const handleChangePw = (event) => {
    const IdCheck = /[(ㄱ-ㅎ가-힣ㅏ-ㅣ)]/g;
    
    if (IdCheck.test(event.target.value)) {
      alert('한글은 입력할 수 없습니다')
    } else {
      setPassowrod(event.target.value);
    }
  } // 비밀번호 입력란 한글 입력 불가 기능 // input password 고유기능으로 한글은 입력 되지 않는듯하다


  const loginBtnClick = () => {
    
    const ID = 'bpns1234'
    const PW = 'bpns1234!!'
    // 임의로 등록한 회원정보 - 로그인 기능 테스트에 적용

    if( idValue !== ID ) {
      alert('존재하지 않는 아이디입니다')
      setIdVelue('')
    } else if( idValue === ID && password !== PW) {
      alert('패스워드를 확인해주세요')
      setPassowrod('')
    } else if( idValue === ID && password === PW) {
      alert('로그인 되었습니다')
      window.open('/main', '_self')
    }
  } // 로그인버튼 클릭시 조건 확인 -> 조건만족시 페이지 이동

  return (
    <Container>
      <Title>제품 관리 시스템</Title>
      <InputBox>
        <Name>아이디</Name> 
        <Input id='id' name='id' placeholder='아이디를 입력해주세요' 
               type='text' value={idValue} onChange={handleChangeId} />
      </InputBox>
      
      <InputBox>
        <Name>비밀번호</Name> 
        <Input id='password' name='passoword' placeholder='비밀번호를 입력해주세요'
                type='password' value={password} onChange={handleChangePw}/>
      </InputBox>

      <CheckInput
        id='autoLogin'
        name='autoLogin'
        type='checkbox'
      />
      <label htmlFor="autoLogin">자동로그인</label>
      
      <ButtonBox>
        <Button style={{ flex: 1, marginRight: '20px' }} onClick={loginBtnClick}>로그인</Button>
        <Link className='joinBtn' to='/join' style={{ textDecoration: 'none', flex: 1 }}>
          <Button style={{ width: '100%' }}>회원가입</Button>
        </Link>
      </ButtonBox>
    
    </Container>
  )
}
